import React from 'react'
import { interpolate, animated } from 'react-spring'

export default ({
  scrollTop,
  interpolationFactor,
  children,
}: {
  scrollTop: number[]
  interpolationFactor: number
  children?: React.ReactNode
}) => {
  const scrollInterpolation = interpolate(
    scrollTop,
    (o: number) => `translate(0px,${o * interpolationFactor}px)`
  )

  return (
    <animated.div
      style={{
        transform: scrollInterpolation,
      }}
    >
      {children}
    </animated.div>
  )
}
