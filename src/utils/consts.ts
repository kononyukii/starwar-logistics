import {
  RiMotorbikeLine,
  RiPlaneLine,
  RiRidingLine,
  RiRocketLine,
  RiShipFill,
  RiSubwayLine,
  RiTruckLine,
  RiWalkLine
} from 'react-icons/ri'

import truck2 from 'assets/images/landing/slide1.png'
import truck1 from 'assets/images/landing/slide2.png'
import truck3 from 'assets/images/landing/slide3.png'

export const mobileSize = 768

export const sliderImages = [truck1, truck2, truck3]

export const servicesList = [
  { id: 1, text: 'Rocket', icon: RiRocketLine },
  { id: 2, text: 'Air', icon: RiPlaneLine },
  { id: 3, text: 'Train', icon: RiSubwayLine },
  { id: 4, text: 'Ship', icon: RiShipFill },
  { id: 5, text: 'Truck', icon: RiTruckLine },
  { id: 6, text: 'Motorbike', icon: RiMotorbikeLine },
  { id: 7, text: 'Bike', icon: RiRidingLine },
  { id: 8, text: 'Walk', icon: RiWalkLine }
]
