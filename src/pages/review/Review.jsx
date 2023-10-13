import "./Review.scss";
import React from "react";
import MSD from "../../assets/MSD.jpeg";
import VK from "../../assets/VK.jpeg";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
function Review() {
  return (
    <section className="review">
      <div className="top">
        <h2> Reviews from our clients</h2>
        <p>
          Our clients have experienced our service and results,<br/> and they're
          eager to share their positive experiences with you.
        </p>
      </div>
      <div className="bottom">
        <div className="person_review">
          <div className="content">
            <p>"We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "</p>
          </div>
          <div className="details">
            <div className="img_name">
            <img src={MSD} alt="" />
            <p>MS</p>
            </div>
            <FormatQuoteIcon className="icon"/>
          </div>
        </div>
        <div className="person_review">
          <div className="content">
          <p>"The car was in great condition and made our trip even better. Highly recommend for this car rentals !"</p>
          </div>
          <div className="details">
          <div className="img_name">
            <img src={VK} alt="" />
            <p>VK</p>
            </div>
            <FormatQuoteIcon  className="icon"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
