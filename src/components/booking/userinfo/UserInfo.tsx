import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bookingActions } from "../../../redux/reducers/booking";
import useInput from "../../../hooks/use-input";
import "./userinfo.scss";

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => {
  console.log("email", value);
  console.log("email.test", /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
  // return /\S+@\S+\.\S+/.test(value)
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
};
const UserInfo = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    handleValueChange: handleFirstNameChange,
    handleValueBlur: handleFirstNameBlur,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    handleValueBlur: handleEmailBlur,
    handleValueChange: handleEmailChange,
    reset: resetEmail,
  } = useInput(isEmail);
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const buttonContent = "Complete Appointment >>";
  const dispatch = useDispatch();

  const handleLastNameChange = (e: any) => {
    setLastname(e?.target.value)
  }
  const handlePhoneChange = (e: any) => {
    setPhone(e?.target.value)
  }

  const handleComplete = () => {
    if (!enteredFirstNameIsValid) {
      return;
    }
    console.log("test", enteredEmailIsValid)
    if (!enteredEmailIsValid) return;

    dispatch(bookingActions.userInfo({ enteredFirstName, lastname, phone, enteredEmail }));
    dispatch(bookingActions.selectStep(4));

    resetFirstName();
    resetEmail();
  }
  let formValid = false;
  if (enteredEmailIsValid && enteredFirstNameIsValid) {
    formValid = true;
  }
  return (
    <div className="user-info">
      <label htmlFor="firstname" className="form-label">
        <p>Name</p>
        <p className="helper-text"> * </p>
        {firstNameHasError && <p className="helper-text">First name must not be empty.</p>}
      </label>
      <div className="form-gap name">
        <input
          type="text"
          placeholder="First Name"
          className="form-box firstname"
          onChange={handleFirstNameChange}
          onBlur={handleFirstNameBlur}
          name="firstname"
          value={enteredFirstName || ""}
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
      <div className={emailHasError ? "errors email-wrapper" : "email-wrapper"}>
        <label htmlFor="email" className="form-label">
          <p>Email</p>
          <p className="helper-text"> * </p>
          {emailHasError && <p className="helper-text">{`(required)`}</p>}
        </label>
        <div className="form-gap">
          <input
            type="email"
            placeholder="Email"
            required
            className="form-box email"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            name="email"
          />
        </div>
        {emailHasError && <p className={"errors helper-text"}>Your email address is invalid</p>}
      </div>
      <button onClick={handleComplete} className={formValid ? "btn-complete" : "btn-disabled"} disabled={!formValid}>{buttonContent}</button>
    </div>

  )
}

export default UserInfo;