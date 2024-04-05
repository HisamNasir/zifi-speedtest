import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import CheckInternet from "@/components/CheckInternet";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CheckInternet />
      <Component {...pageProps} />
    </Provider>
  );
}
