import React from "react";

import { useSelector, RootStateOrAny } from "react-redux";
import "./yourinfo.scss";
import UserInfo from "./UserInfo";

const YourInfo = () => {
  const changeLink = "< Change";

  const bookingState = useSelector((state: RootStateOrAny) => state.booking);
  const selectdate = bookingState.selectedDate;
  console.log("test", selectdate.toString())
  const topInfo = bookingState.type + " " + selectdate.toString().slice(0, 15) + " " + bookingState.selectedTimeSlot;

  return (
    <div className={"yourinfo-wrapper"}>
      <div className={"yourinfo-info"}>
        <h5>{topInfo}</h5>
        <p className={"yourinfo-back"}>{changeLink}</p>
        <UserInfo />

      </div>
    </div>
  )
}

export default YourInfo;
