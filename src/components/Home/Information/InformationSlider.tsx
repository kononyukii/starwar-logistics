import React, { FC, useRef } from 'react'
import Slider, { Settings } from 'react-slick'

// configs
import { sliderImages } from '../../../utils/consts'

// components
import SliderButtons from './SliderButtons'
// styled
import { InfoSliderContainer, InfoSliderImage, InfoSliderItem } from './styled'

const InformationSlider: FC = () => {
  const ref = useRef<Slider | null>(null)

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  const onNext = (): void => {
    ref.current?.slickNext()
  }

  const onPrev = (): void => {
    ref.current?.slickPrev()
  }

  return (
    <InfoSliderContainer>
      <Slider ref={ref} {...settings}>
        {sliderImages.map((item: string, i: number) => (
          <InfoSliderItem key={i}>
            <InfoSliderImage src={item} />
          </InfoSliderItem>
        ))}
      </Slider>
      <SliderButtons onNext={onNext} onPrev={onPrev} />
    </InfoSliderContainer>
  )
}

export default InformationSlider
