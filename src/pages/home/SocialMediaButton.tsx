import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const ImageContainer = styled(Button)`
  width: 52px;
  height: 52px;
  font-size: 24px;
`

const SocialMediaButton = ({ type }: { type: React.ReactNode }) => {
  return <ImageContainer icon={type}></ImageContainer>
}

export default SocialMediaButton
