import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import onlineStatusReducer from "./onlineStatusSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    onlineStatus: onlineStatusReducer,
  },
});
