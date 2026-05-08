import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from '../components/section-heading'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  'Research & Market Analysis',
  'Brand Positioning',
  'Story Creation',
  'Media Strategy',
  'Execution & Coverage',
  'Performance Tracking',
]

export function ProcessSection() {
  const containerRef = useRef(null)
  const progressRef = useRef(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    const progress = progressRef.current

    if (!container || !progress) return

    const context = gsap.context(() => {
      gsap.fromTo(
        progress,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: true,
          },
        },
      )
    }, container)

    return () => context.revert()
  }, [])

  return (
    <section id="process" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl" ref={containerRef}>
        <SectionHeading
          eyebrow="Process"
          title="A PR and branding process built for long-term perception."
          description="We do not just promote brands. We build long-term perception through research, positioning, storytelling, and disciplined execution."
          align="center"
        />

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl md:p-12">
          <div className="absolute left-12 right-12 top-16 hidden h-px bg-white/10 md:block" />
          <div
            ref={progressRef}
            className="absolute left-12 right-12 top-16 hidden h-px origin-left bg-[linear-gradient(90deg,#40b8ff,#8d5bff,#f8d992)] md:block"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 font-display text-white">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl text-white">{step}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step === 'Research & Market Analysis' && 'We study your category, audience, competitors, and media landscape before shaping the direction.'}
                  {step === 'Brand Positioning' && 'We define what your brand should stand for, how it should be perceived, and where it should lead.'}
                  {step === 'Story Creation' && 'We create messaging and storytelling that make your brand clear, credible, and memorable.'}
                  {step === 'Media Strategy' && 'We map media relations, coverage opportunities, and digital amplification into one strategic plan.'}
                  {step === 'Execution & Coverage' && 'We launch campaigns, manage press activity, and drive visibility across relevant channels.'}
                  {step === 'Performance Tracking' && 'We monitor impact, refine messaging, and optimize for stronger authority over time.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
