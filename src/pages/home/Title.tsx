import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-size: 84px;
  color: white;
  font-weight: bold;
`
export default () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const items = '://fewhnhouse'.split('')

  useEffect(() => {
    const interval = setInterval(() => {
      if (titleIndex < items.length) {
        setTitleIndex(titleIndex => titleIndex + 1)
      }
    }, 50)
    return () => {
      clearInterval(interval)
    }
  }, [items.length, titleIndex])

  return <Header>{items.filter((_, index) => index < titleIndex)}</Header>
}
