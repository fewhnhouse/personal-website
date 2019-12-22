import React, { useCallback, useState } from 'react'
import { Card, BackTop, Icon, Divider } from 'antd'
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
import HoverCard from '../../components/HoverCard'
import Footer from './Footer'
import { FlexParent } from '@fe.whnhouse/flex.box/build/Flex'
import SocialMediaButton from './SocialMediaButton'
import Wave from './Wave'

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
 background: rgb(184,176,237);
background: linear-gradient(180deg, rgba(184,176,237,1) 0%, rgba(255,255,255,1) 20%);   width: 100%;
  display: flex;
  height: 500px;
  padding: ${props => props.theme.paddings.large};
`

const LeftContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 0px;
`

const RightContainer = styled.div`
  position: absolute;
  right: 20px;
  top: -500px;
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
        <Wave />
        <FlexParent
          style={{ width: '100%', height: '100%' }}
          justify='space-between'
          align='center'
        >
          <Image url={logo} width={200} height={200} />
          <h1>Felix Wohnhaas</h1>
          <FlexParent style={{ height: '100%' }}>
            <Divider
              style={{ height: '100%', marginRight: 20 }}
              type='vertical'
            />
            <FlexParent
              style={{ height: '100%' }}
              direction='column'
              justify='space-between'
              align='center'
            >
              <SocialMediaButton type='facebook' />
              <SocialMediaButton type='twitter' />
              <SocialMediaButton type='github' />
              <SocialMediaButton type='instagram' />
            </FlexParent>
          </FlexParent>
        </FlexParent>
      </ContentContainer>
      <div style={{ height: 1000 }}>
        <Particles />

        <ScrollableContainer interpolationFactor={-0.2} scrollTop={st}>
          <LeftContainer>
            <HoverCard backgroundSrc={logo}></HoverCard>
          </LeftContainer>
        </ScrollableContainer>
        <ScrollableContainer interpolationFactor={0.3} scrollTop={st}>
          <RightContainer>
            <HoverCard backgroundSrc={logo}></HoverCard>
          </RightContainer>
        </ScrollableContainer>

        <Particles />
      </div>
      <Footer />
    </div>
  )
}
