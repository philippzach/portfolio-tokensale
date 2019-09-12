import React from "react"
import styled from "@emotion/styled"
import Time from "../images/timeline.svg"

const Container = styled.div`
  padding: 2em;
`

const Timeline = () => (
  <Container>
    <img src={Time} />
  </Container>
)

export default Timeline
