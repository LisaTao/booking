import React from "react";
import BookingTypes from "./bookingtypes/BookingTypes";
import Appointment from "./appointment/Appointment";
import YourInfo from "./userinfo/YourInfo";
import Confirmation from "./confirmation/Confirmation";
import { useSelector, RootStateOrAny } from "react-redux";
import "./choiceofsteps.scss"

const ChoiceOfSteps = () => {
  const bookingState = useSelector((state: RootStateOrAny) => state.booking);
  return (
    <div className="choice-of-steps">
      <div className="choice-header">
        <div className={bookingState.step === 1 || bookingState.step === 2 ? "selected" : "unselected"}>
          <h5>Choose Appointment</h5>
        </div>
        <div className={bookingState.step === 3 ? "selected" : "unselected"}>
          <h5>Your Info</h5>
        </div>
        <div className={bookingState.step === 4 ? "selected" : "unselected"}>
          <h5>Confirmation</h5>
        </div>
      </div>
      {bookingState.step === 1 && <BookingTypes />}
      {bookingState.step === 2 && <Appointment />}
      {bookingState.step === 3 && <YourInfo />}
      {bookingState.step === 4 && <Confirmation />}
    </div>
  )
}
export default ChoiceOfSteps