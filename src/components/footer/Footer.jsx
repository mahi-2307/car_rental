import "./Footer.scss";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <section className="footer">
      <div className="contact-details">
        <h2>Car Rental</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
        <div className="phone">
          <CallIcon className="icon" />
          <p>+91-9848325843</p>
        </div>
        <div className="phone">
            <EmailIcon className="icon"/>
            <p>carrental@gmail.com</p>
        </div>
      </div>
      <div className="branches">
        <h3>Our locations</h3>
        <p>Hyderabad</p>
        <p>Banglore</p>
        <p>Delhi</p>
        <p>Chennai</p>
      </div>
      <div className="subscribe">
        <p>Subscribe for latest offers</p>
        <input type="text" id="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default Footer;
