"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { Apple, Play } from "lucide-react"

export function CTASection() {
  const prefersReducedMotion = useReducedMotion()
  const revealTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, mass: 1, damping: 15, stiffness: 120 }

  return (
    <section id="ready" className="py-24 lg:py-32 px-6 lg:px-12 scroll-mt-28">
      <div className="container mx-auto">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.45 }}
          transition={revealTransition}
          className="relative overflow-hidden rounded-[24px] p-12 lg:p-16 shadow-[0_24px_70px_rgba(5,8,20,0.55)]"
          style={{
            background: "linear-gradient(165deg, rgba(14, 19, 36, 0.92) 0%, rgba(10, 14, 30, 0.88) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* Background gradient glow */}
          <div 
            className="absolute inset-0 opacity-55"
            style={{
              background:
                "linear-gradient(140deg, rgba(124, 58, 237, 0.18) 0%, rgba(124, 58, 237, 0.06) 35%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -top-16 right-10 h-44 w-44 rounded-full opacity-35"
            style={{
              background: "radial-gradient(circle, rgba(139, 111, 240, 0.45) 0%, transparent 72%)",
              filter: "blur(24px)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Ready to end the boredom?
            </h2>
            
            <p className="text-white/78 text-lg mb-10 max-w-md">
              Download Whim and discover what&apos;s happening around you right now.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <motion.a
                href="#"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.035,
                        y: -4,
                        borderColor: "rgba(139, 111, 240, 0.7)",
                        boxShadow: "0 14px 36px rgba(124, 58, 237, 0.36)",
                      }
                }
                whileTap={{ scale: 0.98 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", mass: 0.55, damping: 26, stiffness: 430 }
                }
                className="flex items-center gap-3 px-6 py-4 rounded-[16px] cursor-pointer transition-colors duration-150 hover:bg-[#1a2038]"
                style={{
                  background: "#101628",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Apple className="w-8 h-8 text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-[#B8C8E2] uppercase tracking-wide leading-none">
                    Download on the
                  </p>
                  <p className="text-white font-semibold text-lg leading-tight">
                    App Store
                  </p>
                </div>
              </motion.a>

              {/* Play Store Button */}
              <motion.a
                href="#"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.035,
                        y: -4,
                        borderColor: "rgba(139, 111, 240, 0.7)",
                        boxShadow: "0 14px 36px rgba(124, 58, 237, 0.36)",
                      }
                }
                whileTap={{ scale: 0.98 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", mass: 0.55, damping: 26, stiffness: 430 }
                }
                className="flex items-center gap-3 px-6 py-4 rounded-[16px] cursor-pointer transition-colors duration-150 hover:bg-[#1a2038]"
                style={{
                  background: "#101628",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Play className="w-8 h-8 text-white fill-white" />
                <div className="text-left">
                  <p className="text-[10px] text-[#B8C8E2] uppercase tracking-wide leading-none">
                    Get it on
                  </p>
                  <p className="text-white font-semibold text-lg leading-tight">
                    Google Play
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
