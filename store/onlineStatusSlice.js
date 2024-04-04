import { createSlice } from "@reduxjs/toolkit";

export const onlineStatusSlice = createSlice({
  name: "onlineStatus",
  initialState: {
    isOnline: typeof window !== "undefined" && navigator.onLine, // Check online status only on client side
    userStatus:
      typeof window !== "undefined" && navigator.onLine ? "online" : "offline", // Set user status based on online status
  },
  reducers: {
    setOnlineStatus: (state, action) => {
      state.isOnline = action.payload;
      state.userStatus = action.payload ? "online" : "offline"; // Set user status based on online status
    },
  },
});

export const { setOnlineStatus } = onlineStatusSlice.actions;

// Async action to check online status
export const checkOnlineStatus = () => (dispatch) => {
  const isOnline = typeof window !== "undefined" && navigator.onLine; // Check online status only on client side
  dispatch(setOnlineStatus(isOnline));
  console.log("User Status:", isOnline ? "online" : "offline"); // Log user status to console
  return Promise.resolve(isOnline);
};

// Selector to get the current online status
export const selectIsOnline = (state) => state.onlineStatus.isOnline;

// Selector to get the current user status
export const selectUserStatus = (state) => state.onlineStatus.userStatus;

export default onlineStatusSlice.reducer;
