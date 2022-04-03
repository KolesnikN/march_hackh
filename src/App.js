import { Canvas } from '@react-three/fiber'
import ParsedCards from './Card'
import { state } from './util'

const App = () => (
  <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
    <ParsedCards />
  </Canvas>
)

export default App
