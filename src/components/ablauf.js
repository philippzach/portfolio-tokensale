import React, { Component } from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Sofia from "../images/sofia-eloop.jpg"
import One from "../images/1.svg"
import Two from "../images/2.svg"
import Three from "../images/3.svg"
import Umsatz from "../images/umsatz.svg"
import Bg from "../images/bg-ablauf.png"
import Bc1 from "../images/bc-1.svg"
import Bc2 from "../images/bc-2.svg"
import Bc3 from "../images/bc-3.svg"
import Bc4 from "../images/bc-4.svg"

const Flex = styled.div`
  display: flex;
  position: relative;
`

const Section = styled.section`
  background-image: url(${Bg});
  background-position: bottom;
  background-repeat: no-repeat;
  z-index: 100;
`

const FiftyImg = styled.div`
  width: 50%;
`
const FiftyText = styled.div`
  width: 50%;
  background-color: #272930;
  z-index: -1;
`

const Headline = styled.h2`
  position: absolute;
  text-transform: uppercase;
  left: 50%;
  top: 1.45em;
  transform: translate(-50%, 0);
  text-align: center;
  font-size: 2.2em;
  line-height: 1.5em;
  color: white;
`
const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    z-index: 10;
  }
`
const ContentContainer = styled.div`
  padding-left: 5em;
  p {
    color: white;
    max-width: 320px;
    font-weight: 200;
  }
`

const Span = styled.div`
  background-color: #3c354c;
  text-transform: uppercase;
  height: 50px;
  color: white;
  width: calc(100% + 32px);
  display: flex;
  align-items: center;
  transform: translateX(-32px);
  padding-left: 50px;
  z-index: 0;
`
const Icon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  padding: 0.45em 0;
  img {
    padding-right: 1em;
  }
`
const BottomSpan = styled.span`
  color: white;
  font-size: 1.2em;
`
const Con = styled.div`
  padding-top: 8em;
`

class ablauf extends Component {
  render() {
    return (
      <Section>
        <Flex>
          <Headline>Ablauf</Headline>
          <FiftyImg>
            <Img
              fluid={this.props.data.ablauf.childImageSharp.fluid}
              imgStyle={{ zIndex: -1 }}
            />
          </FiftyImg>
          <FiftyText>
            <Con>
              <NumberContainer>
                <img src={One} />
                <Span>Umsatz</Span>
              </NumberContainer>
              <ContentContainer>
                <img src={Umsatz} />
                <p>
                  Die Umsätze der tokenisierten Autos werden in der Blockchain
                  gespeichert.
                </p>
              </ContentContainer>
              <NumberContainer>
                <img src={Two} />
                <Span>Abzug der Kosten</Span>
              </NumberContainer>
              <ContentContainer>
                <Icon>
                  <img src={Bc1} />
                  <span>Servicekosten</span>
                </Icon>
                <Icon>
                  <img src={Bc2} />
                  <span>Ladekosten</span>
                </Icon>
                <Icon>
                  <img src={Bc3} />
                  <span>Leasing</span>
                </Icon>
                <Icon>
                  <img src={Bc4} />
                  <span>Versicherung</span>
                </Icon>
              </ContentContainer>
              <NumberContainer>
                <img src={Three} />
                <Span>Aufteilung des Gewinns</Span>
              </NumberContainer>
              <ContentContainer>
                <BottomSpan>Token Holder</BottomSpan>
                <p style={{ fontWeight: "200" }}>
                  Die Aufteilung auf die Holder erfolgt automatisiert und kann
                  im Dashboard eigesehen werden.
                </p>
                <BottomSpan>Eloop</BottomSpan>
                <p style={{ fontWeight: "200" }}>
                  Eloop verwendet die Erträge dazu, den Security Token
                  europaweit handelbar zu machen.
                </p>
              </ContentContainer>
            </Con>
          </FiftyText>
        </Flex>
      </Section>
    )
  }
}

export default ablauf
