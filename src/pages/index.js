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
import Container from "../components/Container/containerfaq"
import Footer from "../components/Footer/footer"

const Spacer = styled.div`
  padding: 2em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="ELOOP ONE Token" />
    <Header />
    <Container>
      <Why />
      <Spacer />
      <What />
    </Container>
    <Dashboard />
    <Timeline />
    <Team />
    <Container>
      <Footer />
    </Container>
  </Layout>
)

export default IndexPage
