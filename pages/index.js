import React from "react";
import Dashboard from "./dashboard";
import { useSelector } from "react-redux";
import { selectIsOnline } from "../store/onlineStatusSlice";
import NoInternet from "@/components/NoInternet";
const Home = () => {
  return (
    <div>
      <Dashboard />
      <NoInternet />
    </div>
  );
};

export default Home;
