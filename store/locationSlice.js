import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchLocationStart: (state) => {
      state.loading = true;
    },
    fetchLocationSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchLocationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationFailure,
} = locationSlice.actions;

export const selectLocationData = (state) => state.location.data;
export const selectLocationLoading = (state) => state.location.loading;
export const selectLocationError = (state) => state.location.error;
export default locationSlice.reducer;
