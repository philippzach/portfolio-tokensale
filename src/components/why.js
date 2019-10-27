import React from "react"
import styled from "@emotion/styled"
import Icon1 from "../images/icon1.svg"
import Icon2 from "../images/icon2.svg"
import Icon3 from "../images/icon3.svg"
import Bg from "../images/bg-why1.jpg"

const Background = styled.div`
  background-image: url(${Bg});
`
const Container = styled.div`
  max-width: 1030px;
  margin: 0 auto;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 5em;
  @media (max-width: 619px) {
    grid-template-columns: 1fr;
    padding: 0 2em;
  }
`
const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1.5em;
  img {
    padding-bottom: 0.85em;
  }
`
const Headline = styled.h2`
  text-align: center;
  font-size: 2em;
  padding: 2em 2em 0 2em;
  margin-bottom: 2em;
  line-height: 1.5em;
  color: white;
`
const Heading = styled.h4`
  margin-top: 0.75em;
  color: white;
`
const Paragraph = styled.p`
  max-width: 21em;
  margin: 0 auto;
  color: white;
  font-weight: 200;
`

const Why = () => (
  <Background>
    <Container>
      <Headline>Warum sollte ich den Token kaufen?</Headline>
      <Grid>
        <Box>
          <img src={Icon1} />
          <svg
            width="7"
            height="98"
            viewBox="0 0 7 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="97" stroke="#39BE92" />
            <circle cx="3.5" cy="94.5" r="3.5" fill="#39BE92" />
          </svg>
          <Heading>Verdiene Geld mit jeder Fahrt</Heading>
          <Paragraph>
            Wenn die Eloop-Autos Umsätze erzielen, bekommst du deinen Anteil.
          </Paragraph>
        </Box>
        <Box>
          <img src={Icon2} />
          <svg
            width="7"
            height="98"
            viewBox="0 0 7 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="97" stroke="#39BE92" />
            <circle cx="3.5" cy="94.5" r="3.5" fill="#39BE92" />
          </svg>
          <Heading>Flexibler Cashout</Heading>
          <Paragraph>
            Du kannst dir deine Erträge in Euro ausbezahlen lassen oder sie in
            Fahrtguthaben umwandeln.
          </Paragraph>
        </Box>
        <Box>
          <img src={Icon3} />
          <svg
            width="7"
            height="98"
            viewBox="0 0 7 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="97" stroke="#39BE92" />
            <circle cx="3.5" cy="94.5" r="3.5" fill="#39BE92" />
          </svg>
          <Heading>Schützt die Umwelt</Heading>
          <Paragraph>
            Die verwendeten Autos sind reine E-Autos und geladen wird zu 100%
            mit Ökostrom.
          </Paragraph>
        </Box>
      </Grid>
    </Container>
  </Background>
)

export default Why
