import { AnimatePresence, motion } from 'framer-motion'

export function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#03050d]"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 animate-spin rounded-full border border-white/10 border-t-electric" />
              <div className="absolute inset-3 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(64,184,255,0.45),rgba(141,91,255,0.2),transparent_70%)]" />
            </div>
            <div className="text-center">
              <p className="font-display text-2xl text-white">
                <a href="https://www.Axismark.in" target="_blank" rel="noreferrer" className="transition hover:text-slate-200">
                  Axismark Growth Agency
                </a>
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-slate-400">
                Loading premium growth experience
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
