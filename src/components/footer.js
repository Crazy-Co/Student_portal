import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot1">
        <div className="text">
          <p>Download students app on <i className="fa-brands fa-google-play"/> <br /> and <i className="fa-brands fa-app-store-ios" /> </p>
        </div>
        <div className="social">
          <p>Follow us on <i icon="fa-brands fa-instagram" /> <i className="fa-brands fa-youtube"/> <i className="fa-brands fa-facebook"/> </p>
        </div>
      </div>
      <div className="foot2">
        <div className="text">
          <p>Made with love by Institute Webops Team</p>
        </div>
        <div className="social">
          <p>Contact email: </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
