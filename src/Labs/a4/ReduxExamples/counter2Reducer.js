import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count2: 222,
};

const counter2Reducer = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    setCount2: (state, action) => {
      state.count2 = action.payload;
    },
  },
});

export const { setCount2 } = counter2Reducer.actions;
export default counter2Reducer.reducer;
