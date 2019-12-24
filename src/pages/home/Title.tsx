import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { animated, OpaqueInterpolation } from 'react-spring'

const TitleCard = styled(Card)`
  height: 200px;
  width: 700px
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  margin: auto;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 100px;
`

const Header = styled.h1`
  font-size: 84px;
  color: white;
  font-weight: bold;
`
export default ({ xy }: { xy: OpaqueInterpolation<number[]> }) => {
  const [titleIndex, setTitleIndex] = useState(0)
  const items = '://fewhnhouse'.split('')
  const interpolatePos: any = (x: number, y: number) =>
    `translate3d(${x / 20}px,${y / 20}px,0)`

  useEffect(() => {
    const interval = setInterval(() => {
      if (titleIndex < items.length) {
        setTitleIndex(titleIndex => titleIndex + 1)
      }
    }, 50)
    return () => {
      clearInterval(interval)
    }
  }, [items.length, titleIndex])

  return (
    <TitleCard>
      <animated.div style={{ transform: xy.interpolate(interpolatePos) }}>
        <Header>{items.filter((_, index) => index < titleIndex)}</Header>
      </animated.div>
    </TitleCard>
  )
}
