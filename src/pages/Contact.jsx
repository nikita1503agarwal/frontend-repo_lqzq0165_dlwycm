import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassPanel from '../components/ui/GlassPanel'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section className="relative px-6 py-24 max-w-3xl mx-auto">
      <h2 className="font-title text-3xl md:text-4xl tracking-[0.2em] mb-10 neon-red">CONTACT THE OTHER SIDE</h2>
      <GlassPanel className="p-6">
        {!sent ? (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:border-neon-red/60" placeholder="Jane Byers" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:border-neon-red/60" placeholder="you@hawkins.net" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:border-neon-red/60" placeholder="Describe your anomaly..." />
            </div>
            <button className="px-4 py-2 rounded-md neon-border">Send into the Void</button>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4 }} className="text-center p-10">
            <p className="font-title tracking-[0.15em] text-xl neon-red">TRANSMISSION SENT</p>
            <p className="text-white/70 mt-2">A rift opens, expect a reply soon.</p>
          </motion.div>
        )}
      </GlassPanel>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="grain w-full h-full"></div>
      </div>
    </section>
  )
}
