import React, { Component } from "react";
import HTMLIcon from "../Images/html.png";
import CSSIcon from "../Images/Css.png";
import ReactIcon from "../Images/react.png";
import "./Section2.css";

export class Section2 extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid padding">
          <div className="row welcome text-center">
            <div className="col-12">
              <h1 className="display-4">Built with ease.</h1>
            </div>
            <hr />
            <div className="col-12">
              <p className="lead">
                Welcome to my site! Feel free to look around. I used those
                resources to build this website :
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <img src={HTMLIcon} alt="HTMLICON" />
              <p className="push1"> Built with Html 5</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <img src={CSSIcon} alt="CssIcon" className="fix10" />
              <p className="push1"> Built with Css 3</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <img src={ReactIcon} alt="ReactIcon" className="fix9" />
              <p className="push1"> Built with React 16</p>
            </div>
          </div>
        </div>
        <hr className="light" />
      </div>
    );
  }
}

export default Section2;
