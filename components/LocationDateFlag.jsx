import React from "react";
import Clock from "./Clock";
import CountryFlag from "../lib/CountryFlag";

const LocationDateFlag = () => {
  return (
    <div className="text-right leading-tight text-xs ">
      <div className="w-full gap-6 lg:gap-10 flex items-center">
        <Clock />
        <div className=" hidden lg:flex">
          <CountryFlag />
        </div>
      </div>
    </div>
  );
};

export default LocationDateFlag;
