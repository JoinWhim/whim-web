export function BackgroundNoise() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[5] h-[100lvh] w-full mix-blend-soft-light opacity-[0.16] motion-reduce:opacity-[0.09]"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="whim-bg-noise"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
            result="turbulence"
          />
          <feColorMatrix
            in="turbulence"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.55 0"
            result="alphaNoise"
          />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#whim-bg-noise)" fill="#0A0E1E" />
    </svg>
  )
}
