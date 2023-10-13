import "./Carfleet.scss";
import Cardetails from "../../components/cardetails/Cardetails";
import React, { useState } from "react";
import audi from "../../assets/cars/audi.webp";
import toyota from "../../assets/cars/toyota.webp";
import bmw from "../../assets/cars/bmw.webp";
import golf from "../../assets/cars/golf.webp";
import merc from "../../assets/cars/mercedes.avif";
import vw from "../../assets/cars/Volkswagen.webp";

function Carfleet() {
  const [selectedCar, setSelectedCar] = useState("Audi A1 S-Line"); // State to keep track of the selected car


  const handleClick = (car) => {
    setSelectedCar(car);
  };
console.log(selectedCar);
  // Define a function to check if a button should have a different background color
  const isButtonSelected = (car) => {
    return car === selectedCar ? "selected" : "";
  };
  let imgUrl;
  switch (selectedCar) {
    case "Audi A1 S-Line":
      imgUrl = audi;
      break;
    case "Volkeswagen Golf":
      imgUrl = golf;
      break;
    case "Toyota Carmy":
      imgUrl = toyota;
      break;
    case "Bmw 330i":
      imgUrl = bmw;
      break;
    case "Mercedez GLS":
      imgUrl = merc;
      break;
    case "VW Passat":
      imgUrl = vw;
      break;
    default:
      imgUrl = "Audi A1 S-Line";
  }
  return (
    <section className="carfleet">
      <div className="container">
        <div className="top">
          <h1>Our entire car fleet</h1>
          <p>
            Choose from a variety of our amazing vehicles to rent for your
            <br />
            next adventure or business trip
          </p>
        </div>
        <div className="bottom">
          <div className="list-of-cars">
            <button
              className={isButtonSelected("Audi A1 S-Line")}
              onClick={() => handleClick("Audi A1 S-Line")}
            >
              Audi A1 S-Line
            </button>
            <button
              className={isButtonSelected("Volkeswagen Golf")}
              onClick={() => handleClick("Volkeswagen Golf")}
            >
              Volkeswagen Golf
            </button>
            <button
              className={isButtonSelected("Toyota Carmy")}
              onClick={() => handleClick("Toyota Carmy")}
            >
              Toyota Carmy
            </button>
            <button
              className={isButtonSelected("Bmw 330i")}
              onClick={() => handleClick("Bmw 330i")}
            >
              Bmw 330i
            </button>
            <button
              className={isButtonSelected("Mercedez GLS")}
              onClick={() => handleClick("Mercedez GLS")}
            >
              Mercedez GLS
            </button>
            <button
              className={isButtonSelected("VW Passat")}
              onClick={() => handleClick("VW Passat")}
            >
              VW Passat
            </button>
          </div>
          <div className="car-image">
            <img src={imgUrl} alt="car" />
          </div>
          <div className="details-of-car">
          <Cardetails selectedCar={selectedCar} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carfleet;
