import { cubicBezier } from 'framer-motion'

export const eerie = cubicBezier(0.22, 1, 0.36, 1)

export const titleVariants = {
  initial: { opacity: 0, letterSpacing: '0.6em', filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    letterSpacing: '0.15em',
    filter: 'blur(0px)',
    transition: { duration: 3, ease: eerie }
  },
  hover: {
    textShadow: '0 0 12px rgba(229,9,20,0.9), 0 0 24px rgba(229,9,20,0.6)',
    transition: { duration: 1.4, ease: eerie }
  }
}

export const slowFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2.2, ease: eerie } }
}

export const flickerTransition = {
  duration: 2.5,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'linear'
}
