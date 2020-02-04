import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';

export default function Navbar() {
  return(
      <nav className="navbar">
          <img src={logo} alt="city tours logo" />
          <ul className="nav-links">
              <li>
                  <a className="nav-link" href="/">Home</a>
              </li>
              <li>
                  <a className="nav-link" href="/">About</a>
              </li>
              <li>
                  <a className="nav-link active" href="/">Tours</a>
              </li>
          </ul>
      </nav>
  )
}
