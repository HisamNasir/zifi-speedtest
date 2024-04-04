import React from "react";
import Dashboard from "./dashboard";
import { useSelector } from "react-redux";
import { selectIsOnline } from "../store/onlineStatusSlice";
const Home = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;
