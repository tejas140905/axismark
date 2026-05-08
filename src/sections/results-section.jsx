import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'

const stats = [
  '500+ Campaigns Executed',
  '95%+ Client Satisfaction',
  '200+ Brands Served',
  'Featured in Top Media Platforms',
]

const bars = [48, 68, 92, 76, 112, 146]

export function ResultsSection() {
  return (
    <section id="results" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Results"
          title="Proof that strategy, visibility, and brand authority can scale together."
          description="Our reporting layer turns PR impact, brand growth, and campaign execution into visible business credibility."
        />

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-glow backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">PR + Branding Performance</p>
                <h3 className="mt-3 font-display text-3xl text-white">Authority & Visibility Dashboard</h3>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-electric">
                <TrendingUp size={24} />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-6 items-end gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              {bars.map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
                  className="rounded-t-full bg-[linear-gradient(180deg,rgba(64,184,255,1),rgba(141,91,255,0.85),rgba(248,217,146,0.7))]"
                />
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Reach Lift</p>
                <p className="mt-3 font-display text-4xl text-white">+148%</p>
                <p className="mt-2 text-sm text-slate-300">Increase in brand visibility through coordinated PR and digital support.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Brand Trust Lift</p>
                <p className="mt-3 font-display text-4xl text-white">95%+</p>
                <p className="mt-2 text-sm text-slate-300">Client satisfaction backed by consistent communication and full-service execution.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-glow backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Brand Result</p>
                    <h3 className="mt-3 font-display text-3xl text-white">{stat}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-goldSoft">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
