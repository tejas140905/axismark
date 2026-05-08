import { Instagram, Linkedin, Twitter } from 'lucide-react'

const groups = {
  QuickLinks: ['Home', 'About', 'Services', 'Contact'],
  Services: ['Public Relations', 'Branding', 'SEO Optimization', 'Content Marketing'],
  Contact: ['info@Axismark.in', '7219393556', 'Global Remote Team'],
  Social: ['Instagram', 'LinkedIn', 'X / Twitter'],
}

export function FooterSection() {
  return (
    <footer className="px-4 pb-10 pt-6 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-3xl text-white">
              <a href="https://www.Axismark.in" target="_blank" rel="noreferrer" className="transition hover:text-slate-200">
                Axismark PR & Branding Agency
              </a>
            </p>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              We are a result-driven PR and branding agency helping businesses build strong identities, media authority, and long-term market credibility in partnership with{' '}
              <a href="https://www.7hours.in" target="_blank" rel="noreferrer" className="text-white transition hover:text-goldSoft">
                7hours Solutions
              </a>
              .
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-goldSoft">
              In Partnership With{' '}
              <a href="https://www.7hours.in" target="_blank" rel="noreferrer" className="transition hover:text-white">
                7hours Solutions
              </a>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {Object.entries(groups).map(([title, items]) => (
              <div key={title}>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                  {title.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <div className="mt-4 space-y-3">
                  {items.map((item) => (
                    <p key={item} className="text-sm text-slate-200">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">
            © 2026{' '}
            <a href="https://www.Axismark.in" target="_blank" rel="noreferrer" className="transition hover:text-white">
              Axismark PR & Branding Agency
            </a>
            . Built for brands ready to lead.
          </p>
          <div className="flex items-center gap-3">
            {[Instagram, Linkedin, Twitter].map((Icon, index) => (
              <div
                key={index}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
