import type { Metadata } from 'next'
import { Iphone3dView } from '@/components/iphone-3d-view'

export const metadata: Metadata = {
  title: 'iPhone 3D (preview)',
  robots: { index: false, follow: false },
}

/**
 * Temporary route to preview the GLTF iPhone in isolation.
 * Remove or un-link when no longer needed.
 */
export default function Iphone3dPage() {
  return (
    <div className="fixed inset-0 h-dvh w-full bg-[#0a0a0a]">
      <Iphone3dView />
    </div>
  )
}
