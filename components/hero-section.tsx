"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (!section) return
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      className="relative overflow-hidden rounded-[24px] p-5 sm:p-6 lg:p-10 shadow-[0_24px_70px_rgba(5,8,20,0.55)]"
      style={{
        background: "linear-gradient(165deg, rgba(14, 19, 36, 0.92) 0%, rgba(10, 14, 30, 0.88) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(14px)",
      }}
    >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.18) 0%, rgba(124, 58, 237, 0.06) 35%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -top-16 right-8 h-44 w-44 rounded-full opacity-35"
          style={{
            background: "radial-gradient(circle, rgba(139, 111, 240, 0.45) 0%, transparent 72%)",
            filter: "blur(24px)",
          }}
        />
        <div className="relative z-10">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.15)] px-3 py-1.5 sm:mb-8 sm:px-4 sm:py-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
          </span>
          <span className="text-xs text-white/80 sm:text-sm">Live on 50+ campuses</span>
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:mb-6 sm:text-5xl lg:text-7xl">
          Find your{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B6FF0] bg-clip-text text-transparent">
            next move.
          </span>
          <br />
          Right now.
        </h1>

        {/* Subtext */}
        <p className="mb-8 max-w-md text-base leading-relaxed text-white/78 text-pretty sm:mb-10 sm:text-lg lg:text-xl">
          The spontaneous social network for students. Swipe, join, and go.
        </p>

        {/* CTA Button — same scroll behavior as header Download */}
        <Button
          type="button"
          size="lg"
          onClick={() => scrollToSection("ready")}
          aria-label="Scroll to download section"
          className="relative rounded-[16px] bg-[linear-gradient(130deg,#7C3AED_0%,#8B6FF0_100%)] px-6 py-5 text-base font-semibold text-white shadow-[0_10px_28px_rgba(124,58,237,0.38)] transition-[filter,box-shadow,transform,background] duration-150 ease-out hover:bg-[linear-gradient(130deg,#5f2ccb_0%,#7358d8_100%)] hover:shadow-none hover:brightness-95 active:scale-[0.97] active:brightness-90 active:translate-y-[1px] cursor-pointer sm:px-8 sm:py-6 sm:text-lg"
        >
          <Download className="mr-2 h-5 w-5" />
          Download the App
        </Button>

        {/* App Store indicators */}
        <div className="mt-6 flex items-center gap-3 text-xs text-white/40 sm:mt-8 sm:gap-4 sm:text-sm">
          <span>Available on</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
