import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'

const Footer = styled.footer`
  height: 100px;
  position: relative;
  bottom: 0;
  width: 100%;
  background: #2f3640;
  &:before {
    content: '';
    position: absolute;
    top: -60px;
    height: 60px;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom right, transparent 49%, #2f3640 50%);
  }
`
export default () => {
  return (
    <Footer>
      <Typography.Text
        style={{
          color: '#1890ff',
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
      >
        © Felix Wohnhaas 2019
      </Typography.Text>
    </Footer>
  )
}
