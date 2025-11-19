import { useState } from 'react'
import UpsideDownScene from './components/3d/UpsideDownScene'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [upsideDown, setUpsideDown] = useState(false)

  return (
    <div className="relative min-h-screen bg-night">
      <UpsideDownScene upsideDown={upsideDown} />

      <div className="relative z-10">
        <header className="px-6 py-4 flex items-center justify-between">
          <div className="font-title tracking-[0.2em] neon-red">THE UPSIDE PORTFOLIO</div>
          <button onClick={() => setUpsideDown((v) => !v)} className="px-3 py-1.5 rounded-md neon-border text-xs">
            {upsideDown ? 'Upside Down: ON' : 'Upside Down: OFF'}
          </button>
        </header>

        <main>
          <Hero onToggle={() => setUpsideDown((v) => !v)} upsideDown={upsideDown} />
          <Projects />
          <Contact />
        </main>

        <footer className="px-6 py-12 text-center text-white/50 text-xs">
          Built with neon and whispers from the other side.
        </footer>
      </div>

      <div className="fixed inset-0 pointer-events-none vignette opacity-90"></div>
      <div className="fixed inset-0 pointer-events-none grain"></div>
    </div>
  )
}

export default App
