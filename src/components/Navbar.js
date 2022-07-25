import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <div classname="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/cv">CV</Link>
      </div>
    </nav>
  )
}
