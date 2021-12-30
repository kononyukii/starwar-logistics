import React, { FC, useEffect } from 'react'
import { useCountUp } from 'react-countup'
import { useBoolean, useIntersection } from 'react-use'

// types
import { AboutCardType } from '../../../types/common'

// styled
import { AboutCard, AboutNumb, AboutTitle, AboutValue } from './styled'

const AboutItem: FC<AboutCardType> = ({ type, title, number, value }) => {
  const [animated, setAnimated] = useBoolean(false)
  const countUpRef = React.useRef<any>(null)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })

  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: number,
    delay: 0,
    duration: 2,
    startOnMount: false
  })

  useEffect(() => {
    if (!animated && intersection && intersection.intersectionRatio > 0) {
      start()
      setAnimated(true)
    }
  }, [intersection])

  return (
    <AboutCard type={type}>
      <div ref={intersectionRef} />
      <AboutNumb ref={countUpRef} isContent={!!number}>
        0
      </AboutNumb>
      <AboutTitle isContent={!!title}>{title}</AboutTitle>
      <AboutValue isContent={!!value}>{value}</AboutValue>
    </AboutCard>
  )
}

export default AboutItem
