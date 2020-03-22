import React from 'react'
import styled, { keyframes } from 'styled-components'
import waveSrc from '../../assets/wave.svg'

const wave = keyframes`
    0% {
        margin-left: 0;
    }
    100% {
        margin-left: -1600px;
    }
`

const swell = keyframes`
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
`

const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #b8b0ed;
`

const Wave = styled.div`
  background: url(${waveSrc})
    repeat-x;
  position: absolute;
  top: -188px;
  width: 6400px;
  height: 198px;
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);

  &.wave:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      ${swell} 7s ease -1.25s infinite;
    opacity: 1;
  }
`

export default () => {
  return (
    <Ocean className='ocean'>
      <Wave className='wave'></Wave>
      <Wave className='wave'></Wave>
    </Ocean>
  )
}
