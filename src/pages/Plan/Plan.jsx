import React from "react";
import "./Plan.scss";
import CallIcon from "@mui/icons-material/Call";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import NoCrashIcon from "@mui/icons-material/NoCrash";
function Plan() {
  return (
    <section className="plan">
      <div className="container">
        <div className="heading">
          <h2>Plan the trip</h2>
          <h1>Quick and easy access</h1>
        </div>
        <div className="columns_3">
          <div className="selectCar">
            <NoCrashIcon className="icon"/>
            <p className="heading">Select Car</p>
            <p className="content">Choose a car that fulfills your needs</p>
          </div>
          <div className="selectCar">
            <CallIcon className="icon"/>
            <p className="heading">Assitance</p>
            <p className="content">Call the provider to know the further details</p>
          </div>
          <div className="selectCar">
            <TimeToLeaveIcon className="icon"/>
            <p className="heading">Go Wroomm....</p>
            <p className="content">Pick your car at the selected location and go Wroomm...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plan;
