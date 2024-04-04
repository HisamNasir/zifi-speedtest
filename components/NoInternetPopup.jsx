import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Action to show NoInternet component
export const showNoInternet = () => (dispatch) => {
  dispatch(setNoInternet(true));
};

export const onlineStatusSlice = createSlice({
  name: "onlineStatus",
  initialState: {
    isOnline: typeof window !== "undefined" && navigator.onLine,
    userStatus:
      typeof window !== "undefined" && navigator.onLine ? "online" : "offline",
    showNoInternet: false,
  },
  reducers: {
    setOnlineStatus: (state, action) => {
      state.isOnline = action.payload;
      state.userStatus = action.payload ? "online" : "offline";
    },
    setNoInternet: (state, action) => {
      state.showNoInternet = action.payload;
    },
  },
});

export const { setOnlineStatus, setNoInternet } = onlineStatusSlice.actions;

export const selectIsOnline = (state) => state.onlineStatus.isOnline;

export const selectUserStatus = (state) => state.onlineStatus.userStatus;

export const selectShowNoInternet = (state) =>
  state.onlineStatus.showNoInternet;

export default onlineStatusSlice.reducer;
