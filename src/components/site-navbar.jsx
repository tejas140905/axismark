import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const links = ['About', 'Services', 'Results', 'Process', 'Contact']

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const handleAnchorClick = (event, target) => {
    event.preventDefault()
    const href = `#${target}`
    const lenis = window.__lenis

    if (lenis) {
      lenis.scrollTo(href, { offset: -96, duration: 1.2 })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 md:px-6 ${
          scrolled
            ? 'border-white/10 bg-slate-950/70 shadow-glow backdrop-blur-xl'
            : 'border-white/8 bg-white/5 backdrop-blur-md'
        }`}
      >
        <a
          href="https://www.7hours.in"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3"
        >
          <img src="/logo.png" alt="Axismark Logo" className="h-10 w-10 object-contain" />
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.25em] text-white uppercase">
              Axismark
            </p>
            <p className="text-xs text-slate-400">PR & Branding Agency</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(event) => handleAnchorClick(event, link.toLowerCase())}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" onClick={(event) => handleAnchorClick(event, 'contact')}>
            <Button variant="gold">Get Free Consultation</Button>
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-slate-950/90 p-5 shadow-glow backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-300"
                onClick={(event) => handleAnchorClick(event, link.toLowerCase())}
              >
                {link}
              </a>
            ))}
            <a href="#contact" onClick={(event) => handleAnchorClick(event, 'contact')}>
              <Button variant="gold" className="mt-2 w-full">
                Get Free Consultation
              </Button>
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
