import React, { Component } from "react";
import "./Jumbotron.css";

export class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid fix5">
          <div className="row jumbotron">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
              <p className="lead">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
                amet suscipit neque. Nam vestibulum condimentum dapibus.
                Pellentesque sed justo at quam egestas fringilla sit amet a dui.
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3  col-xl-2">
              <a href="App.js">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg"
                >
                  Button
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
