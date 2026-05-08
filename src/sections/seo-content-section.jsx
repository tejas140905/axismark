import { motion } from 'framer-motion'
import { Megaphone, Palette } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'

const contentBlocks = [
  {
    id: 'pr-agency-india',
    icon: Megaphone,
    eyebrow: 'Best PR Agency In India',
    title: 'Best PR Agency in India for Brand Growth',
    description:
      'We help brands get featured in top media publications, build credibility, and establish industry authority. Our PR strategies combine traditional media, digital platforms, and influencer outreach to maximize visibility.',
    body:
      'From startups to enterprises, we create PR campaigns that drive real impact. If you are looking for a PR agency India businesses can trust for media relations, public relations services, and PR services for startups, we bring strategy and execution together.',
    keywords: 'PR agency India, media relations company, PR services for startups',
  },
  {
    id: 'branding-agency-india',
    icon: Palette,
    eyebrow: 'Leading Branding Agency',
    title: 'Leading Branding Agency for Modern Businesses',
    description:
      'Your brand is your identity and we make sure it stands out through strategic positioning, compelling storytelling, and visually impactful design.',
    body:
      'Whether you are launching a new brand or rebranding an existing one, we help you build a memorable and scalable brand presence. We focus on branding agency India search intent, brand identity design, and brand strategy services with premium creative execution.',
    keywords: 'branding agency India, brand identity design, brand strategy services',
  },
]

export function SEOContentSection() {
  return (
    <section className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SEO Content"
          title="Search-optimized positioning for PR, branding, and long-term authority."
          description="These content blocks strengthen homepage relevance for high-intent PR and branding keywords while keeping the premium editorial tone intact."
          align="center"
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {contentBlocks.map((block, index) => (
            <motion.article
              key={block.id}
              id={block.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 shadow-glow backdrop-blur-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-electric">
                <block.icon size={24} />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.32em] text-slate-400">{block.eyebrow}</p>
              <h3 className="mt-3 font-display text-3xl text-white">{block.title}</h3>
              <p className="mt-5 leading-8 text-slate-200">{block.description}</p>
              <p className="mt-5 leading-8 text-slate-300">{block.body}</p>
              <p className="mt-6 text-sm leading-7 text-goldSoft">SEO Focus: {block.keywords}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
