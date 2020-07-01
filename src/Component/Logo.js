import React, { Component } from "react";
import image from "../Images/LogoTest.png";

export class Logo extends Component {
  props(props) {
    //im tryhing to remember hwo to pass props through a component
    // im not remembering.. but its something like this, one quick fix would be..
  }
  render() {
    return (
      <div>
        <img src={image} alt="Logo" style={this.props.myStyle} />
      </div>
    );
  }
}

// const style = {
//   footer: {
//     height: 45,
//     width: "auto"
//   }
// };

export default Logo;
