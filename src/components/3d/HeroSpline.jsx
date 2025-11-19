import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] rounded-xl overflow-hidden border border-white/10 glass shadow-purple">
      <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 pointer-events-none vignette opacity-70"></div>
      <div className="absolute inset-0 pointer-events-none grain"></div>
    </div>
  )
}
