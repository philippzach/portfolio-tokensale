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
`
const Headline = styled.h3`
  text-align: center;
  padding: 2em 2em 0 2em;
`

const Why = () => (
  <>
    <Headline>Warum sollte ich den Token kaufen?</Headline>
    <Grid>
      <Box>
        <img src={Icon1} />
        <h4>Verdiene Geld mit jeder Fahrt</h4>
        <p>Wenn die Eloop-Autos Umsätze erzielen, bekommst du deinen Anteil.</p>
      </Box>
      <Box>
        <img src={Icon2} />
        <h4>Flexibler Cashout</h4>
        <p>
          Du kannst dir deine Erträge in Euro ausbezahlen lassen oder sie in
          Fahrtguthaben umwandeln.
        </p>
      </Box>
      <Box>
        <img src={Icon3} />
        <h4>Schützt die Umwelt</h4>
        <p>
          Die verwendeten Autos sind reine E-Autos und geladen wird zu 100% mit
          Ökostrom.
        </p>
      </Box>
    </Grid>
  </>
)

export default Why
