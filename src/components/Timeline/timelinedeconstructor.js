import React from "react"
import styled from "@emotion/styled"
import Info from "./content"
import Timeline from "./timeline"

const Background = styled.div`
  background: #121615;
`

const Container = styled.div`
  text-align: center;
  padding: 3% 6%;
  @media (min-width: 1800px) {
    padding: 3% 16%;
  }
  @media (min-width: 2200px) {
    padding: 3% 20%;
  }
`

const Sub = styled.div`
  max-width: 35em;
  margin: 0 auto;
  h3 {
    color: white;
    line-height: 1.5em;
    font-weight: 400;
  }
`
const Title = styled.h1`
  color: #3ac09a;
`

const Headline = styled.h2`
  text-align: center;
  font-size: 2em;
  padding: 2em 2em 0 2em;
  margin-bottom: 2em;
  line-height: 1.5em;
  color: white;
`

export default class TimelineDecon extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0, previous: 0 }
  }

  componentWillMount() {
    this.data = Info.map(info => {
      return {
        date: info.date,
        component: (
          <div className="timeline-container">
            <Title>{info.title}</Title>
            <Sub>
              <h3>{info.subtitle}</h3>
            </Sub>
          </div>
        ),
      }
    })
  }

  render() {
    return (
      <Background>
        <Container>
          <Headline>Timeline</Headline>
          <Timeline content={this.data} />
        </Container>
      </Background>
    )
  }
}
