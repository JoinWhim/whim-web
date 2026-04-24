'use client'

type ProgressiveBlurPosition = 'top' | 'bottom'

type ViewportProgressiveBlurProps = {
  position: ProgressiveBlurPosition
  backgroundColor?: string
  height?: string
  blurAmount?: string
  className?: string
}

export function ViewportProgressiveBlur({
  position,
  backgroundColor = '#0a0a0a',
  height = '120px',
  blurAmount = '12px',
  className = '',
}: ViewportProgressiveBlurProps) {
  const isTop = position === 'top'
  const strongBlurAmount = `calc(${blurAmount} * 1.65)`
  const blurMask = isTop
    ? 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 16%, rgba(0,0,0,0.62) 34%, rgba(0,0,0,0.38) 54%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0.07) 86%, rgba(0,0,0,0) 100%)'
    : 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 16%, rgba(0,0,0,0.62) 34%, rgba(0,0,0,0.38) 54%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0.07) 86%, rgba(0,0,0,0) 100%)'
  const edgeMask = isTop
    ? 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 14%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.18) 46%, rgba(0,0,0,0) 62%)'
    : 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 14%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.18) 46%, rgba(0,0,0,0) 62%)'
  const tintGradient = isTop
    ? `linear-gradient(to top, transparent 0%, color-mix(in srgb, ${backgroundColor} 28%, transparent) 52%, color-mix(in srgb, ${backgroundColor} 58%, transparent) 100%)`
    : `linear-gradient(to bottom, transparent 0%, color-mix(in srgb, ${backgroundColor} 28%, transparent) 52%, color-mix(in srgb, ${backgroundColor} 58%, transparent) 100%)`

  return (
    <div
      className={`pointer-events-none fixed left-0 w-full overflow-hidden ${className}`}
      style={{
        [isTop ? 'top' : 'bottom']: 0,
        height,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: blurMask,
          maskImage: blurMask,
          WebkitBackdropFilter: `blur(${blurAmount})`,
          backdropFilter: `blur(${blurAmount})`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: edgeMask,
          maskImage: edgeMask,
          WebkitBackdropFilter: `blur(${strongBlurAmount})`,
          backdropFilter: `blur(${strongBlurAmount})`,
        }}
      />
      <div className="absolute inset-0" style={{ background: tintGradient }} />
    </div>
  )
}
