import React, { Component } from "react";
import Photo1 from "../Images/desk.png";

export class Section1 extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-md-12 col-lg-6">
              <h2>Sed posuere et nibh non ultricies.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                varius, diam eu convallis rutrum, velit quam convallis magna, in
                venenatis quam dui non lectus. Suspendisse tempus ac nisi at
                convallis.
              </p>
              <p>
                Quisque laoreet risus eu nunc malesuada, vitae congue nibh
                mollis. Aliquam sagittis sit amet enim quis porttitor. Vivamus
                pulvinar nisl in orci convallis, ut interdum tellus tincidunt.
                Curabitur ut tempor turpis. In tristique vitae elit ut
                hendrerit. Nam in iaculis turpis.
              </p>
              <p>
                Nullam fringilla mattis auctor. Pellentesque tincidunt lacinia
                elit, sodales ultrices neque euismod non.
              </p>
              <br />
              <a href="App.js">
                <button className="btn btn-secondary">Learn More</button>{" "}
              </a>
            </div>
            <div className="col-lg-6 img-fluid">
              <img class="fixthis" src={Photo1} alt="WorkPicture" />
            </div>
          </div>
          <hr className="light" />
        </div>
      </div>
    );
  }
}

export default Section1;
