import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: {
    isLoading: false,
  },
};

const slice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      const { loading } = state;
      const { isLoading } = payload;
      loading.isLoading = isLoading;
    },
  },
});

export default slice;
