import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Discount from "../components/discount"
import Why from "../components/why"
import What from "../components/what"
import Dashboard from "../components/dashboard"
import Timeline from "../components/Timeline/timelinedeconstructor"
import Team from "../components/team"
import Ablauf from "../components/ablauf"

import Footer from "../components/Footer/footer"

const Spacer = styled.div`
  padding: 2em;
`
const Container = styled.div`
  max-width: 1030px;
  margin: 0 auto;
`
const Line = styled.div`
  border: 1px solid #4adeb5;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="ELOOP ONE Token" />
    <Header />
    <Discount />
    <Why />
    <What />
    <Ablauf data={data} />
    <Dashboard />

    <Timeline />

    <Team />
    <Line />
    <Footer />
  </Layout>
)

export default IndexPage

export const data = graphql`
  query {
    ablauf: file(relativePath: { eq: "sofia-eloop.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1050
          traceSVG: { background: "#49deb5", color: "#fff" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
