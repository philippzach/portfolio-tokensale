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
`
const Flex = styled.div`
  display: flex;
`
const FiftyLeft = styled.div`
  width: 50%;
`
const FiftyRight = styled.div`
  width: 50%;
`
const Headline = styled.h3`
  text-align: center;
  margin-top: -9px;
`
const TenPercent = styled.div`
  width: 15%;
`
const Ninety = styled.div`
  width: 85%;
`

const Dashboard = () => (
  <>
    <LineTop src={Top} />
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
    <LineBottom src={Bottom} />
  </>
)

export default Dashboard
