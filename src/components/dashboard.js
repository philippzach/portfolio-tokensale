import React from "react"
import styled from "@emotion/styled"
import Top from "../images/linetop.svg"
import Bottom from "../images/line.svg"
import Dash from "../images/dashboard.svg"

import IconOne from "../images/icontokenone.svg"
import Icon1 from "../images/dashicon1.svg"
import Icon2 from "../images/dashicon2.svg"
import Icon3 from "../images/dashicon3.svg"
import Icon4 from "../images/dashicon4.svg"

import Bg from "../images/bg-ablauf.png"

const Background = styled.div`
  background-color: #272930;
  background-image: url(${Bg});
  background-position: bottom;
  background-repeat: no-repeat;
`
const Flex = styled.div`
  display: flex;
`
const FiftyLeft = styled.div`
  width: 50%;
  padding-right: 1em;
  @media (max-width: 619px) {
    display: none;
  }
`
const FiftyRight = styled.div`
  width: 50%;
  padding-left: 4em;
  @media (max-width: 619px) {
    width: 100%;
    padding: 0 2em;
  }
`
const Headline = styled.h3`
  text-align: center;
  font-size: 2em;
  padding: 2em 2em 0 2em;
  margin-bottom: 2em;
  line-height: 1.5em;
  color: white;
`
const TenPercent = styled.div`
  width: 15%;
`
const Ninety = styled.div`
  width: 85%;
  p {
    color: white;
    font-weight: 200;
    b {
      color: #4adeb5;
    }
  }
  @media (max-width: 619px) {
    padding-left: 0.9em;
  }
`
const ImageSmall = styled.img`
  padding-right: 1.5em;
  padding-bottom: 1.5em;
  @media (min-width: 620px) {
    display: none;
  }
`
const Container = styled.div`
  max-width: 1030px;
  margin: 0 auto;
  padding-bottom: 6em;
`

const Dashboard = () => (
  <>
    <Background>
      <Container>
        <Headline>Token Holder Dashboard</Headline>
        <Flex>
          <FiftyLeft>
            <img src={Dash} />
          </FiftyLeft>
          <FiftyRight>
            <Flex>
              <TenPercent>
                <img src={IconOne} />
              </TenPercent>
              <Ninety>
                <p>
                  <b>Jeder Eloop One Holder</b> hat Zugriff auf das Dashboard.
                  Das Dashboard bietet völlige Transparenz und es dient als
                  Steuerzentrale für eine Vielzahl an Aktivitäten.
                </p>
              </Ninety>
            </Flex>
            <ImageSmall src={Dash} />
            <Flex>
              <TenPercent>
                <img src={Icon1} />
              </TenPercent>
              <Ninety>
                <p>
                  <b>Tokens:</b> Hier findest du eine Übersicht zum Total
                  Supply, zu den bereits verkauften Token & wie viel sich
                  momentan in deinem Besitz befindet.
                </p>
              </Ninety>
            </Flex>
            <Flex>
              <TenPercent>
                <img src={Icon2} />
              </TenPercent>
              <Ninety>
                <p>
                  <b>Revenue:</b> Du erhälst völligen Einblick über die
                  Einnahmen und Kosten der tokenisierten Autos. Zudem siehst du
                  wie viel du bereits verdient hast und deinen ROI.
                </p>
              </Ninety>
            </Flex>
            <Flex>
              <TenPercent>
                <img src={Icon3} />
              </TenPercent>
              <Ninety>
                <p>
                  <b>Vehicle:</b> Checke aus welchen Fahrzeugen die tokenisierte
                  Flotte derzeit besteht. Du kannst dort auch immer den Status
                  der E-Autos überprüfen.
                </p>
              </Ninety>
            </Flex>
            <Flex>
              <TenPercent>
                <img src={Icon4} />
              </TenPercent>
              <Ninety>
                <p>
                  <b>Trips:</b> Du findest eine Übersicht über jede einzelne
                  Fahrt der Autos und siehst live, wie viel Umsatz durch diese
                  Fahrten erzielt wurde.
                </p>
              </Ninety>
            </Flex>
          </FiftyRight>
        </Flex>
      </Container>
    </Background>
  </>
)

export default Dashboard
