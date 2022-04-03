import * as THREE from 'three'

import { Scroll, ScrollControls } from '@react-three/drei'

import Card from './Card'
import { Minimap } from './Minimap'
import { state } from './util'
import { useSnapshot } from 'valtio'
import { useThree } from '@react-three/fiber'

const Cards = ({ size = 0.7, gap = 0.15 }) => {
  const { urls: topics } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = size + gap

  return (
    <ScrollControls horizontal damping={10} pages={(width - xW + topics.length * xW) / width}>
      <Minimap />
      <Scroll>
        {
          topics.map((topic, index) => <Card key={index} index={index} position={[index * xW, 0, 0]} scale={[size, 4, 1]} url={topic} />) /* prettier-ignore */
        }
      </Scroll>
    </ScrollControls>
  )
}

export default Cards
