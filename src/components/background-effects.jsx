import { motion } from 'framer-motion'

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  size: 2 + (index % 4) * 2,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 11) % 100}%`,
  duration: 5 + (index % 7),
  delay: index * 0.18,
}))

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(64,184,255,0.18),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(141,91,255,0.16),transparent_24%),radial-gradient(circle_at_50%_75%,rgba(248,217,146,0.09),transparent_22%),linear-gradient(180deg,#04060f_0%,#050816_50%,#02040a_100%)]" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:72px_72px] opacity-[0.12]" />
      <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-electric/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] animate-pulseSoft rounded-full bg-neon/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-1/3 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute left-1/2 top-[-10%] h-[36rem] w-32 -translate-x-1/2 rotate-12 bg-[linear-gradient(180deg,rgba(64,184,255,0.18),transparent)] opacity-80 blur-3xl animate-beam" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{ y: [0, -24, 0], opacity: [0.18, 0.65, 0.18] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
