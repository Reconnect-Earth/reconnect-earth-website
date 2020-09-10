import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="bg-primary mb-4 flex">
    <nav className="flex w-full items-baseline ml-24 mr-24" role="navigation">
      <Link
        id="site-title"
        to="/"
        className="text-accent p-4 text-4xl whitespace-no-wrap"
      >
        {siteTitle}
      </Link>
      <ul className="flex justify-end w-full">
        {menuLinks.map(link => (
          <li className="p-4" key={link.name}>
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
