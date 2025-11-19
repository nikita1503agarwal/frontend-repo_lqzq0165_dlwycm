import { motion } from 'framer-motion'
import NeonText from '../components/ui/NeonText'
import HeroSpline from '../components/3d/HeroSpline'

export default function Hero({ onToggle, upsideDown }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 vignette opacity-80"></div>
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <NeonText className="animate-glow">STRANGER PORTFOLIO</NeonText>
          <motion.p className="text-white/80 font-sans leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.2, ease: 'easeOut' }}>
            A cinematic interface from the Upside Down: neon red bloom, glitch spores, and haunted geometry floating in slow, uneasy motion.
          </motion.p>
          <div className="flex gap-4">
            <button onClick={onToggle} className="px-4 py-2 rounded-lg border border-white/10 hover:border-neon-red/60 transition-colors neon-border text-sm">
              Toggle Upside Down Mode {upsideDown ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <HeroSpline />
      </div>
    </section>
  )
}
