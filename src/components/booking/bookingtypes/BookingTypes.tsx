import React from "react";

import { useDispatch } from "react-redux";
import { bookingActions } from "../../../redux/reducers/booking";
import "./bookingTypes.scss";

const BookingTypes = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(bookingActions.selectStep(2));
  }

  return (
    <div className={"booking-types-wrapper"} onClick={handleClick}>
      <ul className={"booking-types-list-item"}>
        <li>
          <div>
            <h3>Physiotherapy</h3>
            <p>30 minutes @ $45.00</p>
          </div>
        </li>
        <li>
          <div>
            <h3>Chiro</h3>
            <p>30 minutes @ $100.00</p>
          </div>
        </li>
        <li>
          <div>
            <h3>Aroma Therapy</h3>
            <p>30 minutes @ $45.00</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default BookingTypes;
