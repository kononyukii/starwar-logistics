import React, { FC } from 'react'

import { aboutList } from '../../../utils/consts'
// common styled
import { Container, SectionContainer } from '../../common/Container/styled'
import { Text, Title } from '../../common/Text/styled'

import AboutItem from './AboutItem'
// styled
import { AboutCards, AboutContainer, AboutText } from './styled'

const About: FC = () => {
  return (
    <SectionContainer id="about">
      <Container>
        <AboutContainer>
          <AboutText>
            <Title>About company</Title>
            <Text sm>
              Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in
              dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation
              has stopped all shipping to the small planet of Naboo.
            </Text>
          </AboutText>
          <AboutCards>
            {aboutList.map((item) => (
              <AboutItem {...item} key={item.id} />
            ))}
          </AboutCards>
        </AboutContainer>
      </Container>
    </SectionContainer>
  )
}

export default About
