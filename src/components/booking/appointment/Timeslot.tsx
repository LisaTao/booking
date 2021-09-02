import React  from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { bookingActions } from "../../../redux/reducers/booking";

import "./timeslot.scss"
interface TimeSlotProps {
  timeslot: string[]
}

const Timeslot = ({ timeslot }: TimeSlotProps) => {
  const bookingState = useSelector((state: RootStateOrAny) => state.booking);
  const dispatch = useDispatch();

  const handleClick = (item: string) => {
    dispatch(bookingActions.selectedTimeSlot(item));
  };

  return timeslot && <ul>
    {timeslot.map((item, index) =>
      <div onClick={() => handleClick(item)} key={index} className={bookingState.selectedTimeSlot === item ? "selected" : ""}>
        <p>{item}</p>
      </div>
    )}
  </ul>
}


export default Timeslot;