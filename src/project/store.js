import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    usersReducer,
  },
});

export default store;
