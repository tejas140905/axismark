import { motion } from 'framer-motion'
import { ArrowUpRight, Building2 } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'

const clients = [
  {
    name: 'Sarvatah',
    href: 'https://www.sarvatah.in',
    service: 'PR & Brand Strategy',
    review:
      'Sarvatah benefited from sharper PR direction and stronger brand strategy, creating a more confident market presence and a clearer narrative for long-term growth.',
  },
  {
    name: 'Hexamiz Consultancy Pvt Ltd',
    href: 'https://www.hexamiz.com',
    service: 'Lead Generation',
    review:
      'Hexamiz Consultancy Pvt Ltd saw stronger lead generation support through clearer communication, better positioning, and a more conversion-focused business presence.',
  },
]

export function HappyClientsSection() {
  return (
    <section className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Happy Clients"
          title="Trusted by companies that value reputation, clarity, and measurable business impact."
          description="A few of the businesses we have supported through focused PR, brand strategy, and lead generation outcomes."
          align="center"
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {clients.map((client, index) => (
            <motion.article
              key={client.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 shadow-glow backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-electric">
                  <Building2 size={24} />
                </div>
                <a
                  href={client.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300 transition hover:border-electric/40 hover:text-white"
                >
                  Visit Site
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-goldSoft">
                {client.service}
              </p>
              <h3 className="mt-3 font-display text-3xl text-white">
                <a
                  href={client.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition group-hover:text-goldSoft"
                >
                  {client.name}
                </a>
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                "{client.review}"
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
