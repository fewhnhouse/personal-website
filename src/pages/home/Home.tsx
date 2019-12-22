import React, { useCallback, useState } from 'react'
import { Card } from 'antd'
import { useSpring, animated } from 'react-spring'
import ScrollableContainer from '../../components/ScrollableContainer'
import Title from './Title'
import Particles from './Particles'
import Rabbit from './Rabbit'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import Image from '../../components/Image'
import Navbar from './Navbar'
import useWindowSize from '../../utils/useWindowSize'

const TitleCard = styled(Card)`
  height: 200px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  margin: auto;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 100px;
`

const ContentContainer = styled.div`
  background: white;
  width: 100%;
  display: flex;
  height: 500px;
  padding: ${props => props.theme.paddings.large};
`

const LeftImg = styled(Image)`
  position: absolute;
  left: 20px;
  background: white;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  top: 0px;
`

const RightImg = styled(Image)`
  position: absolute;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  right: 20px;
  top: -500px;
  background: white;
`

export default () => {
  const { width, height } = useWindowSize()
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ]
  const [minimize, setMinimize] = useState(false)

  const interpolatePos: any = (x: number, y: number) =>
    `translate3d(${x / 20}px,${y / 20}px,0)`

  const [springProperties, setSpring] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const posProps = useSpring({
    left: minimize ? -200 : width / 2 - 300,
    top: minimize ? -50 : height - 200,
  })

  const scaleProps = useSpring({
    transform: minimize ? 'scale(0.2)' : 'scale(1)',
  })

  const [{ st }, setScroll]: any = useSpring(() => ({ st: 0 }))

  const onScroll = useCallback(
    (e: any) => {
      setMinimize(e.target.scrollTop > 200)
      setScroll({ st: e.target.scrollTop })
    },
    [setScroll]
  )

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) => {
      if (!minimize) {
        setSpring({ xy: calc(x, y) })
      }
    },
    [setSpring, minimize]
  )

  return (
    <div
      onScroll={onScroll}
      onMouseMove={onMove}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <Navbar opaque={minimize} />
      <animated.div
        style={{
          position: 'fixed',
          zIndex: 1001,
          transform: springProperties.xy.interpolate(interpolatePos),
          ...scaleProps,
          ...posProps,
        }}
      >
        <TitleCard>
          <Title />
        </TitleCard>
      </animated.div>
      <Rabbit height={height} />

      <ContentContainer>
        <Image url={logo} width={200} height={200} />
        <h1>Felix Wohnhaas</h1>
      </ContentContainer>
      <div style={{ height: 1000 }}>
        <Particles />
        <ScrollableContainer interpolationFactor={-0.2} scrollTop={st}>
          <LeftImg url={logo} width={400} height={400} />
        </ScrollableContainer>
        <ScrollableContainer interpolationFactor={0.1} scrollTop={st}>
          <RightImg url={logo} width={400} height={400} />
        </ScrollableContainer>

        <Particles />
      </div>
      <div
        style={{ background: 'white', width: '100%', height: '500px' }}
      ></div>
    </div>
  )
}
