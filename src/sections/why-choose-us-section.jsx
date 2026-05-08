import { motion } from 'framer-motion'
import { BarChart3, Gem, Globe2, Network, Radar, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'

const features = [
  { icon: BarChart3, title: 'Data-driven PR Strategies', text: 'Campaign decisions shaped by timing, relevance, performance signals, and measurable outcomes.' },
  { icon: Network, title: 'Strong Media & Influencer Network', text: 'Trusted access to media coverage, digital PR, and amplified visibility opportunities.' },
  { icon: Gem, title: 'Creative + Strategic Branding Approach', text: 'We connect visuals, messaging, and positioning into one memorable brand system.' },
  { icon: Globe2, title: 'Proven Track Record of Brand Growth', text: 'Positioning and visibility strategies designed to build long-term authority.' },
  { icon: Radar, title: 'End-to-End Execution', text: 'From strategy to execution to growth, every stage is managed under one roof.' },
  { icon: ShieldCheck, title: 'Storytelling + Strategy + Technology', text: 'We combine creativity, structure, and modern tools to deliver measurable results.' },
]

const stats = [
  { value: '95%+', label: 'Client Satisfaction Across PR and Branding Partnerships' },
  { value: '200+', label: 'Brands Served Through Strategy, Identity, and Media Execution' },
  { value: '500+', label: 'Campaigns Executed With End-to-End Delivery' },
]

export function WhyChooseUsSection() {
  return (
    <section className="relative px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why brands choose us for PR strategy, branding, and market visibility."
            description="We combine storytelling, strategy, and technology to deliver measurable PR and branding outcomes without the fragmentation of traditional agencies."
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
              >
                <p className="font-display text-4xl text-white">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-7 shadow-glow backdrop-blur-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-neon">
                <feature.icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
