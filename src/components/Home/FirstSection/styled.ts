import styled from 'styled-components'

import { theme } from 'styles/theme'

// images
import main from 'assets/images/landing/main.png'

export const FirstSectionBackground = styled.div`
  background: url(${main}) center/cover no-repeat;
  position: relative;
  padding: 160px 0 210px;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(47, 52, 58, 0.75), rgba(47, 52, 58, 0.75));
    z-index: 0;
  }

  @media screen and ${theme.media.medium} {
    padding: 140px 16px 185px;
  }

  @media screen and ${theme.media.small} {
    padding: 80px 16px 105px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 45px;
  z-index: 1;

  @media screen and ${theme.media.medium} {
    gap: 35px;
  }

  @media screen and ${theme.media.small} {
    gap: 25px;
  }
`
