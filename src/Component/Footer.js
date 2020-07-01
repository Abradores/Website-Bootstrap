import React, { Component } from "react";
// import image from "../Images/LogoTest.png";
import "./Footer.css";
import image2 from "../Images/WhiteLogo.png";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="container-fluid padding background1 TextColor">
            <div className="row text-center">
              <div className="col-md-4">
                <img src={image2} alt="Logo" />
                <hr className="light" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam scelerisque, turpis in vulputate tristique, quam felis
                  pellentesque augue, vitae facilisis justo nunc at justo.
                  Vestibulum rutrum egestas viverra. Sed et mi vel nisl
                  consectetur tempor a sit amet nisi.
                </p>
                <p>
                  Ut sit amet laoreet neque. Nulla lobortis velit at mi semper,
                  at pharetra est lacinia. Duis sollicitudin maximus est, nec
                  hendrerit tortor. Fusce et consequat est. Suspendisse feugiat
                  fringilla ultrices. Sed eget hendrerit sem. Nullam placerat
                  leo at volutpat fringilla. Nulla sed congue libero.
                </p>
              </div>
              <div className="col-md-4">
                <hr className="light" />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  placerat.
                </h5>
                <hr className="light" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam scelerisque, turpis in vulputate tristique, quam felis
                  pellentesque augue, vitae facilisis justo nunc at justo.
                  Vestibulum rutrum egestas viverra. Sed et mi vel nisl
                  consectetur tempor a sit amet nisi.
                </p>
                <p>
                  Ut sit amet laoreet neque. Nulla lobortis velit at mi semper,
                  at pharetra est lacinia. Duis sollicitudin maximus est, nec
                  hendrerit tortor. Fusce et consequat est. Suspendisse feugiat
                  fringilla ultrices. Sed eget hendrerit sem. Nullam placerat
                  leo at volutpat fringilla. Nulla sed congue libero.
                </p>
              </div>
              <div className="col-md-4">
                <hr className="light" />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.
                </h5>
                <hr className="light" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam scelerisque, turpis in vulputate tristique, quam felis
                  pellentesque augue, vitae facilisis justo nunc at justo.
                  Vestibulum rutrum egestas viverra. Sed et mi vel nisl
                  consectetur tempor a sit amet nisi.
                </p>
                <p>
                  Ut sit amet laoreet neque. Nulla lobortis velit at mi semper,
                  at pharetra est lacinia. Duis sollicitudin maximus est, nec
                  hendrerit tortor. Fusce et consequat est. Suspendisse feugiat
                  fringilla ultrices. Sed eget hendrerit sem. Nullam placerat
                  leo at volutpat fringilla. Nulla sed congue libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
