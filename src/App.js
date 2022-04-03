import { Canvas } from '@react-three/fiber'
import Cards from './Card'
import { state } from './util'

const App = () => (
  <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
    <Cards />
  </Canvas>
)

export default App
