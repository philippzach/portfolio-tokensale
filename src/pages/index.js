import React from "react"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Why from "../components/why"
import What from "../components/what"
import Dashboard from "../components/dashboard"
import Timeline from "../components/timeline"
import Team from "../components/team"
import Container from "../components/Container/containerfaq"
import Footer from "../components/Footer/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="ELOOP ONE Token" />
    <Container>
      <Why />
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
