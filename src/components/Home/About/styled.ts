import styled from 'styled-components'

// theme
import { theme } from 'styles/theme'

// images
import ship from 'assets/images/landing/ship.png'

// common styled
import { CenteredContainer } from '../../common/Container/styled'

export const AboutContainer = styled.div`
  display: flex;
  padding: 80px 0;
  position: relative;

  @media screen and ${theme.media.medium} {
    flex-direction: column;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    max-width: 410px;
    height: 100%;
    background: ${theme.colors.dark_gray};
  }
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: calc(50% - 45px);
  padding-right: 65px;
  z-index: 1;

  @media screen and ${theme.media.medium} {
    width: 100%;
    padding: 0 10px 30px;
  }
`

export const AboutCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(50% + 45px);
  z-index: 1;

  @media screen and ${theme.media.medium} {
    width: 100%;
    padding: 0 10px 30px;
  }
`

export const AboutCard = styled(CenteredContainer)<{ type: string }>`
  flex-direction: column;
  width: 33.33%;
  min-width: 160px;
  height: 160px;
  border: 0.25px solid ${theme.colors.gold};
  background-color: ${theme.colors.white};
  background: ${({ type }) => type === 'image' && `url(${ship}) center/cover no-repeat`};

  @media screen and ${theme.media.large} {
    flex: 1 0 33.33%;
  }
`

export const AboutNumb = styled.h3<{ isContent: boolean }>`
  display: ${({ isContent }) => (isContent ? 'block' : 'none')};
  font-size: 55px;
  letter-spacing: 0.05em;
  color: ${theme.colors.dark};
  font-weight: ${theme.weights.bold};
`

export const AboutTitle = styled.h4<{ isContent: boolean }>`
  display: ${({ isContent }) => (isContent ? 'block' : 'none')};
  font-size: 18px;
  letter-spacing: 0.05em;
  color: ${theme.colors.black};
  padding-top: 10px;
`

export const AboutValue = styled.p<{ isContent: boolean }>`
  display: ${({ isContent }) => (isContent ? 'block' : 'none')};
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${theme.colors.black};
  padding-top: 15px;
`
