import { Link } from 'react-scroll'

import styled, { css } from 'styled-components'

import { theme } from 'styles/theme'

export const HeaderMain = styled.header`
  width: 100%;
  padding: 27px 0;
  position: fixed;
  z-index: 99;

  ${() => css`
    background: ${theme.colors.dark};
  `}
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavItems = styled.nav`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media screen and ${theme.media.medium} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

export const NavItem = styled(Link)`
  padding-left: 30px;
  cursor: pointer;
  ${() => css`
    color: ${theme.colors.white};
    text-transform: uppercase;

    :hover {
      color: ${theme.colors.gold};
    }
  `}
`

// Burger menu style

export const CustomBurger = styled.div<{ active?: boolean }>`
  display: none;
  
  @media screen and ${theme.media.medium} {
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
    z-index: 5;
  }
  
  ${({ active }) =>
    active &&
    css`
      span {
        transform: scale(0);
        &:first-child {
          transform: rotate(-45deg);
          top: calc(50% - 1px);
        }
        &:last-child {
          transform: rotate(45deg);
          bottom: calc(50% - 1px);
        }
      }
    `}
    }
`

export const Line = styled.span`
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  height: 2px;
  width: 100%;
  background: ${theme.colors.gold};
  transition: all 0.3s ease;
  &:first-child {
    top: 0;
  }
  &:last-child {
    top: auto;
    bottom: 0;
  }
`

export const SideNavigation = styled.div<{ open?: boolean }>`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: -100vh;
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;
  background: rgba(47, 52, 58, 0.98);
  padding-top: 100px;
  transition: all 0.3s ease;

  @media screen and ${theme.media.medium} {
    display: block;
  }
  ${({ open }) =>
    open &&
    css`
      top: 0;
    `}
`
