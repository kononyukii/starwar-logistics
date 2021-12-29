import ScrollAnimation from 'react-animate-on-scroll'

import styled, { css } from 'styled-components'

// theme
import { theme } from 'styles/theme'

// styled
import { CenteredContainer, SectionContainer } from '../../common/Container/styled'

export const ServiceContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
`

export const ServiceItems = styled.div`
  display: flex;
  gap: 1px;
  flex-wrap: wrap;
  padding-top: 60px;
`

export const ServiceAnimationWrap = styled(ScrollAnimation)`
  width: calc(25% - 1px);
  min-width: 200px;
  @media screen and ${theme.media.medium} {
    flex: 1;
  }
}
`

export const ServiceItemContainer = styled.div<{ active: boolean }>`
  width: 100%;
  min-width: 200px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
  background: ${theme.colors.dark_gray};

  @media screen and ${theme.media.medium} {
    flex: 1;
  }

  ${({ active }) =>
    active &&
    css`
      background: ${theme.colors.gold};
      transition: all 0.5s;
    `}
}
`

export const ServiceText = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  font-weight: ${theme.weights.bold};
`

export const ServiceImage = styled(CenteredContainer)<{ active: boolean }>`
  height: 60px;
  width: 60px;
  border-radius: 50%;

  ${({ active }) =>
    active &&
    css`
      background: ${theme.colors.white};
      transition: all 0.5s;
    `}
}
`
