import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Nav/Navbar'
import { FlexParent } from '@fe.whnhouse/flex.box/build/Flex'
import { Card } from 'antd'
import { useSpring, animated } from 'react-spring'
import ProjectCard from './ProjectCard'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import styled from 'styled-components'

const Container = styled(FlexParent)`
  width: 100%;
  padding-top: 60;
  height: 100vh;
  overflow: hidden;
  background: rgb(72, 52, 212);
`
const REPOSITORIES = gql`
  {
    viewer {
      repositories(first: 15, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          name
          description
          url
          issues(states: OPEN) {
            totalCount
          }
        }
      }
    }
  }
`

interface IRepository {
  name: string
  description: string
  url: string
  issues: {
    totalCount: number
  }
}

interface IQueryData {
  viewer: {
    repositories: {
      nodes: IRepository[]
    }
  }
}

export default () => {
  const [direction, setDirection] = useState(false)
  const { loading, error, data } = useQuery<IQueryData>(REPOSITORIES)

  const repositories = data?.viewer.repositories.nodes
  const firstRow = repositories?.filter((_, index) => index < 5) ?? []
  const secondRow =
    repositories?.filter((_, index) => index >= 5 && index < 10) ?? []
  const thirdRow = repositories?.filter((_, index) => index >= 10) ?? []
  useEffect(() => {
    setDirection(direction => !direction)
    const interval = setInterval(() => {
      setDirection(direction => !direction)
    }, 20000)
    return () => clearInterval(interval)
  }, [])

  const props = useSpring({
    transform: `translate(0px, ${direction ? 200 : -200}px)`,
    from: { transform: 'translate(0px, -200px)' },
    config: { mass: 10, tension: 5, friction: 140 },
  })

  const props2 = useSpring({
    transform: `translate(0px, ${direction ? -400 : 0}px)`,
    from: { transform: 'translate(0px, 0px)' },
    config: { mass: 10, tension: 5, friction: 140 },
  })

  return (
    <div>
      <Navbar opaque={true} />
      <Container justify='space-evenly'>
        <animated.div style={props}>
          <FlexParent direction='column'>
            {firstRow.map(repo => (
              <ProjectCard
                title={repo.name}
                description={repo.description}
                githubLink={repo.url}
                issues={repo.issues.totalCount}
              ></ProjectCard>
            ))}
          </FlexParent>
        </animated.div>
        <animated.div style={props2}>
          <FlexParent direction='column'>
            {secondRow.map(repo => (
              <ProjectCard
                title={repo.name}
                description={repo.description}
                githubLink={repo.url}
                issues={repo.issues.totalCount}
              ></ProjectCard>
            ))}
          </FlexParent>
        </animated.div>
        <animated.div style={props}>
          <FlexParent direction='column'>
            {thirdRow.map(repo => (
              <ProjectCard
                title={repo.name}
                description={repo.description}
                githubLink={repo.url}
                issues={repo.issues.totalCount}
              ></ProjectCard>
            ))}
          </FlexParent>
        </animated.div>
      </Container>
    </div>
  )
}
