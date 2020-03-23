import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { animated, OpaqueInterpolation } from 'react-spring'
import { useTypeWriter } from './useTypeWriter'

const TitleCard = styled(Card)`
  height: 200px;
  min-width: 700px;
  width: 700px;
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
  const interpolatePos: any = (x: number, y: number) =>
    `translate3d(${x / 20}px,${y / 20}px,0)`

  const title = useTypeWriter({ title: '://fewhnhouse' })

  return (
    <TitleCard>
      <animated.div style={{ transform: xy.interpolate(interpolatePos) }}>
        <Header>{title}</Header>
      </animated.div>
    </TitleCard>
  )
}
