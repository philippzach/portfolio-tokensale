import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Why from "../components/why"
import What from "../components/what"
import Dashboard from "../components/dashboard"
import Timeline from "../components/timeline"
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

const IndexPage = () => (
  <Layout>
    <SEO title="ELOOP ONE Token" />
    <Header />
    <Container>
      <Why />
      <Spacer />
      <What />
      <Ablauf />
    </Container>
    <Dashboard />
    <Container>
      <Timeline />
    </Container>
    <Team />
    <Container>
      <Footer />
    </Container>
  </Layout>
)

export default IndexPage
