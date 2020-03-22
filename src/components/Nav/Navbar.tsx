import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { FlexParent } from '@fe.whnhouse/flex.box'
import NavItem from './NavItem'

const Nav = styled(animated.nav)`
  width: 100%;
  position: fixed;
  z-index: 1000;
  height: 60px;
  box-shadow: ${(props: { opaque: boolean }) =>
    props.opaque ? '0px 2px 5px 0px rgba(0, 0, 0, 0.25)' : 'unset'};
  padding: ${props => props.theme.paddings.large};
`
export default ({ opaque }: { opaque: boolean }) => {
  const props = useSpring({
    background: opaque ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
  })
  return (
    <Nav opaque={opaque} style={props}>
      <FlexParent
        style={{ height: '100%', width: '100%' }}
        direction='row'
        justify='flex-start'
        align='center'
      >
        <NavItem to='/' title='Home' />
        <NavItem to='/vita' title='Vita' />
        <NavItem to='/projects' title='Projects' />
      </FlexParent>
    </Nav>
  )
}
