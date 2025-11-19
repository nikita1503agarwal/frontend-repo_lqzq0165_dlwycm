import { motion } from 'framer-motion'
import { titleVariants } from '../../lib/animations'

export default function NeonText({ children, className = '' }) {
  return (
    <motion.h1
      className={`font-title text-5xl md:text-7xl tracking-[0.2em] text-neon-red neon-red select-none ${className}`}
      variants={titleVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {children}
    </motion.h1>
  )
}
