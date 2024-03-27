import React from "react";
import CountryFlag from "./CountryFlag";

const Header = () => {
  return (
    <div className=" grid grid-flow-col items-center">
      <img
        src="/Logos-icons/ZiFi W.png"
        width={96}
        height={50}
        className=" w-auto h-6 sm:h-6 md:h-8 2xl:h-[50px]"
      />
      <div className=" text-center hidden sm:block  text-xs  md:text-sm">
        your internet speed
      </div>
      <div className=" flex justify-end">
        <CountryFlag />
      </div>
    </div>
  );
};

export default Header;
