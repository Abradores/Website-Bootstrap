import React, { Component } from "react";
import Card1 from "../Images/team1.png";
import Card2 from "../Images/team2.png";
import Card3 from "../Images/team3.png";
import "./Cards.css";

export class Cards extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-12">
              <h2 className="Middle1"> Meet The Team</h2>
            </div>

            <div className="col-md-4 col-sm-12 ">
              <div className="card">
                <img className="card-img-top" src={Card1} alt="team1" />
                <div className="card-body"></div>
                <h4 className="card-title Middle">John </h4>
                <p className="card-text Middle">Senior Executive</p>
                <a href="App.js" className="btn btn-outline-secondary fix3">
                  View Profile
                </a>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card">
                <img className="card-img-top" src={Card2} alt="team1" />
                <div className="card-body"></div>
                <h4 className="card-title Middle">Mary</h4>
                <p className="card-text Middle">Community Manager</p>
                <a href="App.js" className="btn btn-outline-secondary fix3">
                  View Profile
                </a>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card">
                <img className="card-img-top" src={Card3} alt="team1" />
                <div className="card-body"></div>
                <h4 className="card-title Middle">Joe </h4>
                <p className="card-text Middle">Designer</p>
                <a href="App.js" className="btn btn-outline-secondary fix3">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
