import React, { useState, useEffect } from 'react'

export const useHover = (ref: React.MutableRefObject<any>) => {
  const [value, setValue] = useState(false)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [ref] // Recall only if ref changes
  )

  return value
}
