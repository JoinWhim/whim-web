"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSplashActive, setIsSplashActive] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const syncSplashState = () => {
      setIsSplashActive(root.getAttribute("data-splash-active") === "true")
    }
    syncSplashState()
    const observer = new MutationObserver(syncSplashState)
    observer.observe(root, { attributes: true, attributeFilter: ["data-splash-active"] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (!section) return
    section.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-opacity duration-300 ${
          isScrolled || isSplashActive ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-center">
            <button
              type="button"
              aria-label="Scroll to top"
              onClick={handleLogoClick}
              className="cursor-pointer rounded-xl px-1 py-1 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Image src="/WHIM.png" alt="Whim" width={120} height={32} className="h-7 w-auto" priority />
            </button>
          </div>
        </div>
      </header>

      <header
        className={`fixed inset-x-0 top-4 z-50 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <nav className="relative grid grid-cols-[1fr_auto] md:grid-cols-3 items-center rounded-[20px] border border-[rgba(255,255,255,0.12)] bg-[rgba(10,14,30,0.74)] px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.38)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(10,14,30,0.66)]">
            <div className="flex justify-start">
              <button
                type="button"
                aria-label="Scroll to top"
                onClick={handleLogoClick}
                className="cursor-pointer rounded-xl px-1 py-1 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Image src="/WHIM.png" alt="Whim" width={120} height={32} className="h-7 w-auto" />
              </button>
            </div>

            <div className="hidden justify-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollToSection("bento-grid")}
                className="rounded-full px-3.5 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white/78 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                How it works
              </button>
              <Link
                href="/contact"
                className="rounded-full px-3.5 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white/78 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                Contact Us
              </Link>
            </div>

            <div className="hidden justify-end md:flex">
              <button
                type="button"
                onClick={() => scrollToSection("ready")}
                className="flex items-center gap-2 rounded-[16px] bg-[linear-gradient(130deg,#7C3AED_0%,#8B6FF0_100%)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_28px_rgba(124,58,237,0.38)] transition-[filter,box-shadow,transform,background] duration-150 ease-out hover:bg-[linear-gradient(130deg,#5f2ccb_0%,#7358d8_100%)] hover:shadow-none hover:brightness-95 active:scale-[0.97] active:brightness-90 active:translate-y-[1px] cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </button>
            </div>

            <div className="flex justify-end md:hidden">
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="cursor-pointer rounded-[12px] border border-white/15 bg-white/5 p-2 text-white/90 transition-[background-color,border-color,transform] duration-200 hover:bg-white/10 active:scale-[0.98]"
              >
                <span className="relative block h-4 w-4 overflow-hidden">
                  <Menu
                    className={`absolute inset-0 h-4 w-4 transition-all duration-250 ease-out ${
                      isMobileMenuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 h-4 w-4 transition-all duration-250 ease-out ${
                      isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
                    }`}
                  />
                </span>
              </button>
            </div>

            <div
              className={`absolute inset-x-3 top-[calc(100%+0.6rem)] z-10 flex origin-top flex-col gap-2 rounded-[16px] border border-white/12 bg-[rgba(10,14,30,0.92)] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[opacity,transform] duration-250 ease-out md:hidden ${
                isMobileMenuOpen ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
              }`}
              aria-hidden={!isMobileMenuOpen}
            >
              <button
                type="button"
                onClick={() => scrollToSection("bento-grid")}
                className={`cursor-pointer rounded-[12px] px-3 py-2.5 text-left text-xs font-medium uppercase tracking-[0.12em] text-white/78 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-[0.99] ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100 delay-75" : "translate-y-1 opacity-0 delay-0"
                }`}
              >
                How it works
              </button>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-pointer rounded-[12px] px-3 py-2.5 text-left text-xs font-medium uppercase tracking-[0.12em] text-white/78 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-[0.99] ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100 delay-[125ms]" : "translate-y-1 opacity-0 delay-0"
                }`}
              >
                Contact Us
              </Link>
              <button
                type="button"
                onClick={() => scrollToSection("ready")}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(130deg,#7C3AED_0%,#8B6FF0_100%)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_28px_rgba(124,58,237,0.38)] transition-[filter,box-shadow,transform,background,opacity] duration-200 ease-out hover:bg-[linear-gradient(130deg,#5f2ccb_0%,#7358d8_100%)] hover:shadow-none hover:brightness-95 active:scale-[0.97] active:brightness-90 active:translate-y-[1px] ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100 delay-150" : "translate-y-1 opacity-0 delay-0"
                }`}
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
