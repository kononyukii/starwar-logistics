import styled from 'styled-components'

// theme
import { theme } from 'styles/theme'

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
