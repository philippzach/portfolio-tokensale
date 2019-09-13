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
  display: flex;
  padding: 0% 6%;
  @media (min-width: 1800px) {
    padding: 0 16%;
  }
  @media (min-width: 2200px) {
    padding: 0 20%;
  }
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
  @media (max-width: 619px) {
    width: 100%;
  }
`
const FiftyRight = styled.div`
  width: 50%;
  margin: auto 0;
  @media (max-width: 619px) {
    display: none;
  }
`
const ImageSmall = styled.img`
  padding-right: 1.5em;
  padding-bottom: 1.5em;
  @media (min-width: 620px) {
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
`
const MobileCenter = styled.div`
  @media (max-width: 619px) {
    text-align: center;
    padding-bottom: 2em;
  }
`

const Header = () => (
  <header style={{ width: "100%" }}>
    <Background>
      <FiftyLeft>
        <Headline>
          <strong>Eloop One</strong> -{" "}
          <LightText>Ein Token für grüne Mobilität in deiner Stadt</LightText>
        </Headline>
        <ImageSmall src={LPIcon} />
        <SubHeading>
          Der Eloop One ist der erste Token weltweit, mitdem du dich an einer
          E-Carsharing-Flotte beteiligen kannst und an den Fahrtumsätzen
          mitverdienst.
        </SubHeading>
        <MobileCenter>
          <Discount>10% Discount sichern noch:</Discount>
          <Countdown />
          <ButtonContainer>
            <a style={{ marginRight: "1.5em" }} className="mainbutton" href="/">
              Token kaufen
            </a>
            <a className="secondary" href="/">
              Dokumente
            </a>
          </ButtonContainer>
          <img src={Payment} />
        </MobileCenter>
      </FiftyLeft>
      <FiftyRight>
        <ImageBig src={LPIcon} />
      </FiftyRight>
    </Background>
    <BottomLine src={Line} />
  </header>
)

export default Header
