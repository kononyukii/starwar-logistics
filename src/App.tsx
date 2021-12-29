import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from 'pages/Homepage'

import Layout from './pages/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path={'*'} element={<div style={{ padding: '150px' }}>404</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
