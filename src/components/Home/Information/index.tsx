import React, { FC } from 'react'

// common styled
import { Container } from '../../common/Container/styled'

import InformationSlider from './InformationSlider'
import InformationText from './InformationText'
// styled
import { InformationBlock, InformationContainer } from './styled'

const Information: FC = () => {
  return (
    <InformationBlock id="details">
      <Container>
        <InformationContainer>
          <InformationText />
          <InformationSlider />
        </InformationContainer>
      </Container>
    </InformationBlock>
  )
}

export default Information
