import React, { FC } from 'react'
import { RiFacebookCircleFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

import { ReactComponent as Logo } from '../../../assets/images/common/footer-logo.svg'
// common styled
import { Container, SectionContainer } from '../../common/Container/styled'
import { LogoContainer } from '../../common/Logo/styled'

// styled
import { ContactIcons, ContactLink, ContactLinks, FooterContainer, FooterWrap } from './styled'

const Footer: FC = () => {
  return (
    <SectionContainer id="contacts">
      <FooterContainer>
        <Container>
          <FooterWrap>
            <LogoContainer to={'/'}>
              <Logo />
            </LogoContainer>
            <ContactLinks>
              <ContactLink href="tel:+380937403569">+380937403569</ContactLink>
              <ContactLink href="mailto:kononyukii@gmail.com">kononyukii@gmail.com</ContactLink>
            </ContactLinks>
            <ContactIcons>
              <ContactLink href="https://github.com/kononyukii">
                <RiGithubFill size={40} />
              </ContactLink>
              <ContactLink href="https://linkedin.com/in/ivan-kononyuk-1924201b4">
                <RiLinkedinBoxFill size={40} />
              </ContactLink>
              <ContactLink href="https://www.facebook.com/profile.php?id=100009331552995">
                <RiFacebookCircleFill size={40} />
              </ContactLink>
            </ContactIcons>
          </FooterWrap>
        </Container>
      </FooterContainer>
    </SectionContainer>
  )
}

export default Footer
