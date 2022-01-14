import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Homepage from 'pages/Homepage'

import Layout from './pages/Layout'
import officesActions from './store/actions/offices'

function App() {
  // test effect
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(officesActions.get())
  }, [])
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
