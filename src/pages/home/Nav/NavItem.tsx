import React from 'react'
import styled from 'styled-components'

const Item = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  margin: 0 10px;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 0px;
    height: 2px;
    margin: 5px 0 0;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background-color: black;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }

  &:hover {
    cursor: pointer;
    &:before,
    &:after {
      opacity: 1;
      width: 50%;
    }
  }
`

export default ({ title, to }: { title: string; to: string }) => {
  return <Item>{title}</Item>
}
