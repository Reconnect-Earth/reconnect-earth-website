import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import header from './header.css'

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `rgba(36, 71, 71, 1)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <Link to="/" className="text-accent text-5xl">
          {siteTitle}
        </Link>
      </h1>
      <div>
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link className="text-accent" to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
