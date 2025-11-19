/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#050507',
        neon: {
          red: '#e50914',
          purple: '#5b2bff',
          blue: '#3056d3'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Rubik', 'system-ui', 'sans-serif'],
        mono: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        title: ['Cinzel', 'EB Garamond', 'serif']
      },
      boxShadow: {
        neon: '0 0 20px rgba(229, 9, 20, 0.6), 0 0 40px rgba(229, 9, 20, 0.3)',
        purple: '0 0 20px rgba(91,43,255,0.6), 0 0 40px rgba(91,43,255,0.3)',
        blue: '0 0 20px rgba(48,86,211,0.6), 0 0 40px rgba(48,86,211,0.3)'
      },
      backgroundImage: {
        grain: "url('data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"100\\" height=\\"100\\" viewBox=\\"0 0 100 100\\"><filter id=\\"n\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\".8\\" numOctaves=\\"2\\" stitchTiles=\\"stitch\\"/></filter><rect width=\\"100%\\" height=\\"100%\\" filter=\\"url(%23n)\\" opacity=\\"0.05\\"/></svg>')",
        vignette: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.9) 100%)'
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 8px rgba(229,9,20,0.6), 0 0 24px rgba(229,9,20,0.4)' },
          '50%': { textShadow: '0 0 14px rgba(229,9,20,0.9), 0 0 32px rgba(229,9,20,0.7)' }
        },
        slowPulse: {
          '0%, 100%': { opacity: 0.85 },
          '50%': { opacity: 1 }
        },
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: 1 },
          '20%, 24%, 55%': { opacity: 0.4 }
        }
      },
      animation: {
        glow: 'glow 4s ease-in-out infinite',
        slowPulse: 'slowPulse 6s ease-in-out infinite',
        flicker: 'flicker 10s linear infinite'
      }
    },
  },
  plugins: [],
}
