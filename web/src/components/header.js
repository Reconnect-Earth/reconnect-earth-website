import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="bg-primary mb-5 flex">
    <nav className="flex">
      <h1>
        <Link
          id="site-title"
          to="/"
          className="text-accent text-3xl whitespace-no-wrap p-4"
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="flex flex-wrap items-end mb-3">
        {menuLinks.map(link => (
          <li
            className="list-none pr-4 pl-4 whitespace-no-wrap"
            key={link.name}
          >
            <Link
              id="menu-link"
              className="text-accent text-2xl"
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
