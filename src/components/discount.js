import React, { Component } from "react"
import styled from "@emotion/styled"
import Countdown from "../components/Countdown/countdown"

const Background = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
`

const Discount = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2em;
  font-weight: 200;
  color: white;
  span {
    font-size: 1.8em;
  }
`

class discount extends Component {
  render() {
    return (
      <Background>
        <Discount>
          <span>10% Discount</span> sichern noch
        </Discount>
        <Countdown />
      </Background>
    )
  }
}

export default discount
