import React, { useCallback } from 'react'
import { Card } from 'antd'
import { useSpring, animated } from 'react-spring'
import ScrollableCard from '../../components/ScrollableCard'
import Title from './Title'
import Particles from './Particles'
import Rabbit from './Rabbit'

export default () => {
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ]

  const trans1: any = (x: number, y: number) =>
    `translate3d(${x / 20}px,${y / 20}px,0)`

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const [{ st }, setScroll]: any = useSpring(() => ({ st: 0 }))

  const onScroll = useCallback(
    (e: any) => {
      setScroll({ st: e.target.scrollTop / 30 })
    },
    [setScroll]
  )
  const onMove = useCallback(
    ({ clientX: x, clientY: y }) => {
      set({ xy: calc(x, y) })
    },
    [set]
  )

  return (
    <div
      onScroll={onScroll}
      onMouseMove={onMove}
      style={{ width: '100vw', height: '100vh', overflow: 'auto' }}
    >
      <div>
        <Rabbit />
        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
          <Card
            style={{
              width: '80%',
              height: 200,
              margin: 'auto',
              background: 'rgba(0,0,0,0.2)',
              position: 'relative',
              bottom: 100,
            }}
          >
            <Title />
          </Card>
        </animated.div>
      </div>

      <div
        style={{ background: 'white', width: '100%', height: '500px' }}
      ></div>
      <div style={{ height: 1000 }}>
        <Particles />
        <ScrollableCard scrollTop={st} />
      </div>
      <div
        style={{ background: 'white', width: '100%', height: '500px' }}
      ></div>
    </div>
  )
}
