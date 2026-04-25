"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Send, Mail, Instagram, Twitter, Linkedin, CheckCircle2, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const socials = [
  {
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    href: "https://instagram.com/joinwhim",
    label: "@joinwhim",
  },
  {
    name: "Twitter / X",
    icon: <Twitter className="h-5 w-5" />,
    href: "https://x.com/joinwhim",
    label: "@joinwhim",
  },
  {
    name: "TikTok",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.82a8.18 8.18 0 0 0 4.78 1.52V6.9a4.85 4.85 0 0 1-1.01-.21Z" />
      </svg>
    ),
    href: "https://tiktok.com/@joinwhim",
    label: "@joinwhim",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/company/joinwhim",
    label: "Whim",
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:support@joinwhim.net",
    label: "support@joinwhim.net",
  },
]

type FormState = "idle" | "loading" | "success" | "error"

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion()
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const spring = (delay = 0) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { type: "spring" as const, mass: 1, damping: 15, stiffness: 120, delay }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (formState === "loading") return

    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = (data.get("firstName") as string).trim()
    const lastName = (data.get("lastName") as string).trim()
    const email = (data.get("email") as string).trim()
    const message = (data.get("message") as string).trim()

    if (!firstName || !lastName || !email || !message) {
      setErrorMessage("Please fill in all fields.")
      setFormState("error")
      return
    }

    setFormState("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      })

      if (res.ok) {
        setFormState("success")
        formRef.current?.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMessage(json.error ?? "Something went wrong. Please try again.")
        setFormState("error")
      }
    } catch {
      setErrorMessage("Could not send your message. Please try again.")
      setFormState("error")
    }
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0A0E1E]">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.5) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10"
          style={{ background: "radial-gradient(circle, rgba(139,111,240,0.6) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative z-50">
        <Header />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">

          {/* Page header */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={spring()}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.12)] px-4 py-1.5 mb-6">
              <Mail className="h-3.5 w-3.5 text-purple-400" />
              <span className="text-xs text-white/80 font-medium tracking-wide uppercase">Get in touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B6FF0] bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-md mx-auto">
              Have a question, feedback, or just want to say hi? We&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Left column — socials + info */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={spring(0.08)}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info card */}
              <div
                className="relative overflow-hidden rounded-[20px] p-6"
                style={{
                  background: "linear-gradient(165deg, rgba(14,19,36,0.92) 0%, rgba(10,14,30,0.88) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-50"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 60%)" }} />
                <div className="relative z-10">
                  <Image src="/WHIM.png" alt="Whim" width={80} height={20} className="h-6 w-auto mb-4 opacity-90" />
                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    We&apos;re a small team building the spontaneous social network for students. Every message is read by a real person.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-purple-400 shrink-0" />
                      <a href="mailto:support@joinwhim.net" className="text-white/70 hover:text-white transition-colors">
                        support@joinwhim.net
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-full bg-green-500 shrink-0" style={{ boxShadow: "0 0 8px rgba(34,197,94,0.6)" }} />
                      <span className="text-white/60">Typically replies within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div
                className="relative overflow-hidden rounded-[20px] p-6"
                style={{
                  background: "linear-gradient(165deg, rgba(14,19,36,0.92) 0%, rgba(10,14,30,0.88) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-40"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, transparent 60%)" }} />
                <div className="relative z-10">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Follow Us</p>
                  <div className="space-y-2">
                    {socials.map((social, i) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={spring(0.12 + i * 0.05)}
                        whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                        className="flex items-center gap-3.5 rounded-[12px] px-3 py-2.5 text-white/65 transition-colors duration-150 hover:bg-white/6 hover:text-white group"
                      >
                        <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                          {social.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="text-white/80 text-sm font-medium leading-none mb-0.5">{social.name}</p>
                          <p className="text-white/40 text-xs truncate">{social.label}</p>
                        </div>
                        <svg className="h-3 w-3 text-white/20 ml-auto shrink-0 group-hover:text-white/50 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column — form */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={spring(0.1)}
              className="lg:col-span-3"
            >
              <div
                className="relative overflow-hidden rounded-[24px] p-7 sm:p-9 shadow-[0_24px_70px_rgba(5,8,20,0.55)]"
                style={{
                  background: "linear-gradient(165deg, rgba(14,19,36,0.92) 0%, rgba(10,14,30,0.88) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(14px)",
                }}
              >
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 opacity-55"
                  style={{ background: "linear-gradient(140deg, rgba(124,58,237,0.14) 0%, rgba(124,58,237,0.04) 35%, transparent 70%)" }} />
                <div className="pointer-events-none absolute -top-16 right-10 h-44 w-44 rounded-full opacity-30"
                  style={{ background: "radial-gradient(circle, rgba(139,111,240,0.45) 0%, transparent 72%)", filter: "blur(24px)" }} />

                <div className="relative z-10">
                  <h2 className="text-xl font-semibold text-white mb-1">Send us a message</h2>
                  <p className="text-white/50 text-sm mb-8">We&apos;ll get back to you at the email you provide.</p>

                  {/* Success state */}
                  {formState === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-12 gap-4"
                    >
                      <div className="rounded-full bg-green-500/15 p-4 border border-green-500/25">
                        <CheckCircle2 className="h-8 w-8 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg mb-1">Message sent!</p>
                        <p className="text-white/55 text-sm">Thanks for reaching out. We&apos;ll reply within 24 hours.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormState("idle")}
                        className="mt-2 text-purple-400 text-sm hover:text-purple-300 transition-colors"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}

                  {formState !== "success" && (
                    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Name row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field id="firstName" name="firstName" label="First Name" placeholder="Alex" type="text" />
                        <Field id="lastName" name="lastName" label="Last Name" placeholder="Johnson" type="text" />
                      </div>

                      {/* Email */}
                      <Field id="email" name="email" label="Email Address" placeholder="alex@university.edu" type="email" />

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="What's on your mind?"
                          required
                          className="w-full rounded-[14px] px-4 py-3 text-sm text-white placeholder:text-white/25 resize-none transition-[border-color,box-shadow] duration-150 outline-none focus:ring-0"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)"
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.12)"
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                            e.currentTarget.style.boxShadow = "none"
                          }}
                        />
                      </div>

                      {/* Error message */}
                      {formState === "error" && errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2.5 rounded-[12px] border border-red-500/25 bg-red-500/8 px-4 py-3"
                        >
                          <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
                          <p className="text-red-300 text-sm">{errorMessage}</p>
                        </motion.div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className="flex w-full items-center justify-center gap-2.5 rounded-[16px] px-6 py-3.5 text-sm font-semibold text-white transition-[filter,box-shadow,transform,opacity] duration-150 ease-out hover:brightness-95 hover:shadow-none active:scale-[0.98] active:brightness-90 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                        style={{
                          background: "linear-gradient(130deg, #7C3AED 0%, #8B6FF0 100%)",
                          boxShadow: "0 10px 28px rgba(124,58,237,0.38)",
                        }}
                      >
                        {formState === "loading" ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-white/30 text-xs text-center">
                        By submitting this form you agree to our{" "}
                        <Link href="/legal/privacy" className="text-purple-400/70 hover:text-purple-400 transition-colors">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="relative z-50">
        <Footer />
      </div>
    </main>
  )
}

function Field({
  id,
  name,
  label,
  placeholder,
  type,
}: {
  id: string
  name: string
  label: string
  placeholder: string
  type: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-white/70 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        autoComplete={id === "email" ? "email" : id === "firstName" ? "given-name" : "family-name"}
        className="w-full rounded-[14px] px-4 py-3 text-sm text-white placeholder:text-white/25 transition-[border-color,box-shadow] duration-150 outline-none focus:ring-0"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)"
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.12)"
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
          e.currentTarget.style.boxShadow = "none"
        }}
      />
    </div>
  )
}
