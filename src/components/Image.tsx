import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid black;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

interface IImageProps {
  url: string
  alt?: string
  height?: number
  width?: number
  className?: string
}
export default ({ url, alt, height = 64, width = 64, className }: IImageProps) => {
  return (
    <Image
      className={className}
      src={url}
      alt={alt}
      height={height}
      width={width}
    />
  )
}
