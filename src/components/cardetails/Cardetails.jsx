import "./Cardetails.scss";
import React from "react";
import CarData from "../../CarData";
import { Link } from "react-scroll";
function Cardetails({ selectedCar }) {
  const selectedCarData = CarData.find((car) => car.Name === selectedCar);

  return (
    <div className="container_carDetails">
      <div className="details">
        <h2>{selectedCarData.Name}</h2>
        <p>
          <span>Price</span>: ${selectedCarData.price}
        </p>
        <p>
          <span>Year</span>: {selectedCarData.year}
        </p>
        <p>
          <span>Capacity</span>: {selectedCarData.Capacity} passengers
        </p>
        <p>
          <span>Transmission</span>: {selectedCarData.Transmission}
        </p>
        <p>
          <span>Fuel</span>: {selectedCarData.Fuel}
        </p>
      </div>
      <button>
        <Link activeClass="active" to="bookCar" smooth={true} duration={500} offset={-100}>
          Book Now
        </Link>
      </button>
    </div>
  );
}

export default Cardetails;
