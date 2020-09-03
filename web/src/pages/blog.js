import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const posts = data.allSanityBlogPost.nodes.map(post => (
    <div>
      <h2>{post.title}</h2>
    </div>
  ))
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Recent Updates</h1>
      {posts}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityBlogPost {
      nodes {
        title
        author {
          name
        }
        subtitle
      }
    }
  }
`

export default Blog
