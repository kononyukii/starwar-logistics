import React, { FC } from 'react'

// utils
import { servicesList } from '../../../utils/consts'
// common styled
import { Container } from '../../common/Container/styled'
import { Title } from '../../common/Text/styled'

import ServiceItem from './ServiceItem'
// styled
import { ServiceContainer, ServiceItems } from './styled'

const Services: FC = () => {
  return (
    <ServiceContainer id="services">
      <Container>
        <Title>Services</Title>
        <ServiceItems>
          {servicesList.map((item) => {
            return <ServiceItem text={item.text} Image={item.icon} i={item.id} key={item.id} />
          })}
        </ServiceItems>
      </Container>
    </ServiceContainer>
  )
}

export default Services
