import React from "react";
import { useDispatch } from "react-redux";
import { bookingActions } from "../../../redux/reducers/booking";
import "./confirmation.scss";

const Confirmation = () => {
  const schedulebtnContent = "Schedule another Appointment >";
  const dispatch = useDispatch();
  const handleReschedule = () => {
    dispatch(bookingActions.reschedule());
  }

  return (
    <div className={"confirmation-wrapper"}>
      <div className={"confirmation-info"}>
        <h2>Aroma Therapy</h2>
        <h2 className={"confirmation-info-subtitle"}>Thursday, July 22, 2021 12:00pm</h2>
        <p>Veyor Wellness   $45.00</p>
        <div className={"confirmation-button-group"}>
          <button className={"black-button"}>Cancel</button>
          <button className={"black-button"}>Reschedule</button>
        </div>
        <button className={"normal-button"} onClick={handleReschedule}>{schedulebtnContent}</button>
      </div>
      <div className={"confirmation-qrcode"}>
        <h3>Easily book and manage appointments with Veyor Wellness on your phone.</h3>
        <p>Get the mobile app by opening the camera on your phone, and scanning this QR code:</p>
        <div className={"confirmation-qrcode-image"}>
          <img src="" alt="QR code" />
        </div>
      </div>
    </div>
  )
}

export default Confirmation;
