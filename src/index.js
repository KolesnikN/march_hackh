import './styles.css'

import React, { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import OpenedCard from './OpenedCard/OpenedCard'
import ReactDOM from 'react-dom'
import { Suspense } from 'react'

const Overlay = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://deriv.com/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Dev Wear Prada
      </a>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Deriv Hackhathon - March 2022</div>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={null}>
            <App />
          </Suspense>
        }
      />
      <Route path="/info" element={<OpenedCard />} />
    </Routes>
    <Overlay />
  </BrowserRouter>,
  document.getElementById('root')
)
