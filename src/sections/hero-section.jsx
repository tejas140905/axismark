import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, Sparkles } from 'lucide-react'
import { Button } from '../components/ui/button'

const ThreeHeroScene = lazy(() =>
  import('../components/three-hero-scene').then((module) => ({
    default: module.ThreeHeroScene,
  })),
)

const floatingCards = [
  { title: 'Media Reach', text: 'Strategic PR campaigns designed to build authority fast.', position: 'left-0 top-24' },
  { title: 'Brand Recall', text: 'Identity systems that make your business memorable.', position: 'right-0 top-12' },
]

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-4 pt-28 md:px-8">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-electric" />
            <span>
              In Partnership With{' '}
              <a
                href="https://www.7hours.in"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                7hours Solutions
              </a>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: 'easeOut' }}
            className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl xl:text-[6.4rem]"
          >
            We Build Brands
            <span className="block bg-[linear-gradient(120deg,#40b8ff_0%,#9a74ff_42%,#f8d992_100%)] bg-clip-text text-transparent">
              That Dominate.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: 'easeOut' }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            We are a result-driven PR and branding agency helping businesses craft powerful
            identities, dominate media presence, and build long-term brand authority.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.36, ease: 'easeOut' }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="gold" className="sm:min-w-56">
              Get Free Consultation
            </Button>
            <Button className="sm:min-w-56">
              View Our Work
              <ArrowDownRight className="ml-2" size={16} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-12 w-12 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(64,184,255,0.3),rgba(141,91,255,0.15),rgba(248,217,146,0.35))] backdrop-blur-md"
                />
              ))}
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Trusted by brands that want stronger reputation, premium positioning, and long-term market authority.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[560px] lg:h-[700px]">
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-glow backdrop-blur-2xl" />
          <Suspense
            fallback={
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(64,184,255,0.16),transparent_35%),radial-gradient(circle_at_70%_35%,rgba(141,91,255,0.16),transparent_28%),radial-gradient(circle_at_40%_68%,rgba(248,217,146,0.1),transparent_24%)]" />
            }
          >
            <ThreeHeroScene />
          </Suspense>
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.12 }}
              className={`absolute ${card.position} max-w-[220px] rounded-3xl border border-white/10 bg-slate-950/40 p-5 shadow-glow backdrop-blur-xl`}
            >
              <p className="font-display text-2xl text-white">{card.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.85, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400"
      >
        Scroll to Discover
        <span className="flex h-12 w-7 items-start justify-center rounded-full border border-white/10 p-1">
          <span className="h-3 w-1 rounded-full bg-electric" />
        </span>
      </motion.a>
    </section>
  )
}
