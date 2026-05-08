import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const interactiveSelector =
  'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setActive(true)
    }
    const onEnter = () => setActive(true)
    const onLeave = () => {
      setActive(false)
      setHovered(false)
    }

    const onPointerOver = (event) => {
      setHovered(Boolean(event.target.closest(interactiveSelector)))
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerenter', onEnter)
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('pointerover', onPointerOver)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerenter', onEnter)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('pointerover', onPointerOver)
    }
  }, [])

  return (
    <>
      <motion.div
        animate={{
          x: position.x - (hovered ? 28 : 22),
          y: position.y - (hovered ? 28 : 22),
          scale: active ? (hovered ? 1.25 : 1) : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 260, mass: 0.45 }}
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden rounded-full border border-electric/50 bg-white/[0.05] backdrop-blur-md md:block"
        style={{
          width: hovered ? 56 : 44,
          height: hovered ? 56 : 44,
          boxShadow: hovered
            ? '0 0 0 1px rgba(64,184,255,0.4), 0 0 55px rgba(64,184,255,0.34), 0 0 90px rgba(141,91,255,0.18)'
            : '0 0 0 1px rgba(64,184,255,0.22), 0 0 36px rgba(64,184,255,0.18), 0 0 70px rgba(141,91,255,0.12)',
        }}
      >
        <div className="absolute inset-[6px] rounded-full bg-[radial-gradient(circle,rgba(64,184,255,0.32),rgba(141,91,255,0.18),transparent_72%)]" />
      </motion.div>

      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: active ? (hovered ? 1.35 : 1) : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.28 }}
        className="pointer-events-none fixed left-0 top-0 z-[81] hidden h-3 w-3 rounded-full bg-white shadow-[0_0_22px_rgba(64,184,255,0.8)] md:block"
      />
    </>
  )
}
