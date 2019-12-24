import React from 'react'
import Particles from 'react-particles-js'
import rabbit from '../../assets/rabbit.svg'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  height: ${(props: { height: number }) => props.height}px;
`
export default ({ height }: { height: number }) => {
  return (
    <Container height={height}>
      <Particles
        params={{
          fps_limit: 28,
          particles: {
            number: {
              value: 200,
              density: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 30,
              opacity: 0.4,
            },
            move: {
              speed: 1,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 2,
                sync: false,
              },
              value: 0.4,
            },
          },
          polygon: {
            enable: true,
            scale: 0.8,
            type: 'inline',
            move: {
              radius: 10,
            },
            url: rabbit,
            inline: {
              arrangement: 'equidistant',
            },
            draw: {
              enable: true,
              stroke: {
                color: 'rgba(255, 255, 255, .4)',
              },
            },
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40,
              },
            },
          },
        }}
      />
    </Container>
  )
}
