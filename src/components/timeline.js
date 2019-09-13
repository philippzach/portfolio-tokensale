import React from "react"
import styled from "@emotion/styled"
import Time from "../images/timeline.svg"

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

const Timeline = () => (
  <Container>
    <img src={Time} />
  </Container>
)

export default Timeline
