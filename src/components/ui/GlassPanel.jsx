export default function GlassPanel({ children, className = '' }) {
  return (
    <div className={`glass rounded-xl border-white/10 shadow-neon/30 ${className}`}>
      {children}
    </div>
  )
}
