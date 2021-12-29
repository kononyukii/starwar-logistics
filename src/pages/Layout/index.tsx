import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../../components/Navigations/Footer'
import Header from '../../components/Navigations/Header'

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
