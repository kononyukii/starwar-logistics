import React, { FC } from 'react'

// styled
import { MainContainer } from 'components/common/Container/styled'

// components
import About from '../../components/Home/About'
import FirstSection from '../../components/Home/FirstSection'
import Information from '../../components/Home/Information'
import Services from '../../components/Home/Services'

const Homepage: FC = () => {
  return (
    <MainContainer>
      <FirstSection />
      <Information />
      <Services />
      <About />
    </MainContainer>
  )
}

export default Homepage
