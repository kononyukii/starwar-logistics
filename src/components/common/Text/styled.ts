import styled from 'styled-components'

import { theme } from 'styles/theme'

export const MainTitle = styled.h1`
  position: relative;
  font-weight: ${theme.weights.bold};
  font-size: 64px;
  line-height: 75px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${theme.colors.white};

  @media screen and ${theme.media.medium} {
    font-size: 44px;
    line-height: 55px;
  }

  @media screen and ${theme.media.small} {
    font-size: 28px;
    line-height: 35px;
  }
`

export const Title = styled.h2`
  position: relative;
  font-weight: ${theme.weights.bold};
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${theme.colors.white};

  @media screen and ${theme.media.medium} {
    font-size: 32px;
    line-height: 36px;
  }

  @media screen and ${theme.media.small} {
    font-size: 24px;
    line-height: 28px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    height: 86px;
    width: 90px;
    border-top: 6px solid ${theme.colors.gold};

    @media screen and ${theme.media.medium} {
      top: -30px;
    }

    @media screen and ${theme.media.small} {
      top: -20px;
    }
  }
`

export const Text = styled.p<{ sm?: boolean; center?: boolean }>`
  font-size: ${(props) => (props.sm ? '16px' : '18px')};
  line-height: ${(props) => (props.sm ? '23px' : '28px')};
  text-align: ${(props) => (props.center ? 'center' : 'start')};

  @media screen and ${theme.media.medium} {
    font-size: 14px;
    line-height: 18px;
  }
`
