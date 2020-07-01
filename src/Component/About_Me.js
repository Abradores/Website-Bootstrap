import React, { Component, Fragment } from "react";
import Header from "../Component/Header";
import Contracts from "../Component/Contacts";
import Footer from "../Component/Footer";
import "./About_Me.css";

export class About_Me extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <p className="plsfix">About me</p>
        <Contracts />
        <Footer />
      </Fragment>
    );
  }
}

export default About_Me;
