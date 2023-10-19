import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count1: 111,
};

const counter1Reducer = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    setCount1: (state, action) => {
      state.count1 = action.payload;
    },
  },
});

export const { setCount1 } = counter1Reducer.actions;
export default counter1Reducer.reducer;
