import React, { Component } from "react";
import "./Header.css";
import Logo from "./Logo";

export class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light sticky-top padding">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {" "}
            <Logo />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <div className="navbar-toggler-icon"></div>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About_Me">
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
