import React from "react";
import { useState, useEffect } from "react";
import "./Book.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import audi from "../../assets/cars/audi.webp";
import toyota from "../../assets/cars/toyota.webp";
import bmw from "../../assets/cars/bmw.webp";
import golf from "../../assets/cars/golf.webp";
import merc from "../../assets/cars/mercedes.avif";
import vw from "../../assets/cars/Volkswagen.webp";
function Book() {
  const [type, setType] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickdate, setPickdate] = useState("");
  const [dropdate, setDropdate] = useState("");
  const [carImg, setCarImage] = useState("");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  let [modal, setModal] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickdate === "" ||
      pickup === "" ||
      dropdate === "" ||
      dropoff === "" ||
      type === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };
  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = audi;
      break;
    case "VW Golf 6":
      imgUrl = golf;
      break;
    case "Toyota Camry":
      imgUrl = toyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = bmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = merc;
      break;
    case "VW Passat CC":
      imgUrl = vw;
      break;
    default:
      imgUrl = "";
  }
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);
  return (
    <>
      <section className="bookCar">
   
        <div className="container">
          <div className="title">
            <h1>Book a car</h1>
            <p className="error-message">All fields required!</p>
          </div>
          <div className="form">
            <form>
              <div className="book_form">
                <label htmlFor="type">Select your car</label>
                <br />

                <select
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                    setCarImage(e.target.value);
                  }}
                >
                  <option>Select your car type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>
              <div className="book_form">
                <label htmlFor="type">Pickup location</label>
                <br />
                <select
                  value={pickup}
                  onChange={(e) => {
                    setPickup(e.target.value);
                  }}
                >
                  <option>Select Pickup Location</option>
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Banglore</option>
                  <option>Noida</option>
                  <option>Delhi</option>
                  <option>Gurugram</option>
                </select>
              </div>
              <div className="book_form">
                <label htmlFor="type">Select Dropoff location</label>
                <br />
                <select
                  value={dropoff}
                  onChange={(e) => {
                    setDropoff(e.target.value);
                  }}
                >
                  <option>Dropoff Location</option>
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Banglore</option>
                  <option>Noida</option>
                  <option>Delhi</option>
                  <option>Gurugram</option>
                </select>
              </div>
              <div className="book_pickdrop">
                <label htmlFor="type">From</label>
                <br />
                <input
                  id="picktime"
                  value={pickdate}
                  onChange={(e) => {
                    setPickdate(e.target.value);
                  }}
                  type="date"
                ></input>
              </div>
              <div className="book_pickdrop">
                <label htmlFor="type">Upto</label>
                <br />
                <input
                  id="picktime"
                  value={dropdate}
                  onChange={(e) => {
                    setDropdate(e.target.value);
                  }}
                  type="date"
                ></input>
              </div>
              <div className="book_button">
                <button onClick={openModal} type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <button
            onClick={(e) => {
              setModal(false);
            }}
          >
            x
          </button>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <h5>Location & Date</h5>
            <div className="booking-modal__car-info__dates">
              <span>
                <LocationOnIcon />
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickdate} /
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <LocationOnIcon />
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropdate} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <LocationOnIcon />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickup}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <LocationOnIcon />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropoff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            {imgUrl && <img src={imgUrl} alt="car_img" />}
            <h5>
           {type}
            </h5>
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

          </form>
            <div className="reserve-button">
              <button>Reserve Now</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Book;
