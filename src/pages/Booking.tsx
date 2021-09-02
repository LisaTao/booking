import React from "react";
import ChoiceOfSteps from "../components/booking/ChoiceOfSteps";
import "./booking.scss"
const Booking = () => {
  return (
    <div className={"booking-wrapper"}>
      <h1>Book a wellness session.</h1>
      <p>Visit one of our expert consultants to get yourself feeling 100% again.</p>
      <ChoiceOfSteps />
    </div>
  )
}

export default Booking;
