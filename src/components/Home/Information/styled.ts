import styled from 'styled-components'

import { theme } from 'styles/theme'

// images
import service from 'assets/images/landing/service.png'
import arrow from 'assets/images/landing/slider-arrow.svg'

// styled
import { SectionContainer } from '../../common/Container/styled'

export const InformationBlock = styled(SectionContainer)`
  padding-bottom: 130px;
  background: url(${service}) center/cover no-repeat;

  @media screen and ${theme.media.medium} {
    padding-bottom: 65px;
    background: ${theme.colors.dark};
  }
`

export const InformationContainer = styled.div`
  display: flex;
  gap: 30px;

  @media screen and ${theme.media.medium} {
    flex-direction: column;
  }
`

export const InformationTextBlock = styled.div`
  width: 50%;
  max-width: 445px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 40px;

  @media screen and ${theme.media.medium} {
    width: 100%;
    max-width: 100%;
  }
`

export const InfoSliderContainer = styled.div`
  width: 50%;

  @media screen and ${theme.media.medium} {
    width: 100%;
  }
`

export const InfoSliderItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 445px;
  height: 265px;
`

export const InfoSliderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`

export const InformationButton = styled.div`
  max-width: 220px;

  @media screen and ${theme.media.small} {
    max-width: 100%;
  }
`

export const SliderButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  gap: 15px;

  @media screen and ${theme.media.small} {
    flex-direction: column;
  }
`

export const SliderButton = styled.div<{ isNext?: boolean }>`
  color: ${theme.colors.gold};
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  padding-right: ${(props) => (props.isNext ? '95px' : '0')};
  padding-left: ${(props) => (props.isNext ? '0' : '95px')};
  user-select: none;

  &:hover {
    transform: scale(1.01);
    transition: all 0.5s;
  }

  &:before {
    content: url(${arrow});
    position: absolute;
    top: ${(props) => (props.isNext ? '-2px' : '2px')};
    right: ${(props) => props.isNext && '0'};
    left: ${(props) => !props.isNext && '0'};
    width: 65px;
    height: 20px;
    transform: ${(props) => !props.isNext && 'rotate(180deg)'};
  }

  @media screen and ${theme.media.small} {
    text-align: ${(props) => (props.isNext ? 'right' : 'left')};
  }
`
