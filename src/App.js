import React, { Route, Routes } from 'react-router-dom'

import { CanvasComponent } from './Canvas'
import OpenedCard from './OpenedCard'

export const App = ({ images }) => {
  return (
    <>
      <CanvasComponent />
      <Routes>
        <Route path="/card" component={() => <OpenedCard images={images} />} />
      </Routes>
    </>
  )
}
