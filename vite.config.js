import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@react-three/fiber')) {
              return 'r3f-vendor'
            }

            if (id.includes('@react-three/drei')) {
              return 'drei-vendor'
            }

            if (id.includes('/three/')) {
              return 'three-core'
            }

            if (id.includes('framer-motion') || id.includes('gsap') || id.includes('lenis')) {
              return 'motion-vendor'
            }

            if (id.includes('/react/') || id.includes('react-dom')) {
              return 'react-vendor'
            }
          }
        },
      },
    },
  },
})
