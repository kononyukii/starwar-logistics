import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1134px;
  padding: 0 15px;
  margin: 0 auto;
`

export const MainContainer = styled.main`
  padding-top: 100px;
`

export const SectionContainer = styled.div`
  padding-top: 120px;
  background: ${({ theme }) => theme.colors.dark};

  @media screen and ${({ theme }) => theme.media.medium} {
    padding-top: 60px;
  }
`

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
