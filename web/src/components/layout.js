/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <div>
        <main>{children}</main>
      </div>
      <footer className="bg-primary text-accent text-center p-4">
        © {new Date().getFullYear()}
        {` `}
        <Link to="/" className="text-accent">
          Reconnect Earth
        </Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
