import React, { Component } from "react";
import Facebook from "../Images/facebook.png";
import Twitter from "../Images/twitter.png";
import Instagram from "../Images/instagram.png";
import Youtube from "../Images/youtube.png";
import "./Contacts.css";

export class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid padding fix2">
          <div className="row padding">
            <div className="col-12">
              <hr className="light" />
            </div>
            <div className="col-12 MediaFix">
              <p className="grey">Connect</p>
            </div>
            <div className="col-md-6">
              <div>
                <a href="https://www.youtube.com/">
                  <img alt="YoutubeIcon" src={Youtube} className="fix1" />{" "}
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/">
                  <img alt="FacebookIcon" src={Facebook} className="fix1" />
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <a href="https://twitter.com/login?lang=en">
                <img alt="TwitterIcon" src={Twitter} className="fix1" />{" "}
              </a>
              <a href="https://www.instagram.com/?hl=en">
                <img alt="InstagramIcon" src={Instagram} className="fix1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
