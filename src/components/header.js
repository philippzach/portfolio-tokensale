import React from "react"
import styled from "@emotion/styled"
import Countdown from "../components/Countdown/countdown"
import Line from "../images/line.svg"
import LPIcon from "../images/lpicon.svg"
import Payment from "../images/payment.svg"
import { css, jsx } from "@emotion/core"
import "../components/Buttons/main.css"

const Background = styled.div`
  background-color: #4adeb5;
`
const FlexContainer = styled.div`
  display: flex;
  /* padding: 2% 6% 0% 6%;
  @media (min-width: 1800px) {
    padding: 0 16%;
  }
  @media (min-width: 2200px) {
    padding: 0 20%;
  } */
`
const BottomLine = styled.img`
  width: 100%;
  margin-top: -3px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`
const LightText = styled.span`
  font-weight: 200;
`
const FiftyLeft = styled.div`
  width: 50%;
  color: white;
  margin: auto 0;
  padding-left: 1.5em;
  @media (max-width: 719px) {
    width: 100%;
  }
`
const FiftyRight = styled.div`
  width: 50%;
  margin: auto 0;
  @media (max-width: 719px) {
    display: none;
  }
`
const ImageSmall = styled.img`
  padding-right: 1.5em;
  padding-bottom: 1.5em;
  @media (min-width: 720px) {
    display: none;
  }
`
const ImageBig = styled.img``
const Discount = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5em;
`
const ButtonContainer = styled.div`
  margin: 2em 0;
`
const Headline = styled.h1`
  padding-top: 1em;
  padding-right: 1.5em;
`
const SubHeading = styled.h2`
  padding-right: 1.5em;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3em;
`
const MobileCenter = styled.div`
  @media (max-width: 719px) {
    text-align: center;
    padding-bottom: 2em;
  }
`
const Container = styled.div`
  max-width: 1030px;
  margin: 0 auto;
`

const Header = () => (
  <header style={{ width: "100%" }}>
    <Background>
      <Container>
        <FlexContainer>
          <FiftyLeft>
            <Headline>
              <strong>Eloop One</strong> -{" "}
              <LightText>
                Ein Token für grüne Mobilität in deiner Stadt
              </LightText>
            </Headline>
            <ImageSmall src={LPIcon} />
            <SubHeading>
              Der Eloop One ist der erste Token weltweit, mitdem du dich an
              einer E-Carsharing-Flotte beteiligen kannst und an den
              Fahrtumsätzen mitverdienst.
            </SubHeading>
            <MobileCenter>
              <Discount>10% Discount sichern noch:</Discount>
              <Countdown />
              <ButtonContainer>
                <a
                  style={{ marginRight: "1.5em" }}
                  className="mainbutton"
                  href="/"
                >
                  Token kaufen
                </a>
                <a className="secondary" href="/documents">
                  Dokumente
                </a>
              </ButtonContainer>
              <img src={Payment} />
            </MobileCenter>
          </FiftyLeft>
          <FiftyRight>
            <ImageBig src={LPIcon} />
          </FiftyRight>
        </FlexContainer>
      </Container>
    </Background>
    <svg width="1450px" height="85px" viewBox="0 0 1450 85" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="header" fill="#4ADEB5" fill-rule="nonzero">
          <path
            d="M0,76.750271 C52.9108291,64.2002856 112.84091,57.9252929 179.790242,57.9252929 C280.214239,57.9252929 382.338475,76.4730388 503.171809,76.750271 C624.005142,76.4730388 739.653714,54.2740138 860.487048,63.7923173 C981.320381,73.6802638 1068.74014,73.6802638 1189.57347,63.7923173 C1270.12903,57.4467816 1356.93787,64.4386157 1450,84.7678197 L1450,0 L1389.58333,0 C1329.16667,0 1208.33333,0 1087.5,0 C966.666667,0 845.833333,0 725,0 C604.166667,0 483.333333,0 362.5,0 C241.666667,0 120.833333,0 60.4166667,0 L0,0 L0,76.750271 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  </header>
)

export default Header
