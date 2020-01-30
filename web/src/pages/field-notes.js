import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FieldNotes = () => (
  <Layout>
    <SEO title="Field Notes" />
    <h1>Field Notes</h1>
    <p>Field notes text</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FieldNotes