import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'

const testimonials = [
  {
    name: 'Amelia Rhodes',
    role: 'Founder, Lumera Health',
    quote:
      'They rebuilt how our market perceives us. The brand became sharper, the campaigns became smarter, and the sales pipeline started moving with real momentum.',
  },
  {
    name: 'Daniel Kline',
    role: 'CEO, Northline Commerce',
    quote:
      'This felt like plugging a high-level growth team directly into our business. Strategy, creative, paid media, and execution finally moved as one.',
  },
  {
    name: 'Nadia Sethi',
    role: 'CMO, Velora Ventures',
    quote:
      'The premium look impressed us first, but the performance numbers are what made the partnership indispensable.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What ambitious brands say after the momentum becomes visible."
          description="A premium agency experience should feel polished, strategic, and deeply effective. These stories reflect exactly that."
          align="center"
        />

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-glow backdrop-blur-xl">
            <div className="flex h-full min-h-[360px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(64,184,255,0.18),transparent_45%),rgba(6,10,21,0.9)] p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Video Testimonial Style</p>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
                  <Play size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-4xl leading-tight text-white">
                  “They made our brand feel bigger, sharper, and far more investable.”
                </h3>
                <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                  A curated, cinematic presentation block that mirrors a premium founder testimonial.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(64,184,255,0.4),rgba(141,91,255,0.2),rgba(248,217,146,0.35))]" />
                <div>
                  <p className="font-semibold text-white">Sophia Mercer</p>
                  <p className="text-sm text-slate-400">Managing Director, Altis Group</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl"
              >
                <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(64,184,255,0.35),rgba(141,91,255,0.18),rgba(248,217,146,0.28))]" />
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-slate-400">{item.role}</p>
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
