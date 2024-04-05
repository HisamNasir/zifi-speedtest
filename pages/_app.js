import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import NoInternet from "@/components/NoInternet";
export default function App({ Component, pageProps }) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);
  return (
    <Provider store={store}>
      {!isOnline && <NoInternet />}
      <Component {...pageProps} />
    </Provider>
  );
}
