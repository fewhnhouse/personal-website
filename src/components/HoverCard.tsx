import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { useMouseHovered } from 'react-use'

const AnimCard = styled(animated.div)`
  width: 200px;
  height: 200px;
  background: grey;
  border-radius: 5px;
  background-image: url(${(props: { backgroundSrc: string }) =>
    props.backgroundSrc});
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`
const calc = (x: number, y: number) => [
  -(y - 200 / 2) / 20,
  (x - 200 / 2) / 20,
  1.1,
]
const trans: any = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const HoverCard = ({
  backgroundSrc = 'https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40',
}: {
  backgroundSrc: string
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const ref = React.useRef(null)
  const { elX, elY } = useMouseHovered(ref, {
    bound: true,
    whenHovered: true,
  })

  set({ xys: calc(elX, elY) })

  return (
    <AnimCard
      ref={ref}
      backgroundSrc={backgroundSrc}
      className='card'
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    ></AnimCard>
  )
}

export default HoverCard
