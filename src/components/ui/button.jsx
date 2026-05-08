import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const styles = {
  primary:
    'bg-white/10 text-white border-white/15 hover:border-electric/60 hover:bg-electric/15 hover:shadow-glow',
  gold: 'bg-gold-gradient text-slate-950 border-goldSoft/50 hover:shadow-gold',
  ghost:
    'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10 hover:border-white/20',
}

export const Button = forwardRef(function Button(
  { className, variant = 'primary', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold tracking-[0.24em] uppercase transition-all duration-300',
        styles[variant],
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </button>
  )
})
