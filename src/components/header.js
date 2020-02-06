import React from "react"
import styled from "@emotion/styled"
import LPIcon from "../images/icon-header.svg"

import Logo2 from "../images/eloopone.svg"
import BgImage from "../images/bg-header1x.png"
import { css, jsx } from "@emotion/core"
import "../components/Buttons/main.css"

const Background = styled.div`
  background-color: #272930;
  background-image: url(${BgImage});

  display: flex;
  align-items: center;
  @media (min-width: 719px) {
    height: 500px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  /* padding: 2% 6% 0% 6%;
  @media (min-width: 1800px) {
    padding: 0 16%;
  }
  @media (min-width: 2200px) {
    padding: 0 20%;
  } */
`

const FiftyLeft = styled.div`
  width: 50%;
  color: white;
  margin: auto 0;
  padding-left: 1.5em;
  @media (max-width: 719px) {
    width: 100%;
    background-color: #272930;
    padding-top: 1em;
  }
`
const FiftyRight = styled.div`
  width: 50%;
  margin: auto 0;
  @media (max-width: 719px) {
    display: none;
  }
`
const ImageSmall = styled.img`
  padding-right: 1.5em;
  padding-bottom: 1.5em;
  @media (min-width: 720px) {
    display: none;
  }
`
const ImageBig = styled.img``

const ButtonContainer = styled.div`
  margin: 2em 0;
`
const Headline = styled.h1`
  font-weight: 200;
  font-size: 1.3em;
  padding-top: 1.45em;
`
const SubHeading = styled.h2`
  font-weight: 200;
  font-size: 1em;
  line-height: 1.3em;
`
const MobileCenter = styled.div`
  @media (max-width: 719px) {
    text-align: center;
    padding-bottom: 2em;
  }
`
const Container = styled.div`
  max-width: 1030px;
  margin: 0 auto;
`

const Header = () => (
  <header style={{ width: "100%" }}>
    <Background>
      <Container>
        <FlexContainer>
          <FiftyLeft>
            <img
              src={Logo2}
              alt=""
              style={{ paddingRight: "10px", maxWidth: "350px" }}
            />
            <Headline>Ein Token für grüne Mobilität in deiner Stadt</Headline>
            <ImageSmall src={LPIcon} />
            <SubHeading>
              Der Eloop One ist der erste Token weltweit, mitdem du dich an
              einer E-Carsharing-Flotte beteiligen kannst und an den
              Fahrtumsätzen mitverdienst.
            </SubHeading>
            <MobileCenter>
              <ButtonContainer>
                <a
                  style={{ marginRight: "1.5em" }}
                  className="mainbutton"
                  href="/"
                >
                  Token kaufen
                </a>
                <a className="secondary" href="/documents">
                  Whitepaper
                </a>
              </ButtonContainer>
            </MobileCenter>
          </FiftyLeft>
          <FiftyRight>
            <ImageBig src={LPIcon} />
          </FiftyRight>
        </FlexContainer>
      </Container>
    </Background>
  </header>
)

export default Header
