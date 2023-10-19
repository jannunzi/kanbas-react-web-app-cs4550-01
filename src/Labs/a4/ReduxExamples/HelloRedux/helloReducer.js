import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "Hello World 123 !!!!",
};
const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});
export default helloSlice.reducer;
