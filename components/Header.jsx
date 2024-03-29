import React from "react";
import CountryFlag from "./CountryFlag";

const Header = () => {
  return (
    <div className="relative max-md:space-y-[44px] ">
      <div className=" grid grid-flow-col items-center">
        <div className="block md:hidden"></div>
        <div className=" flex max-md:justify-center">
          <img
            src="/Logos-icons/ZiFi W.svg"
            width={96}
            height={50}
            className=" w-auto h-[25px] md:h-8 2xl:h-[50px]"
          />
        </div>
        <div className=" text-center hidden md:block  text-xs  md:text-sm">
          your internet speed
        </div>
        <div className=" flex justify-end">
          <CountryFlag />
        </div>
      </div>
      <div className="absolute w-full text-center md:hidden block text-xs md:text-sm">
        your internet speed
      </div>
    </div>
  );
};

export default Header;
