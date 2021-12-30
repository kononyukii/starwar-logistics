import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { useHover } from 'react-use'

// styled
import { ServiceAnimationWrap, ServiceImage, ServiceItemContainer, ServiceText } from './styled'

interface ServiceItemInterface {
  text: string
  Image: IconType
  i: number
}

const ServiceItem: FC<ServiceItemInterface> = ({ text, Image, i }) => {
  const element = (hovered: boolean) => (
    <ServiceItemContainer active={hovered}>
      <ServiceImage active={hovered}>
        <Image size={30} color={hovered ? '#2F343A' : '#fff'} />
      </ServiceImage>
      <ServiceText>{text}</ServiceText>
    </ServiceItemContainer>
  )
  const [hoverable, hovered] = useHover(element)

  return (
    <ServiceAnimationWrap duration={i * 100} offset={0} animateIn="bounceInDown" animateOnce delay={i * 300}>
      {hoverable}
    </ServiceAnimationWrap>
  )
}

export default ServiceItem
