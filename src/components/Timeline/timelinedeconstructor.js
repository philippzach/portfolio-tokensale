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
            <h1>{info.title}</h1>
            <h2>{info.subtitle}</h2>
          </div>
        ),
      }
    })
  }

  render() {
    return (
      <Background>
        <Container>
          <Timeline content={this.data} />
        </Container>
      </Background>
    )
  }
}
