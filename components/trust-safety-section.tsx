"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import {
  BadgeCheck,
  Ban,
  CheckCircle2,
  Eye,
  GraduationCap,
  ShieldCheck,
  Waypoints,
} from "lucide-react"

const verificationChecks = [
  { label: "University email", value: "Required" },
  { label: "Domain match", value: ".edu only" },
  { label: "Device risk scan", value: "Auto pass" },
]

const moderationFlow = [
  { label: "Report submitted", detail: "In-app signal logged", icon: Eye },
  { label: "Safety review", detail: "Fast human moderation", icon: ShieldCheck },
  { label: "Network action", detail: "Account removed campus-wide", icon: Ban },
]

export function TrustSafetySection() {
  const prefersReducedMotion = useReducedMotion()
  const revealTransition = (delay = 0) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { type: "spring" as const, mass: 1, damping: 15, stiffness: 120, delay }

  return (
    <section
      id="safety"
      className="relative py-20 lg:py-24 px-6 lg:px-12 overflow-hidden scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "rgba(10, 14, 30, 0.7)",
          backdropFilter: "blur(18px)",
        }}
      />
      <div className="pointer-events-none absolute top-1/3 -left-24 w-72 h-72 bg-[#7C3AED]/14 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-24 w-72 h-72 bg-[#8B6FF0]/12 rounded-full blur-[120px]" />
      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={revealTransition()}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[rgba(180,195,255,0.65)] mb-4">
            Trust and Safety
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Student-only by design
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(14px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: revealTransition(),
            }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-[24px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl p-8 lg:p-10 overflow-hidden relative shadow-[0_24px_70px_rgba(5,8,20,0.45)]"
            whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.995 }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(circle at 18% 18%, rgba(124,58,237,0.2) 0%, transparent 52%)",
              }}
            />
            <div
              className="pointer-events-none absolute -top-16 right-8 h-40 w-40 rounded-full opacity-35"
              style={{
                background: "radial-gradient(circle, rgba(139, 111, 240, 0.45) 0%, transparent 72%)",
                filter: "blur(24px)",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(124,58,237,0.22)] border border-[rgba(124,58,237,0.45)] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-[#d9c5ff]" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[rgba(180,195,255,0.7)]">
                  The .edu Barrier
                </p>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Verified Peers Only
              </h3>
              <p className="text-[rgba(236,241,255,0.8)] leading-relaxed mb-4">
                Every account starts with a real school identity, so you meet classmates instead
                of random profiles from outside your campus.
              </p>
              <div className="flex items-center gap-2 text-[rgba(236,241,255,0.9)] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#b189ff]" />
                <span>No bots, no fake profiles, no off-campus spam</span>
              </div>
            </div>

            <div className="relative z-10 mt-8 rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[rgba(13,18,37,0.84)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[rgba(224,214,255,0.88)]">
                    Whim university pass
                  </p>
                  <p className="text-[13px] text-[rgba(200,212,241,0.78)] mt-1">
                    Entry gate before profiles unlock
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded-full border border-[#b189ff]/55 bg-[#7C3AED]/22 flex items-center gap-1.5">
                  <BadgeCheck className="w-3.5 h-3.5 text-[#efe4ff]" />
                  <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#efe4ff]">
                    secure
                  </span>
                </div>
              </div>
              <div className="space-y-2.5">
                {verificationChecks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3.5 py-2.5"
                  >
                    <div>
                      <p className="text-sm font-medium text-[rgba(238,243,255,0.92)]">{item.label}</p>
                      <p className="text-xs text-[rgba(184,198,230,0.78)]">{item.value}</p>
                    </div>
                    <div className="h-6 w-6 rounded-full bg-[#7C3AED]/22 border border-[#b189ff]/45 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d9c5ff]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(14px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: revealTransition(0.1),
            }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-[24px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl p-8 lg:p-10 overflow-hidden relative shadow-[0_24px_70px_rgba(5,8,20,0.45)]"
            whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.995 }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-85"
              style={{
                background:
                  "radial-gradient(circle at 84% 12%, rgba(139,111,240,0.18) 0%, transparent 48%)",
              }}
            />
            <div
              className="pointer-events-none absolute -top-16 left-8 h-40 w-40 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 72%)",
                filter: "blur(24px)",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(124,58,237,0.22)] border border-[rgba(124,58,237,0.45)] flex items-center justify-center">
                  <Waypoints className="w-4 h-4 text-[#d9c5ff]" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[rgba(180,195,255,0.7)]">
                  The Accountability Loop
                </p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Real-World Reputation
              </h3>
              <p className="text-[rgba(236,241,255,0.8)] leading-relaxed mb-4">
                School-linked identity creates real accountability, and repeated bad behavior gets
                removed from the entire campus network.
              </p>
              <div className="flex items-center gap-2 text-[rgba(236,241,255,0.9)] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#b189ff]" />
                <span>Good actors stay visible, bad actors leave quickly</span>
              </div>
            </div>

            <div className="relative z-10 mt-8 rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[rgba(13,18,37,0.84)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.16em] text-[rgba(224,214,255,0.88)]">
                  Moderation lifecycle
                </p>
                <span className="rounded-full border border-[rgba(34,197,94,0.45)] bg-[rgba(34,197,94,0.16)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#bbf7d0]">
                  active
                </span>
              </div>
              <div className="space-y-3">
                {moderationFlow.map((step, index) => {
                  const StepIcon = step.icon
                  return (
                    <div key={step.label} className="flex items-start gap-3 rounded-xl bg-[rgba(255,255,255,0.03)] px-3.5 py-3">
                      <div className="mt-0.5 h-7 w-7 shrink-0 rounded-full border border-[rgba(177,137,255,0.45)] bg-[#7C3AED]/18 flex items-center justify-center">
                        <StepIcon className="h-3.5 w-3.5 text-[#d9c5ff]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[rgba(238,243,255,0.92)]">{step.label}</p>
                        <p className="text-xs text-[rgba(184,198,230,0.8)] mt-0.5">{step.detail}</p>
                      </div>
                      <span className="text-[10px] text-[rgba(184,198,230,0.7)] pt-0.5">{`0${index + 1}`}</span>
                    </div>
                  )
                })}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-[rgba(239,68,68,0.35)] bg-[rgba(239,68,68,0.12)] px-3.5 py-2.5">
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#fecaca]">Harassment policy</span>
                <span className="text-xs font-medium text-[#fee2e2]">Campus-wide removal</span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#22c55e] via-[#7C3AED] to-[#ef4444]" />
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-[rgba(184,198,230,0.72)]">
                <span>Trust signals healthy</span>
                <span>Escalation path live</span>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
