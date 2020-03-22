import React from 'react'
import styled from 'styled-components'
import { FlexParent } from '@fe.whnhouse/flex.box/build/Flex'
import Image from '../../components/Image'
import { felix1, felix2, felix3, felix4 } from '../../assets/images'

const PaddedImage = styled(Image)`
  margin: 5px;
`

export default () => {
  return (
    <FlexParent direction='column'>
      <FlexParent direction='row'>
        <PaddedImage height={120} width={120} url={felix1} />
        <PaddedImage height={120} width={120} url={felix2} />
      </FlexParent>
      <FlexParent direction='row'>
        <PaddedImage height={120} width={120} url={felix3} />
        <PaddedImage height={120} width={120} url={felix4} />
      </FlexParent>
    </FlexParent>
  )
}
