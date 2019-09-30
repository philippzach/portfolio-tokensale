import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Heading = styled.h1`
  text-align: center;
  margin-top: 2em;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4em;
  padding: 0 2em;
  @media (max-width: 900px) {
    padding: 3em 3em;
    grid-row-gap: 4em;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`
const SubHeading = styled.h2`
  text-align: center;
`

const Card = styled.div`
  box-shadow: 0 0.5rem 1.25rem 0 rgba(39, 48, 54, 0.2);
  font-weight: bold;
  text-shadow: rgba(0, 0, 0, 0.3) 0 1px 2px;
  &:hover {
    box-shadow: 0 1rem 2.5rem 0 rgba(39, 48, 54, 0.25);
    transform: translateY(-0.125rem);
  }
`

class documents extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Heading>Dokumente als Download</Heading>
          <Grid>
            <Card>
              <svg
                className="documents"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                style={{ enableBackground: "new 0 0 60 60" }}
              >
                <g>
                  <path d="M45,25H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,25,45,25z" />
                  <path d="M20,19h10c0.552,0,1-0.447,1-1s-0.448-1-1-1H20c-0.552,0-1,0.447-1,1S19.448,19,20,19z" />
                  <path d="M45,33H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,33,45,33z" />
                  <path d="M45,41H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,41,45,41z" />
                  <path d="M45,49H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,49,45,49z" />
                  <path
                    d="M49,14.586V0H6v55h5v5h43V19.586L49,14.586z M40,8.414l9,9L50.586,19H40V8.414z M8,53V2h39v10.586L39.414,5H11v48H8z
		 M13,58v-3V7h25v14h14v37H13z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <SubHeading>Jahresabschluss</SubHeading>
            </Card>
            <Card>
              <svg
                className="documents"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                style={{ enableBackground: "new 0 0 60 60" }}
              >
                <g>
                  <path d="M42.5,22h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,22,42.5,22z" />
                  <path d="M17.5,16h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S16.948,16,17.5,16z" />
                  <path d="M42.5,30h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,30,42.5,30z" />
                  <path d="M42.5,38h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,38,42.5,38z" />
                  <path d="M42.5,46h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,46,42.5,46z" />
                  <path d="M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z" />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <SubHeading>Infoblatt</SubHeading>
            </Card>
            <Card>
              <svg
                className="documents"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                style={{ enableBackground: "new 0 0 60 60" }}
              >
                <g>
                  <path d="M45,25H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,25,45,25z" />
                  <path d="M20,19h10c0.552,0,1-0.447,1-1s-0.448-1-1-1H20c-0.552,0-1,0.447-1,1S19.448,19,20,19z" />
                  <path d="M45,33H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,33,45,33z" />
                  <path d="M45,41H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,41,45,41z" />
                  <path d="M45,49H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,49,45,49z" />
                  <path
                    d="M49,14.586V0H6v55h5v5h43V19.586L49,14.586z M40,8.414l9,9L50.586,19H40V8.414z M8,53V2h39v10.586L39.414,5H11v48H8z
		 M13,58v-3V7h25v14h14v37H13z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>

              <SubHeading>Vertrag</SubHeading>
            </Card>
          </Grid>
        </Container>
      </Layout>
    )
  }
}

export default documents
