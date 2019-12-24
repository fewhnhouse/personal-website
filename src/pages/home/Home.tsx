import React, { useCallback, useState } from 'react'
import { Divider, Typography } from 'antd'
import { useSpring, animated } from 'react-spring'
import ScrollableContainer from '../../components/ScrollableContainer'
import Title from './Title'
import Particles from './Particles'
import Rabbit from './Rabbit'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import Image from '../../components/Image'
import Navbar from './Nav/Navbar'
import useWindowSize from '../../utils/useWindowSize'
import HoverCard from '../../components/HoverCard'
import Footer from './Nav/Footer'
import { FlexParent } from '@fe.whnhouse/flex.box/build/Flex'
import SocialMediaButton from './SocialMediaButton'
import Wave from './Wave'

const ContentContainer = styled.div`
  background: white;
  display: flex;
  height: 300px;
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

  const [springProperties, setSpring] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const posProps = useSpring({
    right: minimize ? -268 : width / 2 - 350,
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
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <Navbar opaque={minimize} />
      <animated.div
        style={{
          position: 'fixed',
          zIndex: 1001,
          ...scaleProps,
          ...posProps,
        }}
      >
        <Title xy={springProperties.xy} />
      </animated.div>
      <Rabbit height={height} />

      <ContentContainer>
        <Wave />
        <FlexParent
          style={{ width: '100%', height: '100%' }}
          justify='space-between'
          align='flex-start'
        >
          <Image url={logo} width={200} height={200} />
          <FlexParent
            style={{ padding: '0px 20px' }}
            direction='column'
            align='flex-start'
          >
            <h1>Felix Wohnhaas</h1>
            <Typography.Text style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium modi eveniet cumque corporis. Odio magnam omnis porro
              saepe dolorum quidem ex velit, magni corporis rem aliquid ipsam
              earum molestiae? Pariatur? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolorem similique consectetur possimus quo
              doloribus, doloremque sit facilis quidem, id et illum debitis
              maxime quia recusandae minus necessitatibus excepturi? Atque, ex!
            </Typography.Text>
          </FlexParent>
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
