import React from "react"
import styled from "@emotion/styled"
import styles from "../Modules/buttontarife.module.css"

import "./index.css"

import { Link } from "gatsby"
import Countdown from "react-countdown-now"
//import Container from "../Container/container"
import "react-step-progress-bar/styles.css"
import { ProgressBar, Step } from "react-step-progress-bar"

const Timer = styled.div`
  font-weight: bold;
  color: black;

  @media (max-width: 700px) {
    font-size: 2em;
  }
  @media (min-width: 700px) {
    font-size: 2.5em;
  }
`
const Units = styled.span`
  font-size: 0.25em;
  text-transform: uppercase;
  color: black;
  padding-top: 0.25em;
  font-weight: 100;
`
const UnitsCount = styled.span``
const UnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0.5em;
`
const NumberContainer = styled.div`
  padding: 0.5em 0.25em 0.2em 0.25em;
  background-color: white;
  border: white solid 1px;
  border-radius: 4px;
`
const ItemContainer = styled.div`
  color: white;
`
const CountdownContainer = styled.div`
  display: flex;
  @media (max-width: 619px) {
    justify-content: center;
  }
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
          <NumberContainer>
            <UnitsCount>{days}</UnitsCount>
          </NumberContainer>
          <ItemContainer>
            <Units>Days</Units>
          </ItemContainer>
        </UnitContainer>
        <UnitContainer>
          <NumberContainer>
            <UnitsCount>{hours}</UnitsCount>
          </NumberContainer>
          <ItemContainer>
            <Units>Hours</Units>
          </ItemContainer>
        </UnitContainer>
        <UnitContainer>
          <NumberContainer>
            <UnitsCount>{minutes}</UnitsCount>
          </NumberContainer>
          <ItemContainer>
            <Units>Minutes</Units>
          </ItemContainer>
        </UnitContainer>
        <UnitContainer>
          <NumberContainer>
            <UnitsCount>{seconds}</UnitsCount>
          </NumberContainer>
          <ItemContainer>
            <Units>Seconds</Units>
          </ItemContainer>
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
    <Timer>
      <Countdown date={SetCountdown()} renderer={renderer} />
    </Timer>
  </section>
)

export default CountdownSection
