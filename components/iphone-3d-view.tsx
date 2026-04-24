'use client'

import { Suspense, useRef, useEffect, useCallback, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Model } from '@/components/canvas/iphone'
import * as THREE from 'three'

type MousePos = { x: number; y: number }

function SceneReadyNotifier({ onReady }: { onReady?: () => void }) {
  useLayoutEffect(() => {
    if (!onReady) return
    let cancelled = false
    let innerRaf: number | undefined
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(() => {
        if (!cancelled) onReady()
      })
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(outerRaf)
      if (innerRaf != null) cancelAnimationFrame(innerRaf)
    }
  }, [onReady])
  return null
}

function PhoneScene({
  mouse,
  onSceneReady,
}: {
  mouse: React.MutableRefObject<MousePos>
  onSceneReady?: () => void
}) {
  const groupRef = useRef<THREE.Group>(null)

  // Set facing rotation when the Three object mounts so the first paint is already
  // screen-forward (useEffect runs too late; useFrame would lerp from y=0 otherwise).
  const setGroupRef = useCallback((node: THREE.Group | null) => {
    groupRef.current = node
    if (node) {
      node.rotation.set(0, Math.PI, 0)
    }
  }, [])

  useFrame(() => {
    if (!groupRef.current) return
    // Base rotation Math.PI (facing camera) + subtle parallax offset
    const targetX = -mouse.current.y * 0.18
    const targetY =  Math.PI + mouse.current.x * 0.22
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05)
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[8, 14, 8]}
        angle={0.18}
        penumbra={1}
        intensity={1.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-6, -4, -4]} intensity={0.35} color="#a78bfa" />
      <pointLight position={[4, 6, 6]}   intensity={0.2}  color="#ffffff" />
      <Suspense fallback={null}>
        {/*
          The GLTF is authored at scale 0.01 (cm → m), so the phone body is
          ~0.16 units tall. Scaling the group by 9 brings it to ~1.44 units,
          which fills the container nicely at the camera distance below.
        */}
        <group ref={setGroupRef} scale={9}>
          <Model />
        </group>
        <Environment preset="city" />
        <SceneReadyNotifier onReady={onSceneReady} />
      </Suspense>
    </>
  )
}

type Iphone3dViewProps = { onSceneReady?: () => void }

export function Iphone3dView({ onSceneReady }: Iphone3dViewProps) {
  const mouse = useRef<MousePos>({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / window.innerWidth)  * 2 - 1
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const setFromClient = useCallback((clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || rect.width <= 0 || rect.height <= 0) return

    const normalizedX = ((clientX - rect.left) / rect.width) * 2 - 1
    const normalizedY = -(((clientY - rect.top) / rect.height) * 2 - 1)
    mouse.current.x = THREE.MathUtils.clamp(normalizedX, -1, 1)
    mouse.current.y = THREE.MathUtils.clamp(normalizedY, -1, 1)
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-full w-full touch-pan-y"
      onPointerMove={(event) => {
        if (event.pointerType === 'touch') {
          setFromClient(event.clientX, event.clientY)
        }
      }}
      onPointerLeave={() => {
        mouse.current.x = 0
        mouse.current.y = 0
      }}
      onTouchMove={(event) => {
        const touch = event.touches[0]
        if (!touch) return
        setFromClient(touch.clientX, touch.clientY)
      }}
      onTouchEnd={() => {
        mouse.current.x = 0
        mouse.current.y = 0
      }}
    >
      <Canvas
        className="h-full w-full"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.5], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
      >
        <PhoneScene mouse={mouse} onSceneReady={onSceneReady} />
      </Canvas>
    </div>
  )
}
