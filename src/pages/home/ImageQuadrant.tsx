import React from 'react'
import styled from 'styled-components'
import { FlexParent } from '@fe.whnhouse/flex.box/build/Flex'
import Image from '../../components/Image'
import logo from '../../assets/logo.svg'

const PaddedImage = styled(Image)`
  margin: 5px;
`

export default () => {
  return (
    <FlexParent direction='column'>
      <FlexParent direction='row'>
        <PaddedImage height={120} width={120} url={logo} />
        <PaddedImage height={120} width={120} url={logo} />
      </FlexParent>
      <FlexParent direction='row'>
        <PaddedImage height={120} width={120} url={logo} />
        <PaddedImage height={120} width={120} url={logo} />
      </FlexParent>
    </FlexParent>
  )
}
