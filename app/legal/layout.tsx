import Link from "next/link"
import Image from "next/image"

const legalNav = [
  { label: "Community Guidelines", href: "/legal/guidelines" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Safety Information", href: "/legal/safety" },
  { label: "Content Policy", href: "/legal/content" },
]

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0E1E] text-white">
      {/* Top nav */}
      <header className="border-b border-white/5 bg-[#0A0E1E]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center gap-8">
          <Link href="/" className="shrink-0">
            <Image src="/WHIM.png" alt="Whim" width={96} height={24} className="h-6 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12 py-16 max-w-4xl">
        {children}
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-6 lg:px-12 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Whim Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
