import React from 'react'
import { interpolate, animated } from 'react-spring'
import { Card } from 'antd'

export default ({
  scrollTop,
  children,
}: {
  scrollTop: number[]
  children?: React.ReactNode
}) => {
  const scrollInterpolation = interpolate(
    scrollTop,
    (o: number) => `translate(0px,-${o * 5}px)`
  )

  return (
    <animated.div
      style={{
        transform: scrollInterpolation,
      }}
    >
      <Card>{children}</Card>
    </animated.div>
  )
}
