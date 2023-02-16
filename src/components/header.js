import React, { useState } from 'react'
import { Link } from "gatsby"

import Logo from "../images/Logo_PlusInForm.png"

const Header = ({ location }) => {
  const { pathname } = location;
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`nav-1 nav-light${toggle ? ' open-menu' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Link className="home-link" to="/">
              <img className="logo" src={Logo} alt="Logo" />
            </Link> 
            <ul className="menu">
              <li className={pathname === '/' ? 'active' : 'normal'}>
                <Link to="/">
                  Willkommen
                </Link>
              </li>
              <li className={`has-dropdown ${pathname.includes('/leistungen') ? 'active' : 'normal'}`}>
                <a href="#">Leistungen</a>
                <ul className="subnav">
                  <li className="normal">
                    <Link to="/leistungen/consulting/">Consulting</Link>
                  </li>
                  <li className="normal">
                    <Link to="/leistungen/existenzgruendung/">Existenzgründung</Link>
                  </li>
                  <li className="normal">
                    <Link to="/leistungen/controlling/">Controlling</Link>
                  </li>
                  <li className="normal">
                    <Link to="/leistungen/rechnungswesen/">Rechnungswesen</Link>
                  </li>
                  <li className="normal">
                    <Link to="/leistungen/lohn-und-gehalt/">Lohn und Gehalt</Link>
                  </li>
                  <li className="normal">
                    <Link to="/leistungen/buero-organisation/">Büro Organisation</Link>
                  </li>
                </ul>
              </li>
              <li className={pathname === '/team/' ? 'active' : 'normal'}>
                <Link to="/team/">Team</Link>
              </li>
              <li className={pathname === '/news/' ? 'active' : 'normal'}>
                <Link to="/news/">News</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="mobile-toggle" onClick={() => setToggle(!toggle)}>
        <div className="bar-1"></div>
        <div className="bar-2"></div>
      </button>
    </nav>
  );
}

export default Header
