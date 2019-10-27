import React from "react"
import styled from "@emotion/styled"
import Icon4 from "../images/icon4.svg"
import Icon5 from "../images/icon5.svg"

const Container = styled.div`
  max-width: 1030px;
  margin: 0 auto;
`

const Background = styled.div`
  background-color: #121615;
`

const Headline = styled.h2`
  text-align: center;
  font-size: 2em;
  line-height: 1.5em;
  padding-top: 2em;
  margin-bottom: 2em;
  color: white;
`
const Section = styled.div`
  display: flex;
`
const FiftyLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 619px) {
    width: 100%;
    padding: 0 2em;
  }
  h4,
  p {
    color: white;
  }
  p {
    font-weight: 200;
  }
`
const FiftyRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 619px) {
    display: none;
  }
`
const FirstFiftyLeft = styled.div`
  width: 50%;
  padding-right: 4em;
  @media (max-width: 619px) {
    display: none;
  }
`
const FirstFiftyRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 619px) {
    width: 100%;
    padding: 0 2em;
  }
  h4,
  p {
    color: white;
  }
  p {
    font-weight: 200;
  }
`
const ImageSmall = styled.img`
  padding-right: 1.5em;
  padding-bottom: 1.5em;
  @media (min-width: 620px) {
    display: none;
  }
`
const Spacer = styled.div`
  padding: 2em;
`

const What = () => (
  <Background>
    <Container>
      <Headline>Was macht den Token besonders?</Headline>
      <Section>
        <FirstFiftyLeft>
          <img src={Icon4} />
        </FirstFiftyLeft>
        <FirstFiftyRight>
          <h4>Echtes Sharing</h4>
          <p style={{ paddingBottom: "1em" }}>
            Viele Carsharing-Anbieter sind nicht mehr als eine app-basierte
            Autovermietung. Mit dem Eloop One kann sich jeder in die
            Wertschöpfungskette einreihen und finanziell davon profitieren.
          </p>
          <ImageSmall src={Icon4} />
          <h4>Asset Tokenization</h4>
          <p>
            Für den Eloop One wurde ein bestehendes Asset, nämlich ein Teil
            unserer E-Carsharing-Flotte, tokenisiert. Die Autos sind seit
            01.08.19 in Wien im Einsatz und erzielen laufend Umsätze. Dadurch
            ergibt sich eine einzigartige Form der Beteiligung.
          </p>
        </FirstFiftyRight>
      </Section>
      <Spacer />
      <Section style={{ paddingBottom: "4em" }}>
        <FiftyLeft>
          <h4>Trage zum Wachstum bei!</h4>
          <p>
            Jeder verkaufte Token dient dazu, die Flotte zu vergrößern. Dank der
            Netzwerk-Effekte beim Carsharing, trägt jedes weitere Auto dazu bei,
            den Umsatz jedes einzelnen Autos zu erhöhen. Außderm lässt sich
            somit eine flächendeckende Verfügbarkeit gewährleisten.
          </p>
          <ImageSmall src={Icon5} />
          <p>
            Die Bevökerung bestimmt somit durch die Nachfrage die Flottengröße.
            Das ist weltweit die erste Bürgerbeteiligung dieser Art im
            Mobilitätssektor.
          </p>
        </FiftyLeft>
        <FiftyRight>
          <img src={Icon5} />
        </FiftyRight>
      </Section>
    </Container>
  </Background>
)

export default What
