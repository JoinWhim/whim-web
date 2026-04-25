"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Download", href: "#" },
    ],
  },
  safety: {
    title: "Safety",
    links: [
      { label: "Community Guidelines", href: "/legal/guidelines" },
      { label: "Safety Information", href: "/legal/safety" },
      { label: "Report an Issue", href: "/contact" },
      { label: "Trust & Safety", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Content Policy", href: "/legal/content" },
    ],
  },
}

export function Footer() {
  const prefersReducedMotion = useReducedMotion()
  const revealTransition = (delay = 0) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { type: "spring" as const, mass: 1, damping: 15, stiffness: 120, delay }

  return (
    <motion.footer
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={revealTransition()}
      className="bg-[#0A0E1E] border-t border-white/5"
    >
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/WHIM.png"
                alt="Whim"
                width={128}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-[#B8C8E2] text-sm leading-relaxed max-w-xs">
              The spontaneous social network for students. Stop planning, start living.
            </p>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section, index) => (
            <motion.div
              key={section.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={revealTransition(0.05 * (index + 1))}
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#B8C8E2] text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          {/* Copyright */}
          <p className="text-[#B8C8E2] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Whim Inc. All rights reserved.
          </p>

          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            {/* Pulsing green dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "#22c55e" }}
              />
              <span 
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ backgroundColor: "#22c55e" }}
              />
            </span>
            <span className="text-[#B8C8E2] text-sm">
              System Status: <span className="text-[#22c55e]">All Systems Spontaneous</span>
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
