import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bookingActions } from "../../../redux/reducers/booking";
import "./userinfo.scss";

const UserInfo = () => {
  const [errors, setErrors] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const buttonContent = "Complete Appointment >>";
  const dispatch = useDispatch();

  const handleFirstNameChange = (e: any) => {
    setFirstname(e?.target.value)
  }
  const handleLastNameChange = (e: any) => {
    setLastname(e?.target.value)
  }
  const handlePhoneChange = (e: any) => {
    setPhone(e?.target.value)
  }
  const handleEmailChange = (e: any) => {
    setEmail(e?.target.value)
    setErrors(false);
  }

  // const validname = () => {
  //   if ((firstname !== "") && (lastname !== ""))
  //     return true;
  //   else return false;
  // }
  const validemail = () => {
    if (!/\S+@\S+\.\S+/.test(email))
      return false;
    else return true;
  }
  const handleComplete = () => {
    // if (!validname()) alert("Please input username");
    if (!validemail()) setErrors(true);
    else {
      setErrors(false);
      dispatch(bookingActions.userInfo({ firstname, lastname, phone, email }));
      dispatch(bookingActions.selectStep(4));
    }
  }

  return (
    <div className="user-info">
      <label htmlFor="firstname" className="form-label">
        <p>Name</p>
        <p className="helper-text"> * </p>
      </label>
      <div className="form-gap name">
        <input
          type="text"
          placeholder="First Name"
          className="form-box firstname"
          onChange={(e) => handleFirstNameChange(e)}
          name="firstname"
          value={firstname || ""}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form-box lastname"
          onChange={(e) => handleLastNameChange(e)}
          name="lastname"
          value={lastname || ""}
        />
      </div>
      <label htmlFor="phone" className="form-label">
        <p>Phone</p>
      </label>
      <div className="form-gap">
        <input
          type="text"
          onChange={(e) => handlePhoneChange(e)}
          className="form-box phone"
          name="phone"
          value={phone || ""}
        />
      </div>
      <div className={errors ? "errors email-wrapper" : "email-wrapper"}>
        <label htmlFor="email" className="form-label">
          <p>Email</p>
          <p className="helper-text"> * </p>
          {errors && <p className="helper-text">{`(required)`}</p>}
        </label>
        <div className="form-gap">
          <input
            type="email"
            placeholder="Email"
            required
            className="form-box email"
            onChange={(e) => handleEmailChange(e)}
            name="email"
          />
        </div>
        {errors && <p className="helper-text">Your email address is invalid</p>}
      </div>
      <button onClick={handleComplete} className={"btn-complete"}>{buttonContent}</button>
    </div>

  )
}

export default UserInfo;