import React, { FC, useEffect } from 'react'
import { useBoolean, useLockBodyScroll, useWindowSize } from 'react-use'

// utils
import { mobileSize } from 'utils/consts'

// images
import { ReactComponent as Logo } from 'assets/images/common/logo.svg'

// common styled
import { Container } from '../../common/Container/styled'
import { LogoContainer } from '../../common/Logo/styled'

// components
import Burger from './Burger'
import Navigations from './Navigations'
// styled
import { HeaderContainer, HeaderMain, SideNavigation } from './styled'

const Header: FC = () => {
  const [active, toggleActive] = useBoolean(false)
  const { width } = useWindowSize()
  useLockBodyScroll(active)

  useEffect(() => {
    active && toggleActive(false)
  }, [width])

  return (
    <HeaderMain>
      <Container>
        <HeaderContainer>
          <LogoContainer to={'/'}>
            <Logo />
          </LogoContainer>
          {width > mobileSize && <Navigations />}
          <Burger active={active} toggleActive={toggleActive} />
          <SideNavigation open={active}>
            <Navigations onCloseBurger={toggleActive} />
          </SideNavigation>
        </HeaderContainer>
      </Container>
    </HeaderMain>
  )
}

export default Header
