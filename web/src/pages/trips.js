import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Trips = () => (
  <Layout>
    <SEO title="Trips" />
    <h1>Trips</h1>
    <p>Trips text</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Trips