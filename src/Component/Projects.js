import React, { Component, Fragment } from "react";
import Header from "../Component/Header";
import Contracts from "../Component/Contacts";
import Footer from "../Component/Footer";

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json)
      .then(json => {
        this.setState({
          Loaded: true,
          items: json
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <p className="plsfix">Projects</p>
        <Contracts />
        <Footer />
      </Fragment>
    );
  }
}

export default Projects;
