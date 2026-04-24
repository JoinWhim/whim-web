'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { Iphone3dView } from '@/components/iphone-3d-view'

function SplashLayer({
  exiting,
  onOverlayTransitionEnd,
}: {
  exiting: boolean
  onOverlayTransitionEnd: (e: React.TransitionEvent<HTMLDivElement>) => void
}) {
  return (
    <div
      className={`pointer-events-auto fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0E1E] transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        exiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{ isolation: 'isolate' }}
      onTransitionEnd={onOverlayTransitionEnd}
      aria-busy={!exiting}
      role="status"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(124,58,237,0.22)_0%,transparent_58%)]" />
      <span className="sr-only">Loading</span>
      <div
        className={`relative z-10 transition-[opacity,transform,filter] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          exiting ? 'scale-[0.92] opacity-0 blur-[2px]' : 'scale-100 opacity-100 blur-0'
        }`}
      >
        <Image
          src="/WHIM.png"
          alt="Whim"
          width={200}
          height={56}
          className="h-11 w-auto whim-splash-logo md:h-14"
          priority
        />
      </div>
    </div>
  )
}

export function Iphone3dWithSplash() {
  const readyOnce = useRef(false)
  const [portalToBody, setPortalToBody] = useState(false)
  const [splashMounted, setSplashMounted] = useState(true)
  const [exiting, setExiting] = useState(false)

  useLayoutEffect(() => {
    setPortalToBody(true)
  }, [])

  const onSceneReady = useCallback(() => {
    if (readyOnce.current) return
    readyOnce.current = true
    setExiting(true)
  }, [])

  useEffect(() => {
    if (!exiting) return
    const t = window.setTimeout(() => setSplashMounted(false), 850)
    return () => window.clearTimeout(t)
  }, [exiting])

  useEffect(() => {
    const root = document.documentElement
    if (splashMounted) {
      root.setAttribute('data-splash-active', 'true')
    } else {
      root.removeAttribute('data-splash-active')
    }
    return () => {
      root.removeAttribute('data-splash-active')
    }
  }, [splashMounted])

  useEffect(() => {
    if (!splashMounted) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [splashMounted])

  const onOverlayTransitionEnd = useCallback((e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName === 'opacity' && exiting) {
      setSplashMounted(false)
    }
  }, [exiting])

  const layer =
    splashMounted ? (
      <SplashLayer exiting={exiting} onOverlayTransitionEnd={onOverlayTransitionEnd} />
    ) : null

  return (
    <div className="relative h-full w-full">
      <Iphone3dView onSceneReady={onSceneReady} />
      {layer &&
        (portalToBody && typeof document !== 'undefined'
          ? createPortal(layer, document.body)
          : layer)}
    </div>
  )
}
