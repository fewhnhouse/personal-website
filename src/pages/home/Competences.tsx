import React from 'react'
import { js, ts, node, react, graphql, docker } from '../../assets/competences'
import { Divider, Typography, Card } from 'antd'
import { ContentContainer, Header } from './Home'
import { FlexParent } from '@fe.whnhouse/flex.box'
import styled from 'styled-components'

const { Meta } = Card

const CompetenceCard = styled(Card)`
  margin: 10px;
  width: 300px;
  min-width: 300px;
`

export default () => {
  return (
    <ContentContainer style={{ paddingBottom: 100 }}>
      <Header>My Core Competences</Header>
      <Divider />
      <FlexParent style={{ width: '100%' }} justify='space-around' wrap='wrap'>
        <CompetenceCard hoverable cover={<img alt='JavaScript' src={js} />}>
          <Meta
            title='JavaScript'
            description='I started out developing in JavaScript shortly after I began studying in 2013. I immediately fell in love with the easy-to-understand syntax which lets you prototype really quickly and also had fun exploring all the quirks and weirdness this language offers. I still use native JS from time to time for smaller projects or community projects.'
          />
        </CompetenceCard>
        <CompetenceCard hoverable cover={<img alt='TypeScript' src={ts} />}>
          <Meta
            title='TypeScript'
            description='I discovered TypeScript after working with JavaScript and Angular.JS for nearly a year. I had just made my way into the React World when I learned about TypeScript. At start, it blew my mind. The type-safety it adds meant a much more secure and confident development process for me and helped me writing consistent, readable and maintainable applications on a larger scale.'
          />
        </CompetenceCard>
        <CompetenceCard hoverable cover={<img alt='React' src={react} />}>
          <Meta
            title='React'
            description='While I have experience in several different UI Frameworks (Svelte, Angular, Vue to name a few), React is still my favorite. I love its syntax and the possibility to write functional-style code which is easily understandable and readable.'
          />
        </CompetenceCard>
      </FlexParent>
      <Divider />
      <FlexParent style={{ width: '100%' }} justify='space-around' wrap='wrap'>
        <CompetenceCard hoverable cover={<img alt='Node.JS' src={node} />}>
          <Meta
            title='Node.JS'
            description='Node.JS is the basis for almost all my backend related issues! I have built many different APIs running on top of Node.JS and Express and love the possibility to use JavaScript (or even TypeScript) as language for both frontend and backend.'
          />
        </CompetenceCard>
        <CompetenceCard hoverable cover={<img alt='GraphQL' src={graphql} />}>
          <Meta
            title='GraphQL'
            description='While I have developed many REST APIs in the past, GraphQL is my go-to API structure for almost all new projects I create. The way it is designed fits the declarative nature of frontend data querying perfectly and makes working with the API a breeze.'
          />
        </CompetenceCard>
        <CompetenceCard hoverable cover={<img alt='Docker' src={docker} />}>
          <Meta
            title='Docker'
            description='Docker has revolutionized the deployment of applications. Especially for staging and testing environments, being able to test an application in an isolated container is invaluable. Docker´s API is simple to use and deploying an Application to a Docker container is simple, yet powerful and comes with so many benefits!'
          />
        </CompetenceCard>
      </FlexParent>
      <Divider />
      <Header>Some more Competences</Header>
      <Typography.Text style={{ textAlign: 'justify', marginBottom: 20 }}>
        While I mostly work on Web Applications, I also have experience with
        React Native or Electron to create native Applications. Additionally, I
        have 2 years of experience with Swift (and lately, SwiftUI) and the
        development of native iOS applications. I have worked with both NoSQL
        and SQL databases and also have experience with building real-time
        applications using sockets. I have quite some experience regarding UI /
        UX design and use Design-Tools such as InVision or Figma to create
        Prototypes for private projects myself. While I am not a fully educated
        designer, I think of myself as someone who has an eye for good design
        and I value it highly. Additionally, I have experience with deploying
        applications on self-hosted clusters, as I am running my own server
        where I have deployed several applications over the course of years.
        Last but not least, I have experience with a multitude of different
        packages in the JavaScript ecosystem and know solutions for many complex
        problems, both in the backend and the frontend.
      </Typography.Text>
    </ContentContainer>
  )
}
