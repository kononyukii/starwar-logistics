import styled from 'styled-components'

// theme
import { theme } from '../../../styles/theme'

export const FooterContainer = styled.div`
  background: ${theme.colors.gold};
  padding: 65px 0 60px;

  @media screen and ${theme.media.small} {
    padding: 30px;
  }
`

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and ${theme.media.small} {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ContactLink = styled.a`
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.light};
`

export const ContactIcons = styled.div`
  display: flex;
  gap: 10px;
`
