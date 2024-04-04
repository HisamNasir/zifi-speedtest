import { createSlice } from "@reduxjs/toolkit";
export const onlineStatusSlice = createSlice({
  name: "onlineStatus",
  initialState: {
    isOnline: typeof window !== "undefined" && navigator.onLine,
    userStatus: false,
  },
  reducers: {
    setOnlineStatus: (state, action) => {
      state.isOnline = action.payload;
      state.userStatus = action.payload ? true : false;
    },
  },
});

export const { setOnlineStatus } = onlineStatusSlice.actions;

export const checkOnlineStatus = () => (dispatch) => {
  const isOnline = typeof window !== "undefined" && navigator.onLine;
  dispatch(setOnlineStatus(isOnline));
  console.log("User Status:", isOnline ? "online" : "offline");
};

export const selectIsOnline = (state) => state.onlineStatus.isOnline;

export const selectUserStatus = (state) => state.onlineStatus.userStatus;

export default onlineStatusSlice.reducer;
