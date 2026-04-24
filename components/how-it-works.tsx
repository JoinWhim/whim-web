"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion()
  const revealTransition = (delay = 0) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { type: "spring" as const, mass: 1, damping: 15, stiffness: 120, delay }

  return (
    <section
      id="bento-grid"
      className="relative min-h-dvh py-20 lg:py-24 flex items-center overflow-hidden scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "rgba(10, 14, 30, 0.72)",
          backdropFilter: "blur(22px)",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 -left-24 w-72 h-72 bg-[#7C3AED]/14 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-24 w-72 h-72 bg-[#8B6FF0]/12 rounded-full blur-[120px]" />
      <div className="relative z-10 container mx-auto px-6 lg:px-12 w-full">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={revealTransition()}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[rgba(180,195,255,0.65)] mb-4">
            How it works
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Three steps to spontaneity
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Box 1: The Swipe - Takes 2/3 width (2 columns) */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={revealTransition()}
            className="lg:col-span-2 rounded-[24px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl p-8 lg:p-10 min-h-[400px] flex flex-col justify-between overflow-hidden relative shadow-[0_24px_70px_rgba(5,8,20,0.45)]"
            whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-65"
              style={{
                background:
                  "linear-gradient(140deg, rgba(124, 58, 237, 0.14) 0%, rgba(124, 58, 237, 0.05) 34%, transparent 72%)",
              }}
            />
            <div
              className="pointer-events-none absolute -top-16 right-10 h-40 w-40 rounded-full opacity-35"
              style={{
                background: "radial-gradient(circle, rgba(139, 111, 240, 0.45) 0%, transparent 72%)",
                filter: "blur(24px)",
              }}
            />
            {/* Card Stack Visual */}
            <div className="relative z-10 flex-1 flex items-center justify-center py-8">
              {/* Red glow on left */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#ef4444]/30 rounded-full blur-[60px]" />
              {/* Green glow on right */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#22c55e]/30 rounded-full blur-[60px]" />
              
              {/* Card Stack */}
              <div className="relative w-64 h-80">
                {/* Background cards */}
                <div className="absolute inset-0 -rotate-6 -translate-x-4 rounded-[20px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]" />
                <div className="absolute inset-0 rotate-3 translate-x-2 rounded-[20px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]" />
                
                {/* Main card */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.12)] overflow-hidden">
                  {/* Card content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                      <span className="text-xs text-[rgba(255,255,255,0.7)]">Happening now</span>
                    </div>
                    <p className="text-white font-semibold">Rooftop Party</p>
                    <p className="text-sm text-[rgba(255,255,255,0.6)]">12 going</p>
                  </div>
                  
                  {/* Swipe indicators */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/40 rotate-[-15deg] opacity-60">
                    <span className="text-[#ef4444] text-xs font-bold">NOPE</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/40 rotate-[15deg] opacity-60">
                    <span className="text-[#22c55e] text-xs font-bold">JOIN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[rgba(180,195,255,0.65)] mb-2">
                Swipe
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Stop planning. Start doing.
              </h3>
            </div>
          </motion.div>

          {/* Right column: Stacked boxes */}
          <div className="flex flex-col gap-6">
            {/* Box 2: The Join */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 26, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={revealTransition(0.08)}
              className="rounded-[24px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl p-8 flex-1 min-h-[187px] flex flex-col justify-between overflow-hidden relative shadow-[0_20px_52px_rgba(5,8,20,0.4)]"
              whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(150deg,rgba(124,58,237,0.11)_0%,transparent_62%)]" />
              {/* Visual: Chat bubble mockup */}
              <div className="relative z-10 flex-1 flex items-center justify-center py-4">
                <div className="relative">
                  {/* Chat bubbles */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-start">
                      <div className="px-4 py-2 rounded-2xl rounded-bl-md bg-[rgba(255,255,255,0.1)] text-sm text-white/80">
                        who&apos;s bringing the aux? 
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="px-4 py-2 rounded-2xl rounded-br-md bg-gradient-to-r from-[#7C3AED] to-[#8B6FF0] text-sm text-white">
                        me, obviously
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-2xl rounded-bl-md bg-[rgba(255,255,255,0.1)] text-sm text-white/80">
                        <span>+3 joined</span>
                        <div className="flex -space-x-2">
                          <div className="w-5 h-5 rounded-full bg-[#7C3AED]" />
                          <div className="w-5 h-5 rounded-full bg-[#8B6FF0]" />
                          <div className="w-5 h-5 rounded-full bg-[#22c55e]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[rgba(180,195,255,0.65)] mb-2">
                  Join
                </p>
                <h3 className="text-xl font-bold text-white">
                  One swipe, you&apos;re in the chat.
                </h3>
              </div>
            </motion.div>

            {/* Box 3: The Go */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 26, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={revealTransition(0.16)}
              className="rounded-[24px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl p-8 flex-1 min-h-[187px] flex flex-col justify-between overflow-hidden relative shadow-[0_20px_52px_rgba(5,8,20,0.4)]"
              whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(139,111,240,0.12)_0%,transparent_64%)]" />
              {/* Visual: Self-destruct timer */}
              <div className="relative z-10 flex-1 flex items-center justify-center py-4">
                <div className="relative">
                  {/* Circular timer */}
                  <div className="w-24 h-24 rounded-full border-4 border-[rgba(255,255,255,0.1)] relative flex items-center justify-center">
                    {/* Progress arc */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        strokeDasharray="276"
                        strokeDashoffset="69"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#7C3AED" />
                          <stop offset="100%" stopColor="#8B6FF0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">2h</p>
                      <p className="text-xs text-[rgba(255,255,255,0.5)]">left</p>
                    </div>
                  </div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#8B6FF0] rounded-full animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse delay-150" />
                </div>
              </div>

              {/* Text content */}
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[rgba(180,195,255,0.65)] mb-2">
                  Go
                </p>
                <h3 className="text-xl font-bold text-white">
                  Events self-destruct after the fun is over.
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
