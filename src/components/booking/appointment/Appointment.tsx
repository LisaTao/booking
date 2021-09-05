import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { bookingActions } from "../../../redux/reducers/booking";
import { getMockTimeSlotByDate } from "../../../mock/mockApi"
import Timeslot from "./Timeslot";
import "./appointment.scss";

const Appointment = () => {
  const [bookDate, setBookDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState<Array<string>>([]);
  const buttonContent = "Continue >>";
  const bookingState = useSelector((state: RootStateOrAny) => state.booking);
  const dispatch = useDispatch();
  const handleDateChange = (date: Date) => {
    setBookDate(date);
    dispatch(bookingActions.clearTimeSlot());
  }

  const handleContinue = () => {
    if (timeSlot)
      dispatch(bookingActions.selectStep(3));
  }

  useEffect(() => {
    dispatch(bookingActions.selectedDate(bookDate));
    dispatch(bookingActions.selectedDate(bookDate));
    let mocktime = getMockTimeSlotByDate(bookDate);
    setTimeSlot(mocktime);
  }, [bookDate, dispatch])

  return (
    <div className={"appointment-wrapper"}>
      <select className={"selection"}>
        <option value="Physiotherapy">Physiotherapy</option>
        <option value="Physiotherapy">Chiro</option>
        <option value="Aroma Therapy">Aroma Therapy</option>
      </select>
      <div>
        <h3>{bookDate.toLocaleDateString()}</h3>
        <DatePicker minDate={new Date()} inline
          selected={bookDate} onChange={(date: Date) => handleDateChange(date)} />
        <div className={"appointment-timeslot"}>
          <h3>Please select a time</h3>
          {timeSlot.length ? <Timeslot timeslot={timeSlot} /> : <p>Not available</p>}
          {bookingState.selectedTimeSlot && <button onClick={handleContinue} className={"appointment-continue"}>{buttonContent}</button>}
        </div>
      </div>
    </div>
  )
}

export default Appointment;
