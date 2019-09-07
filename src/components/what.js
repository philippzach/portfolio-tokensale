import React from "react"
import styled from "@emotion/styled"
import Icon4 from "../images/icon4.svg"
import Icon5 from "../images/icon5.svg"

const Headline = styled.h3`
  text-align: center;
`
const Section = styled.div`
  display: flex;
`
const FiftyLeft = styled.div`
  width: 50%;
`
const FiftyRight = styled.div`
  width: 50%;
`

const What = () => (
  <>
    <Headline>Was macht den Token besonders?</Headline>
    <Section>
      <FiftyLeft>
        <img src={Icon4} />
      </FiftyLeft>
      <FiftyRight>
        <h4>Echtes Sharing</h4>
        <p>
          Viele Carsharing-Anbieter sind nicht mehr als eine app-basierte
          Autovermietung. Mit dem Eloop One kann sich jeder in die
          Wertschöpfungskette einreihen und finanziell davon profitieren.
        </p>
        <h4>Asset Tokenization</h4>
        <p>
          Für den Eloop One wurde ein bestehendes Asset, nämlich ein Teil
          unserer E-Carsharing-Flotte, tokenisiert. Die Autos sind seit 01.08.19
          in Wien im Einsatz und erzielen laufend Umsätze. Dadurch ergibt sich
          eine einzigartige Form der Beteiligung.
        </p>
      </FiftyRight>
    </Section>
    <Section>
      <FiftyLeft>
        <h4>Trage zum Wachstum bei</h4>
        <p>
          Jeder verkaufte Token dient dazu, die Flotte zu vergrößern. Dank der
          Netzwerk-Effekte beim Carsharing, trägt jedes weitere Auto dazu bei,
          den Umsatz jedes einzelnen Autos zu erhöhen. Außderm lässt sich somit
          eine flächendeckende Verfügbarkeit gewährleisten.
        </p>
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
  </>
)

export default What
