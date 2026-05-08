import { motion } from 'framer-motion'
import { Cpu, Globe2, Radar } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'

const logos = [
  '7hours Solutions',
  'Brand Elevation',
  'Growth OS',
  'Media Intelligence',
  'Revenue Engine',
  'Creative Labs',
]

const ecosystem = [
  {
    icon: Cpu,
    title: 'Technology Backbone',
    text: 'Execution-ready systems, automation infrastructure, and full-funnel performance tooling.',
  },
  {
    icon: Globe2,
    title: 'Market Presence',
    text: 'Brand-led storytelling, omni-channel campaigns, and premium customer perception.',
  },
  {
    icon: Radar,
    title: 'Growth Intelligence',
    text: 'Signal-based strategy, audience data, and campaigns optimized for compounding ROI.',
  },
]

export function PartnershipSection() {
  return (
    <section id="partnership" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Partnership Ecosystem"
          title="Built at the intersection of technology, influence, and growth."
          description="Together with Axismark Solutions, we connect strategy, systems, and media execution into one premium scale engine for ambitious brands."
        />

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 py-5 backdrop-blur-xl">
          <div className="flex min-w-max animate-marquee gap-6 whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="rounded-full border border-white/10 bg-slate-950/60 px-6 py-3 text-sm uppercase tracking-[0.28em] text-slate-300"
              >
                {logo === 'Axismark Solutions' ? (
                  <a href="https://www.Axismark.in" target="_blank" rel="noreferrer" className="transition hover:text-white">
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ecosystem.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-7 shadow-glow backdrop-blur-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-electric">
                <item.icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
