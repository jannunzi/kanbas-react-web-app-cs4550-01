import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Modules/modulesReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
  },
});

export default store;
