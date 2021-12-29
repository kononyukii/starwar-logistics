import React from 'react'

// styled
import { NavItem, NavItems } from './styled'

const Navigations = () => {
  return (
    <NavItems>
      <NavItem to="home">home</NavItem>
      <NavItem to="details">details</NavItem>
      <NavItem to="services">services</NavItem>
      <NavItem to="about">About</NavItem>
      <NavItem to="contacts">contacts</NavItem>
    </NavItems>
  )
}

export default Navigations
