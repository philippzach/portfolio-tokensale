import React, { Component } from "react"
import styled from "@emotion/styled"
import Icon from "../images/ablauf-new.svg"

const Container = styled.div`
  text-align: center;
  padding-top: 4em;
`

class ablauf extends Component {
  render() {
    return (
      <Container>
        <img src={Icon} alt="" />
      </Container>
    )
  }
}

export default ablauf
