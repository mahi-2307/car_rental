import React from "react";
import "./Intro.scss";
import car from "../../assets/car_intro.png";
import { Link } from "react-scroll";
function Intro() {
  return (
    <section className="intro">
      <div className="landingPage">
        <div className="left">
          <p className="top">Plan your trip now</p>
          <br />
          <p className="middle">
            Save <span>BIG</span> with our
          </p>
          <p className="middle">car rental</p>
          <br />
          <p className="tagline">
            Rent the car of your dreams.
            <br />
            Unbeatable prices, unlimited miles, flexible pick-up options and
            much more.
          </p>
          <div className="bottom">
            <button className="book">
              <Link
                activeClass="active"
                to="bookCar"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Book Now
              </Link>
            </button>
            <button className="learnMore">Learn More &gt;</button>
          </div>
        </div>
        <div className="right">
          <img src={car} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
