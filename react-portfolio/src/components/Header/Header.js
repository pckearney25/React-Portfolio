import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header>
    <div className="header-child">
      <Link to="/" className="home-link">
        <h1>Patrick Kearney</h1>
      </Link>
      <h5>Scientist, Entrepreneur, Web-Developer</h5>
    </div>
    <ul className="header-child">
      <li className="header-li">
        <Link to="/about" className="hvr-grow">
          About
        </Link>
      </li>
      <li className="header-li">
        <Link to="/portfolio" className="hvr-grow">
          Portfolio
        </Link>
      </li>
      <li className="header-li">
        <Link to="/blog" className="hvr-grow">
          Blog
        </Link>
      </li>
      <li className="header-li">
        <a href="#contact-container" className="hvr-grow">
          Contact
        </a>
      </li>
    </ul>
  </header>
);

export default Header;
