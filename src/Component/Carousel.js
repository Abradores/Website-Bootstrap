import React, { Component } from "react";
import background from "../Images/background.png";
import background2 from "../Images/background2.png";
import background3 from "../Images/background3.png";
import "./Carousel.css";

export class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="slides" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" className="active"></li>
            <li data-target="#slides" data-slide-to="1"></li>
            <li data-target="#slides" data-slide-to="2"></li>
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={background} alt="Background1" />
              <div className="carousel-caption">
                <h1 className="display-2">My Website</h1>
                <button type="button" className="btn btn-outline-light btn-lg ">
                  Click me{" "}
                </button>
                <button type="button" className="btn btn-secondary btn-lg">
                  Get started
                </button>
              </div>
            </div>
            <div class="carousel-item">
              <img src={background2} alt="Background2" />
            </div>
            <div className="carousel-item">
              <img src={background3} alt="Background3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
