import React from 'react';
import { render, screen } from '@testing-library/react';
import store from "../redux/store";
import bookingSlice from "../redux/reducers/booking"
import { Provider } from 'react-redux';
import Booking from "../pages/Booking"

describe('Booking test', () => {
  test('renders init page', () => {
    render(<Provider store={store}><Booking /></Provider>);
    const title = screen.getByText(/Book a wellness session./i);
    const typeList = screen.getAllByRole("listitem");
    expect(title).toBeInTheDocument();
    expect(typeList.length).toBe(3);
  });

  test('update state of step', () => {
    let state = store.getState().booking;
    expect(state.step).toBe(1);
    store.dispatch(bookingSlice.actions.selectStep(2));
    state = store.getState().booking;
    expect(state.step).toBe(2);
  });

  test('update state of timeslot', () => {
    let state = store.getState().booking;
    store.dispatch(bookingSlice.actions.selectedTimeSlot("10:30am"));
    state = store.getState().booking;
    expect(state.selectedTimeSlot).toBe("10:30am");
  });

})