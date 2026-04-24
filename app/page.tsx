import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HeroShaderBackground } from "@/components/hero-shader-background"
import { Iphone3dWithSplash } from "@/components/iphone-3d-with-splash"
import { HowItWorks } from "@/components/how-it-works"
import { TrustSafetySection } from "@/components/trust-safety-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ViewportProgressiveBlur } from "@/components/viewport-progressive-blur"

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 z-0">
        <HeroShaderBackground />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,rgba(10,14,30,0.35)_0%,rgba(10,14,30,0.6)_70%,rgba(10,14,30,0.82)_100%)]" />

      {/* Ambient gradient glow effects */}
      <div className="fixed inset-0 z-[2] pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#8B6FF0]/15 rounded-full blur-[128px]" />
      </div>
      <ViewportProgressiveBlur position="top" className="z-[40]" />
      <ViewportProgressiveBlur position="bottom" className="z-[40]" />
      
      <div className="relative z-[60]">
        <Header />
      </div>

      <div className="relative z-10">
        <section className="relative min-h-dvh overflow-hidden">
          <div className="relative z-10 container mx-auto flex min-h-dvh items-center px-4 pt-20 sm:px-6 sm:pt-24 lg:px-12 lg:pt-28">
            <div className="grid w-full grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left: Hero Content */}
            <HeroSection />
            
            {/* Right: 3D Phone */}
            <div className="relative h-[360px] sm:h-[440px] md:h-[520px] lg:h-[680px] flex justify-center lg:justify-end">
              {/* Ambient glow behind the model */}
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background: "radial-gradient(ellipse 60% 70% at 60% 50%, rgba(124,58,237,0.22) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
              <Iphone3dWithSplash />
            </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Trust & Safety Section */}
        <TrustSafetySection />

        {/* CTA Section */}
        <CTASection />
      </div>

      <div className="relative z-[60]">
        <Footer />
      </div>
    </main>
  )
}
