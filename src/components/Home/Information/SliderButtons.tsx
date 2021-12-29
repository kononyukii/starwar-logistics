import React, { FC } from 'react'

// styled
import { SliderButton, SliderButtonsWrap } from './styled'

interface SliderButtonsType {
  methodType?: 'next' | 'prev'
  onNext?: () => void
  onPrev?: () => void
}

const SliderButtons: FC<SliderButtonsType> = ({ onPrev, onNext, methodType }: SliderButtonsType) => {
  return (
    <SliderButtonsWrap>
      {!methodType || methodType === 'prev' ? <SliderButton onClick={onPrev}>Previous</SliderButton> : <div />}
      {(!methodType || methodType === 'next') && (
        <SliderButton onClick={onNext} isNext>
          Next
        </SliderButton>
      )}
    </SliderButtonsWrap>
  )
}

export default SliderButtons
