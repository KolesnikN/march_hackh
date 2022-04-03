import * as THREE from 'three'

import { Canvas } from '@react-three/fiber'
import Cards from './Cards'

export const CanvasComponent = () => (
  <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
    <Cards />
  </Canvas>
)
