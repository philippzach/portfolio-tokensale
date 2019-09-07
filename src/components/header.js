import React from "react"
import styled from "@emotion/styled"
import Countdown from "../components/Countdown/countdown"
import Line from "../images/line.svg"
import LPIcon from "../images/lpicon.svg"

const Background = styled.div`
  background-color: #4adeb5;
  display: flex;
`
const BottomLine = styled.img`
  width: 100%;
  margin-top: -3px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`
const LightText = styled.span`
  font-weight: 100;
`
const FiftyLeft = styled.div`
  width: 50%;
`
const FiftyRight = styled.div`
  width: 50%;
`

const Header = () => (
  <header style={{ width: "100%" }}>
    <Background>
      <FiftyLeft>
        <h1>
          <strong>Eloop One</strong> -{" "}
          <LightText>Ein Token für grüne Mobilität in deiner Stadt</LightText>
        </h1>
        <h2>
          Der Eloop One ist der erste Token weltweit, mitdem du dich an einer
          E-Carsharing-Flotte beteiligen kannst und an den Fahrtumsätzen
          mitverdienst.
        </h2>
        <p>10% Discount sichern noch:</p>
        <Countdown />
        <button>Token kaufen</button>
        <button>Dokumente</button>
      </FiftyLeft>
      <FiftyRight>
        <img src={LPIcon} />
      </FiftyRight>
    </Background>
    <BottomLine src={Line} />
  </header>
)

export default Header
