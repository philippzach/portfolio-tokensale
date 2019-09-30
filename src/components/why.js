import React from "react"
import styled from "@emotion/styled"
import Icon1 from "../images/icon1.svg"
import Icon2 from "../images/icon2.svg"
import Icon3 from "../images/icon3.svg"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 619px) {
    grid-template-columns: 1fr;
    padding: 0 2em;
  }
`
const Box = styled.div`
  text-align: center;
  padding: 1.5em;
`
const Headline = styled.h3`
  text-align: center;
  padding: 2em 2em 0 2em;
  margin-bottom: 2em;
  line-height: 1.5em;
`
const Heading = styled.h4`
  margin-top: 0.75em;
`
const Paragraph = styled.p`
  max-width: 21em;
  margin: 0 auto;
`

const Why = () => (
  <>
    <Headline>Warum sollte ich den Token kaufen?</Headline>
    <Grid>
      <Box>
        <img src={Icon1} />
        <Heading>Verdiene Geld mit jeder Fahrt</Heading>
        <Paragraph>
          Wenn die Eloop-Autos Umsätze erzielen, bekommst du deinen Anteil.
        </Paragraph>
      </Box>
      <Box>
        <img src={Icon2} />
        <Heading>Flexibler Cashout</Heading>
        <Paragraph>
          Du kannst dir deine Erträge in Euro ausbezahlen lassen oder sie in
          Fahrtguthaben umwandeln.
        </Paragraph>
      </Box>
      <Box>
        <img src={Icon3} />
        <Heading>Schützt die Umwelt</Heading>
        <Paragraph>
          Die verwendeten Autos sind reine E-Autos und geladen wird zu 100% mit
          Ökostrom.
        </Paragraph>
      </Box>
    </Grid>
  </>
)

export default Why
