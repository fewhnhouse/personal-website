import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useHover } from './useHover'
import { Card, Button, Divider } from 'antd'
import { CardProps } from 'antd/lib/card'
import { FlexParent } from '@fe.whnhouse/flex.box/build/Flex'
import { GithubOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

interface IProjectCard {
  title: string
  githubLink: string
  description: string
  issues: number
}
export default ({ title, githubLink, description, issues }: IProjectCard) => {
  const [spring, set] = useSpring(() => ({
    transform: 'scale(1)',
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const ref = React.useRef(null)
  const isHovered = useHover(ref)

  set({ transform: isHovered ? `scale(1.05)` : `scale(1)` })

  return (
    <animated.div style={spring} ref={ref}>
      <Card hoverable style={{ width: 300, margin: 10 }} title={title}>
        {description}
        <Divider />
        <FlexParent>
          <Button
            href={githubLink}
            style={{ float: 'right' }}
            icon={<GithubOutlined />}
          >
            Github
          </Button>
        </FlexParent>
      </Card>
    </animated.div>
  )
}
