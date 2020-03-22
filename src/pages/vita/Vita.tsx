import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import { Timeline, Card, Typography } from 'antd'
import styled from 'styled-components'
import { useTrail, animated } from 'react-spring'
import { js } from '../../assets/competences'

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  padding-top: 80px;
`
export default () => {
  const timelineItems = [
    {
      time: '2001-2005',
      description: 'Grundschule, Bernstadt',
      image: js,
    },
    {
      time: '2005-2007',
      description: 'Robert-Bosch-Gymnasium, Langenau',
      image: js,
    },
    {
      time: '2007-2009',
      description: 'Colegio Humboldt, Puebla, Mexiko',
      image: js,
    },
    {
      time: 'März 2009',
      description:
        'One Week of BOGY (Berufsorientierung an Gymnasien) at Rapp Architekten, Ulm',
      image: js,
    },
    {
      time: 'August 2011',
      description: 'Two Weeks of Holiday Work at Noerpel GmbH, Ulm',
      image: js,
    },
    {
      time: '2009-2013',
      description: 'Robert-Bosch-Gymnasium, Langenau',
      image: js,
    },
    {
      time: 'September 2013 - Dezember 2013',
      description: 'Internship at Autohaus Wohnhaas, Elchingen',
      image: js,
    },
    {
      time: 'März 2014 - August 2014',
      description:
        'Internship at Mecanomatic GTO, Apaseo el Grande, Guanajuato, Mexiko',
      image: js,
    },
    {
      time: 'März 2015 - März 2017',
      description:
        'Working Student at Gigatronik München GmbH, München',
      image: js,
    },
    {
      time: '2015-2018',
      description:
        'Bachelor Informatics: Games Engineering, Technischen Universität München',
      image: js,
    },
    {
      time: 'April 2017 - jetzt',
      description:
        'Working Student at Motius GmbH, München',
      image: js,
    },
    {
      time: '2018 - jetzt',
      description:
        'Master Media Informatics, Ludwig-Maximilians-Universität München',
      image: js,
    },
  ]
  const trail = useTrail(timelineItems.length, {
    opacity: 1,
    transform: 'translate(0px, 0px)',
    from: {
      opacity: 0,
      transform: 'translate(0px, -40px)',
    },
    config: { mass: 1, tension: 2000, friction: 300 },
  })

  return (
    <div style={{ background: 'white' }}>
      <Navbar opaque />
      <TimelineContainer>
        <Timeline mode='alternate'>
          {trail.map((props, index) => (
            <Timeline.Item
              label={
                <Typography.Text style={{ color: 'darkgrey' }}>
                  {timelineItems[index].time}
                </Typography.Text>
              }
            >
              <animated.div style={props}>
                <Card
                  hoverable
                  bodyStyle={{
                    padding: 0,
                    display: 'flex',
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  }}
                >
                  <img
                    src={timelineItems[index].image}
                    style={{ width: 100, height: 100 }}
                  />
                  <div style={{ padding: 10, width: 'calc(100% - 100px)' }}>
                    {timelineItems[index].description}
                  </div>
                </Card>
              </animated.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </TimelineContainer>
    </div>
  )
}
