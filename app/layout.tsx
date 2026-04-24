import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BackgroundNoise } from '@/components/background-noise'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Whim - Find Your Next Move',
  description: 'The spontaneous social network for students. Swipe, join, and go.',
  generator: 'v0.app',
  icons: {
    icon: '/whim-icon.png',
    shortcut: '/whim-icon.png',
    apple: '/whim-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <BackgroundNoise />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
