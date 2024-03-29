import React from "react";
import CountryFlag from "./CountryFlag";

const Header = ({ handleClose, isSidebarOpen }) => {
  return (
    <div className="relative max-md:space-y-[44px] ">
      <div className=" grid grid-flow-col items-center">
        <div className="block md:hidden">
          <button className="w-fit" onClick={handleClose}>
            <img
              src="/Logos-icons/Arrow Back W Web.svg"
              alt="BACK"
              className="w-[20px] 2xl:w-[30px] h-auto"
            />
          </button>
        </div>

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
