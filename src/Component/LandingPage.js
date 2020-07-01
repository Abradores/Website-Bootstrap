import React, { Component, Fragment } from "react";
// import { Row, Col } from "bootstrap";
import Header from "../Component/Header";
import Contracts from "../Component/Contacts";
import Footer from "../Component/Footer";
import Jumbotron from "../Component/Jumbotron.js";
import Carousel from "../Component/Carousel.js";
import Cards from "../Component/Cards.js";
import Section1 from "../Component/Section1.js";
import Section2 from "../Component/Section2.js";
import "./LandingPage.css";

export class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Carousel />
        <Section1 />
        <Jumbotron />
        <Section2 />
        <Cards />
        <Contracts />
        <Footer />
      </Fragment>
    );
  }
}

export default LandingPage;
