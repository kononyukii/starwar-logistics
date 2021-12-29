import React, { FC } from 'react'

// common styled
import { MainTitle, Text } from '../../common/Text/styled'

// styled
import { FirstSectionBackground, TextContainer } from './styled'

const FirstSection: FC = () => {
  return (
    <FirstSectionBackground id="home">
      <TextContainer>
        <MainTitle>Freight transportation</MainTitle>
        <Text center>
          Transport oversize cargo across the galaxy. Full forwarding, insurance, packaging and storage of goods
        </Text>
      </TextContainer>
    </FirstSectionBackground>
  )
}

export default FirstSection
