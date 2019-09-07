import React from "react"
import styled from "@emotion/styled"
import styles from "../Modules/buttontarife.module.css"

import "./index.css"

import { Link } from "gatsby"
import Countdown from "react-countdown-now"
import Container from "../Container/container"
import "react-step-progress-bar/styles.css"
import { ProgressBar, Step } from "react-step-progress-bar"

const Timer = styled.div`
  font-weight: bold;
  color: #373736;
  display: flex;
  justify-content: center;
  padding: 0.5em 0 0.5em;
  @media (max-width: 700px) {
    font-size: 2em;
  }
  @media (min-width: 700px) {
    font-size: 2.5em;
  }
`
const Units = styled.span`
  font-size: 0.5em;
  padding-top: 0.25em;
  font-weight: 100;
`
const UnitsCount = styled.span``
const UnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 0.5em;
`
const CountdownContainer = styled.div`
  display: flex;
`
// Completion component
const Completionist = () => (
  <span>The offer is over. Check back later for more!</span>
)

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <CountdownContainer>
        <UnitContainer>
          <UnitsCount>{days}</UnitsCount>
          <Units>Days</Units>
        </UnitContainer>
        <UnitContainer>
          <UnitsCount>{hours}</UnitsCount>
          <Units>Hours</Units>
        </UnitContainer>
        <UnitContainer>
          <UnitsCount>{minutes}</UnitsCount>
          <Units>Minutes</Units>
        </UnitContainer>
        <UnitContainer>
          <UnitsCount>{seconds}</UnitsCount>
          <Units>Seconds</Units>
        </UnitContainer>
      </CountdownContainer>
    )
  }
}
const SetCountdown = () => {
  var today = () => {
    if (new Date().getMonth() === 5) {
      return 5
    } else {
      return new Date().getDate()
    }
  }
  var daysPassed = today => {
    if (today < 23 && today > 14) return "2019-07-21T24:00:00"
    else if (today < 32 && today > 22) return "2019-07-31T24:00:00"
  }
  return "2019-12-12T24:00:00"
  //return daysPassed(today())
}

const CountdownSection = ({ button }) => (
  <section>
    <Container>
      <Timer>
        <Countdown date={SetCountdown()} renderer={renderer} />
      </Timer>
    </Container>
  </section>
)

export default CountdownSection
