import "./Why.scss";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import SavingsIcon from "@mui/icons-material/Savings";
import whyImg from "../../assets/why.png";
function Why() {
  return (
    <section className="why">
      
          <h4>Why Choose Us</h4>
      <div className="why_content">
        <div className="why_chooseUS">
          <h1>Best valued deals in the segment</h1>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>

          <button>Find more</button>
        </div>
        <div className="Benefits">
          <div className="container">
          <div className="image">
            <AttachMoneyIcon className="icon"/>
            </div>
            <div className="benefits_data">
              <h3>Inter State Drive</h3>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-State adventures.
              </p>
            </div>
          </div>
          <div className="container">
          <div className="image">
            <GpsFixedIcon className="icon"/>
            </div>
            <div className="benefits_data">
              <h3>All Inclusive Pricing</h3>
              <p>
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="image">
            <SavingsIcon className="icon"/>
            </div>
            <div className="benefits_data">
              <h3>No Hidden Charges</h3>
              <p>
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
