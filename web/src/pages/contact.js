import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>Contact Text</p>
    <ContactForm />
  </Layout>
)

export default Contact
