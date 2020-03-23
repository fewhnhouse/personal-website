import { useEffect, useState } from 'react'

export const useTypeWriter = ({
  title,
  speed = 50,
}: {
  title: string
  speed?: number
}) => {
  const [titleIndex, setTitleIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (titleIndex < title.length) {
        setTitleIndex(titleIndex => titleIndex + 1)
      } else {
        clearInterval(interval)
      }
    }, speed)
    return () => {
      clearInterval(interval)
    }
  }, [title.length, titleIndex, speed])
  return title.substring(0, titleIndex)
}
