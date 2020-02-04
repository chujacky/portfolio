import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-item">About</Link>
        <Link className="navbar-item">Projects</Link>
        <Link className="navbar-item">Experience</Link>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
