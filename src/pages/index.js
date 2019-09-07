import React from "react"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Why from "../components/why"
import What from "../components/what"
import Dashboard from "../components/dashboard"
import Timeline from "../components/timeline"
import Team from "../components/team"

const IndexPage = () => (
  <Layout>
    <SEO title="ELOOP ONE Token" />
    <Why />
    <What />
    <Dashboard />
    <Timeline />
    <Team />
  </Layout>
)

export default IndexPage
