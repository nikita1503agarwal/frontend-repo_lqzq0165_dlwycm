import { motion } from 'framer-motion'
import GlassPanel from '../components/ui/GlassPanel'

const projects = [
  { title: 'Echoes in the Static', tag: 'WebGL + Shaders', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Neon Rift Terminal', tag: 'Three.js UI', img: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Void Bloom', tag: 'Postprocessing', img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <section className="relative px-6 py-24 max-w-6xl mx-auto">
      <h2 className="font-title text-3xl md:text-4xl tracking-[0.2em] mb-10 neon-red">PROJECTS FROM THE UPSIDE DOWN</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.6, delay: i * 0.15, ease: 'easeOut' }}>
            <GlassPanel className="overflow-hidden group">
              <div className="relative h-56">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 scanlines opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-title tracking-[0.15em] text-lg neon-red">{p.title}</h3>
                  <span className="text-xs text-white/60">{p.tag}</span>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
