import React from "react"
import styled from "@emotion/styled"
import Top from "../images/linetop.svg"
import Bottom from "../images/line.svg"
import Dash from "../images/dashboard.svg"

import Icon1 from "../images/dashicon1.svg"
import Icon2 from "../images/dashicon2.svg"
import Icon3 from "../images/dashicon3.svg"
import Icon4 from "../images/dashicon4.svg"

const LineTop = styled.img`
  margin-bottom: -8px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`
const LineBottom = styled.img`
  width: 100%;
  margin-top: -3px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`
const Container = styled.div`
  background-color: #4adeb5;
  padding: 0% 6%;
  @media (min-width: 1800px) {
    padding: 0 16%;
  }
  @media (min-width: 2200px) {
    padding: 0 20%;
  }
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
  @media (max-width: 619px) {
    width: 100%;
    padding: 0 2em;
  }
`
const Headline = styled.h3`
  text-align: center;
  padding: 2em 2em 1em 2em;
`
const TenPercent = styled.div`
  width: 15%;
`
const Ninety = styled.div`
  width: 85%;
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

const Dashboard = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 280"
      style={{ marginBottom: "-10px" }}
    >
      <path
        fill="#4adeb5"
        fill-opacity="1"
        d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,245.3C840,245,960,203,1080,197.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
    <Container>
      <Headline>Token Holder Dashboard</Headline>
      <Flex>
        <FiftyLeft>
          <img src={Dash} />
        </FiftyLeft>
        <FiftyRight>
          <p>
            Jeder Eloop One Holder hat Zugriff auf das Dashboard. Das Dashboard
            bietet völlige Transparenz und es dient als Steuerzentrale für eine
            Vielzahl an Aktivitäten.
          </p>
          <ImageSmall src={Dash} />
          <Flex>
            <TenPercent>
              <img src={Icon1} />
            </TenPercent>
            <Ninety>
              <p>
                <b>Token:</b> Hier findest du eine Übersicht zum Total Supply,
                zu den bereits verkauften Token & wie viel sich momentan in
                deinem Besitz befindet.
              </p>
            </Ninety>
          </Flex>
          <Flex>
            <TenPercent>
              <img src={Icon2} />
            </TenPercent>
            <Ninety>
              <p>
                <b>Revenue:</b> Du erhälst völligen Einblick über die Einnahmen
                und Kosten der tokenisierten Autos. Zudem siehst du wie viel du
                bereits verdient hast und deinen ROI.
              </p>
            </Ninety>
          </Flex>
          <Flex>
            <TenPercent>
              <img src={Icon3} />
            </TenPercent>
            <Ninety>
              <p>
                <b>Vehicles:</b> Checke aus welchen Fahrzeugen die tokenisierte
                Flotte derzeit besteht. Du kannst dort auch immer den Status der
                E-Autos überprüfen.
              </p>
            </Ninety>
          </Flex>
          <Flex>
            <TenPercent>
              <img src={Icon4} />
            </TenPercent>
            <Ninety>
              <p>
                <b>Trips:</b> Du findest eine Übersicht über jede einzelne Fahrt
                der Autos und siehst live, wie viel Umsatz durch diese Fahrten
                erzielt wurde.
              </p>
            </Ninety>
          </Flex>
        </FiftyRight>
      </Flex>
    </Container>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{ marginTop: "-2px" }}
    >
      <path
        fill="#4adeb5"
        fill-opacity="1"
        d="M0,128L60,133.3C120,139,240,149,360,154.7C480,160,600,160,720,144C840,128,960,96,1080,96C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  </>
)

export default Dashboard
