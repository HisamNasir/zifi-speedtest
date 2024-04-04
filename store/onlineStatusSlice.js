import { createSlice } from "@reduxjs/toolkit";

export const onlineStatusSlice = createSlice({
  name: "onlineStatus",
  initialState: {
    isOnline: typeof window !== "undefined" && navigator.onLine, // Check if window object is defined before accessing navigator
  },
  reducers: {
    setOnlineStatus: (state, action) => {
      state.isOnline = action.payload;
    },
  },
});

export const { setOnlineStatus } = onlineStatusSlice.actions;

// Async action to check online status
export const checkOnlineStatus = () => (dispatch) => {
  const isOnline = typeof window !== "undefined" && navigator.onLine; // Check online status only on client side
  dispatch(setOnlineStatus(isOnline));
  return Promise.resolve(isOnline);
};

// Selector to get the current online status
export const selectIsOnline = (state) => state.onlineStatus.isOnline;

export default onlineStatusSlice.reducer;
