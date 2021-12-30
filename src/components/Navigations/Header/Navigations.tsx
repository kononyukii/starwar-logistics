import React, { FC } from 'react'

// styled
import { NavItem, NavItems } from './styled'

type NavigationsType = {
  onCloseBurger?: () => void
}

const Navigations: FC<NavigationsType> = ({ onCloseBurger }) => {
  return (
    <NavItems>
      <NavItem to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={onCloseBurger}>
        home
      </NavItem>
      <NavItem to="details" spy={true} smooth={true} offset={0} duration={500} onClick={onCloseBurger}>
        details
      </NavItem>
      <NavItem to="services" spy={true} smooth={true} offset={-50} duration={500} onClick={onCloseBurger}>
        services
      </NavItem>
      <NavItem to="about" spy={true} smooth={true} offset={0} duration={500} onClick={onCloseBurger}>
        About
      </NavItem>
      <NavItem to="contacts" spy={true} smooth={true} offset={0} duration={500} onClick={onCloseBurger}>
        contacts
      </NavItem>
    </NavItems>
  )
}

export default Navigations
