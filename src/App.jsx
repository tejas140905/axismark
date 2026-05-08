import { Suspense, lazy, useEffect, useState } from 'react'
import { BackgroundEffects } from './components/background-effects'
import { CustomCursor } from './components/custom-cursor'
import { ScrollProgress } from './components/scroll-progress'
import { SiteNavbar } from './components/site-navbar'
import { AboutSection } from './sections/about-section'
import { CTASection } from './sections/cta-section'
import { FooterSection } from './sections/footer-section'
import { HappyClientsSection } from './sections/happy-clients-section'
import { HeroSection } from './sections/hero-section'
import { PartnershipSection } from './sections/partnership-section'
import { ResultsSection } from './sections/results-section'
import { SEOContentSection } from './sections/seo-content-section'
import { ServicesSection } from './sections/services-section'
import { WhyChooseUsSection } from './sections/why-choose-us-section'

const ProcessSection = lazy(() =>
  import('./sections/process-section').then((module) => ({
    default: module.ProcessSection,
  })),
)

function MouseGlow() {
  useEffect(() => {
    const root = document.documentElement
    const update = (event) => {
      root.style.setProperty('--cursor-x', `${event.clientX}px`)
      root.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', update)
    return () => window.removeEventListener('pointermove', update)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] hidden md:block">
      <div className="absolute left-[calc(var(--cursor-x)-16rem)] top-[calc(var(--cursor-y)-16rem)] h-80 w-80 rounded-full bg-electric/10 blur-3xl transition-transform duration-200" />
    </div>
  )
}

export default function App() {
  const [startupError, setStartupError] = useState(null)

  useEffect(() => {
    const onError = (event) => {
      setStartupError(event.error?.message || event.message || 'Unknown startup error')
    }

    const onRejection = (event) => {
      const reason = event.reason
      setStartupError(reason?.message || String(reason) || 'Unhandled promise rejection')
    }

    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onRejection)

    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onRejection)
    }
  }, [])

  useEffect(() => {
    let lenis
    let rafId = 0
    let cancelled = false

    const setupLenis = async () => {
      try {
        const module = await import('@studio-freight/lenis')
        const Lenis = module.default

        if (cancelled) return

        lenis = new Lenis({
          duration: 1.2,
          lerp: 0.085,
          smoothWheel: true,
          smoothTouch: true,
          touchMultiplier: 1.1,
        })

        window.__lenis = lenis

        const frame = (time) => {
          lenis.raf(time)
          rafId = requestAnimationFrame(frame)
        }

        rafId = requestAnimationFrame(frame)
      } catch (error) {
        setStartupError(error?.message || 'Lenis failed to initialize')
      }
    }

    setupLenis()

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      delete window.__lenis
      lenis?.destroy?.()
    }
  }, [])

  if (startupError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
        <div className="max-w-2xl rounded-[2rem] border border-red-400/20 bg-red-500/10 p-8 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.32em] text-red-200">Startup Error</p>
          <h1 className="mt-4 font-display text-3xl">The preview encountered a client-side error.</h1>
          <pre className="mt-6 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-red-100">
            {startupError}
          </pre>
        </div>
      </div>
    )
  }

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <BackgroundEffects />
      <MouseGlow />
      <div className="relative z-10">
        <SiteNavbar />
        <main>
          <HeroSection />
          <AboutSection />
          <PartnershipSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <ResultsSection />
          <SEOContentSection />
          <Suspense fallback={null}>
            <ProcessSection />
          </Suspense>
          <HappyClientsSection />
          <CTASection />
        </main>
        <FooterSection />
      </div>
    </>
  )
}
