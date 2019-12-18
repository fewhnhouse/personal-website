import React, { useEffect, useState } from 'react'

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

  return (
    <h1 style={{ fontSize: 84, color: 'white', fontWeight: 'bold' }}>
      {items.filter((_, index) => index < titleIndex)}
    </h1>
  )
}
