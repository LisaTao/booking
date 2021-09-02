/** using redux-toolkit */
import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./reducers/booking";

const store = configureStore({
    reducer: { booking: bookingSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;