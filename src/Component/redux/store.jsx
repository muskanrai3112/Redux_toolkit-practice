import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userslice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
