import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'

export function CTASection() {
  return (
    <section id="contact" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(64,184,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(248,217,146,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-8 py-16 shadow-glow backdrop-blur-2xl md:px-14 md:py-20"
        >
          <div className="absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-electric/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-neon/15 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-slate-400">Free Strategy Call</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                Ready to Build a Powerful Brand?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Let’s create a brand story that gets noticed, trusted, and remembered.
              </p>
            </div>
            <Button variant="gold" className="min-w-64">
              Book Your Free Strategy Call
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
