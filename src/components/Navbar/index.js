import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img alt="logo"/>
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/focus"
                className={window.location.pathname === "/focus" ? "nav-link active" : "nav-link"}
              >
                FOCUS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
              >
                RESUME
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar;