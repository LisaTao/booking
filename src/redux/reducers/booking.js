import { createSlice } from "@reduxjs/toolkit";

const orginalBookingstate = {
  step: 1,
  type: "Chiro",
  selectedDate: "",
  selectedTimeSlot: "",
  userInfo: {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  }
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: orginalBookingstate,
  reducers: {
    userInfo(state, action) {
      state.userInfo = action.payload;
    },
    selectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    selectedTimeSlot(state, action) {
      state.selectedTimeSlot = action.payload;
    },
    clearTimeSlot(state) {
      state.selectedTimeSlot = "";
    },
    selectStep(state, action) {
      state.step = action.payload;
    },
    reschedule(state) {
      state.step = 1;
      state.selectedTimeSlot = "";
      state.selectedDate = "";
      state.userInfo = {};
    },
  }
});

export const bookingActions = bookingSlice.actions;
export default bookingSlice;