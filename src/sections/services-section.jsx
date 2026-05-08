import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  BadgeDollarSign,
  Box,
  BriefcaseBusiness,
  FileText,
  Fingerprint,
  Globe2,
  Megaphone,
  PenTool,
  Search,
  Send,
  Share2,
  Target,
  UserRound,
} from 'lucide-react'
import { SectionHeading } from '../components/section-heading'

const services = [
  {
    icon: Globe2,
    title: 'Media Relations & Press Coverage',
    text: 'Strategic public relations services that secure visibility, trust, and industry presence.',
    brief: 'We help brands earn attention in the right places through targeted media outreach, story positioning, and publication relevance.',
    points: ['Targeted media mapping', 'Credibility-focused placements'],
    tag: 'Public Relations',
  },
  {
    icon: FileText,
    title: 'Press Releases & Distribution',
    text: 'Narrative-led announcements built for media pickup and brand authority.',
    brief: 'From launches to milestone announcements, we craft clear, newsworthy communication that supports stronger pickup and wider visibility.',
    points: ['Newsworthy release angles', 'Distribution support'],
    tag: 'Authority Building',
  },
  {
    icon: AlertTriangle,
    title: 'Crisis Management & Reputation Control',
    text: 'Fast response systems for brand reputation management and communication stability.',
    brief: 'We help reduce confusion, protect perception, and guide communication when brand reputation needs clarity and control.',
    points: ['Response planning', 'Reputation protection'],
    tag: 'Reputation',
  },
  {
    icon: Megaphone,
    title: 'Influencer & Digital PR',
    text: 'Creator-led visibility campaigns that extend media presence across digital channels.',
    brief: 'We connect brand messaging with the right digital voices to build modern visibility, social trust, and broader awareness.',
    points: ['Creator collaboration', 'Digital amplification'],
    tag: 'Digital PR',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Corporate Communications',
    text: 'Clear executive communication frameworks for modern businesses and leadership brands.',
    brief: 'We structure internal and external messaging so businesses communicate with more authority, consistency, and confidence.',
    points: ['Leadership messaging', 'Communication consistency'],
    tag: 'Corporate Positioning',
  },
  {
    icon: Send,
    title: 'Event PR & Brand Launches',
    text: 'High-impact launch visibility for campaigns, activations, and milestone brand moments.',
    brief: 'We support events and launches with strategic visibility plans that build anticipation, attendance, and post-launch recall.',
    points: ['Launch buzz creation', 'Event visibility support'],
    tag: 'Launch Visibility',
  },
  {
    icon: Target,
    title: 'Brand Strategy & Positioning',
    text: 'A brand strategy company approach focused on clarity, distinctiveness, and market fit.',
    brief: 'We define what your brand should stand for, how it should be perceived, and how it should lead in its category.',
    points: ['Brand clarity', 'Sharper market positioning'],
    tag: 'Brand Strategy',
  },
  {
    icon: Fingerprint,
    title: 'Logo & Visual Identity Design',
    text: 'Premium brand identity design systems that build recognition and long-term recall.',
    brief: 'We design visual systems that feel consistent, elevated, and memorable across digital, print, and presentation touchpoints.',
    points: ['Identity consistency', 'Premium visual recall'],
    tag: 'Identity Design',
  },
  {
    icon: UserRound,
    title: 'Personal Branding',
    text: 'Authority-building positioning for founders, executives, and public-facing experts.',
    brief: 'We help leaders present a stronger identity through personal messaging, strategic presence, and clearer authority signals.',
    points: ['Founder positioning', 'Authority-driven messaging'],
    tag: 'Personal Brand',
  },
  {
    icon: Box,
    title: 'Packaging & Digital Branding',
    text: 'Cohesive physical and digital brand experiences designed for modern perception.',
    brief: 'We align the look and feel of your brand across packaging, digital surfaces, and customer-facing environments.',
    points: ['Experience consistency', 'Cross-platform brand feel'],
    tag: 'Brand Experience',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    text: 'Integrated marketing support to amplify PR and branding through digital visibility.',
    brief: 'We use content, storytelling, and platform rhythm to keep your brand active, relevant, and easier to discover online.',
    points: ['Audience engagement', 'Content-driven visibility'],
    tag: 'Social Growth',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    text: 'Search-first content and technical visibility support for stronger long-term discovery.',
    brief: 'We improve findability through smarter keyword alignment, cleaner visibility structure, and sustained organic relevance.',
    points: ['Better search presence', 'Long-term discoverability'],
    tag: 'SEO Visibility',
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    text: 'Strategic storytelling that supports PR campaigns, brand positioning, and organic visibility.',
    brief: 'We create purposeful brand content that informs perception, strengthens messaging, and supports ongoing digital growth.',
    points: ['Narrative consistency', 'Strategic content flow'],
    tag: 'Content Strategy',
  },
  {
    icon: BadgeDollarSign,
    title: 'Performance Marketing',
    text: 'Paid growth support that works best when PR, branding, and digital media align.',
    brief: 'We connect media spend with stronger messaging and conversion intent so growth activity feels more efficient and aligned.',
    points: ['Campaign efficiency', 'Conversion-focused support'],
    tag: 'Paid Growth',
  },
]

export function ServicesSection() {
  const railRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragState = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
  })

  const handleWheel = (event) => {
    const rail = railRef.current
    if (!rail) return

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault()
      rail.scrollLeft += event.deltaY
    }
  }

  const handlePointerDown = (event) => {
    const rail = railRef.current
    if (!rail) return

    setIsDragging(true)
    dragState.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: rail.scrollLeft,
    }

    rail.setPointerCapture?.(event.pointerId)
  }

  const handlePointerMove = (event) => {
    const rail = railRef.current
    if (!rail || !dragState.current.active) return

    const delta = event.clientX - dragState.current.startX
    rail.scrollLeft = dragState.current.startScrollLeft - delta
  }

  const handlePointerUp = () => {
    dragState.current.active = false
    setIsDragging(false)
  }

  return (
    <section id="services" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Simple, modern service cards that scroll one after another."
          description="Browse the service stack horizontally with your wheel or by dragging with the cursor. Clean cards, stronger detail, and a smoother browsing flow."
        />

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl md:p-5">
          <div
            ref={railRef}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            data-cursor="hover"
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="group relative min-h-[470px] w-[84vw] shrink-0 overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.98),rgba(15,22,39,0.94))] p-6 shadow-glow md:min-h-[500px] md:w-[27rem] md:p-7"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,184,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(141,91,255,0.12),transparent_30%)] opacity-80" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-electric transition duration-500 group-hover:scale-110 group-hover:text-goldSoft">
                      <service.icon size={24} />
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-goldSoft">
                      {service.tag}
                    </div>
                  </div>

                  <h3 className="mt-7 font-display text-2xl leading-tight text-white md:text-[2rem]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-200">
                    {service.text}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.brief}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                      >
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex items-end justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Service</p>
                        <p className="mt-2 font-display text-3xl text-white">
                          {(index + 1).toString().padStart(2, '0')}
                        </p>
                      </div>
                      <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)]" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
