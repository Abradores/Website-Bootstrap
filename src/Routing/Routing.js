import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import Header from "../Component/Header.js";
// import Contacts from "../Component/Contacts";
// import Footer from "../Component/Footer.js";
// import Jumbotron from "../Component/Jumbotron.js";
// import Carousel from "../Component/Carousel.js";
// import Cards from "../Component/Cards.js";
// import Section1 from "../Component/Section1.js";
// import Section2 from "../Component/Section2.js";
import About_Me from "../Component/About_Me";
import Projects from "../Component/Projects.js"; //in react it knows it s a .js file so you dont have to add it.
import LandingPage from "../Component/LandingPage";

const RouterComponent = () => {
  return (
    <Router>
      {/* <Route path="/" component={Carousel} exact />{" "} */}
      {/* these components that actually arent pages dont actually need to be in this router */}
      {/* <Route path="/" component={Jumbotron} exact />
      <Route path="/" component={Section2} exact />
      <Route path="/" component={Section1} exact /> */}
      {/* <Route path="/" component={Cards} exact /> */}
      <Route path="/" component={LandingPage} exact />
      <Route path="/About_Me" component={About_Me} exact />
      <Route path="/Projects" component={Projects} exact />
    </Router>
  );
};

export default RouterComponent;
