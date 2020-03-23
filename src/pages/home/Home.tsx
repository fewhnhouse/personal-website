import React, { useCallback, useState } from 'react'
import { Divider, Typography, Button } from 'antd'
import { useSpring, animated } from 'react-spring'
import ScrollableContainer from '../../components/ScrollableContainer'
import Title from './Title'
import Particles from './Particles'
import Rabbit from './Rabbit'
import styled from 'styled-components'
import Navbar from '../../components/Nav/Navbar'
import useWindowSize from '../../utils/useWindowSize'
import HoverCard from '../../components/HoverCard'
import Footer from '../../components/Nav/Footer'
import { FlexParent } from '@fe.whnhouse/flex.box'
import SocialMediaButton from './SocialMediaButton'
import Wave from './Wave'
import ImageQuadrant from './ImageQuadrant'
import {
  FacebookOutlined,
  TwitterOutlined,
  GithubOutlined,
  InstagramOutlined,
  FileTextOutlined,
  BuildOutlined,
} from '@ant-design/icons'
import Competences from './Competences'

export const ContentContainer = styled.div`
  background: white;
  height: ${(props: { height?: string }) => props.height || ''};
  padding: ${props => props.theme.paddings.large};
`

const LeftContainer = styled.div`
  position: absolute;
  left: 20px;
  top: -300px;
`

const RightContainer = styled.div`
  position: absolute;
  right: 100px;
  top: -800px;
`

export const Header = styled.h1`
  text-transform: uppercase;
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
      <Rabbit height={height - 100} />

      <ContentContainer>
        <FlexParent style={{ width: '100%', height: '100%' }}>
          <Wave />
          <FlexParent justify='space-between' align='flex-start'>
            <ImageQuadrant />
            <FlexParent
              style={{ padding: '0px 20px' }}
              direction='column'
              align='flex-start'
            >
              <Header>Felix Wohnhaas</Header>
              <Typography.Text style={{ textAlign: 'justify' }}>
                Hey! My name is Felix Wohnhaas and I am a Web Developer. I
                studied Informatics: Games Engineering at Technical University
                Munich and then switched University to study Media Informatics
                at Ludwig Maximilian University of Munich to increase my
                knowledge in UI and UX. I have been working with JavaScript and
                Web projects roughly when I started my bachelor, in my first
                student job. I started out using Angular.JS, and at the time, I
                got hooked up with Meteor.JS and was amazed by how much one
                single developer can do. I did not know much about the Web at
                this time, but gradually increased my knowledge in different
                areas. The switch of my Job to Motius, where I work as a Web
                Developer since 2017, strongly helped me widening my horizon and
                learning new things. While at the beginning I was working on
                legacy projects involving jQuery, I soon got to know more about
                React as I loved spending my free time learning it - and I still
                do. Since then I have developed various fully fledged Web
                Applications for many different clients and gathered a lot of
                experience in the Web Sector in general. Besides coding, I love
                doing sports, such as Kitesurfing, Mountainbiking, playing
                Tennis or Football, or simply going for a run outside. I enjoy
                cooking and creating new, interesting meals every day.
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
                <SocialMediaButton type={<FacebookOutlined />} />
                <SocialMediaButton type={<TwitterOutlined />} />
                <SocialMediaButton type={<GithubOutlined />} />
                <SocialMediaButton type={<InstagramOutlined />} />
              </FlexParent>
            </FlexParent>
          </FlexParent>
        </FlexParent>
      </ContentContainer>
      <div style={{ height: 600 }}>
        <Particles />

        <ScrollableContainer interpolationFactor={-0.2} scrollTop={st}>
          <LeftContainer>
            <HoverCard>
              <FlexParent justify='space-between' align='center'>
                <FileTextOutlined style={{ fontSize: 30 }} />
                <Divider type='vertical' />
                <Button type='primary'>Look at my Vita</Button>
              </FlexParent>
            </HoverCard>
          </LeftContainer>
        </ScrollableContainer>
        <ScrollableContainer interpolationFactor={0.3} scrollTop={st}>
          <RightContainer>
            <HoverCard>
              <FlexParent justify='space-between' align='center'>
                <BuildOutlined style={{ fontSize: 30 }} />
                <Divider type='vertical' />
                <Button type='primary'>Check out my projects</Button>
              </FlexParent>
            </HoverCard>
          </RightContainer>
        </ScrollableContainer>
      </div>
      <Competences />
      <Footer />
    </div>
  )
}
