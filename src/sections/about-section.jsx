import { motion } from 'framer-motion'
import { SectionHeading } from '../components/section-heading'

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl md:p-10">
          <SectionHeading
            eyebrow="Who We Are"
            title="A modern PR and branding agency built to shape market perception."
            description="We help businesses transform into impactful brands through sharp identity systems, stronger reputation management, and strategic communication that connects, influences, and converts."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-glow backdrop-blur-xl md:p-10"
        >
          <p className="text-lg leading-9 text-slate-200">
            We are a modern PR and branding agency focused on transforming businesses into
            impactful brands. From shaping your identity to managing your reputation, we create
            strategies that connect, influence, and convert.
          </p>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            Unlike traditional agencies, we do not just follow trends. We build brands that set
            them and create long-term authority across media, digital platforms, and customer
            perception.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-electric">Core Focus</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                PR strategy, brand identity, media relations, reputation management, and digital visibility.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-goldSoft">Positioning</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We combine storytelling, strategy, and execution to turn businesses into memorable brands.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
