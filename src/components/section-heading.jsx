import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}
    >
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-electric">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{description}</p>
    </motion.div>
  )
}
