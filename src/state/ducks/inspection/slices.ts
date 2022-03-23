import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  WorkshopQaDetailsState: {},
};

const slice = createSlice({
  name: "details",
  initialState,
  reducers: {
    getDetails: (state, { payload }) => {
      state.WorkshopQaDetailsState = payload;
    },  
  },
});

export default slice;
