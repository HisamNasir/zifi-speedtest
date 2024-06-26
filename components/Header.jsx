import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountryFlag from "./CountryFlag";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/sidebarSlice";
import { selectIsSidebarOpen } from "../store/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(selectIsSidebarOpen);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="relative max-md:space-y-[44px] text-xs md:text-sm 2xl:text-xl">
      <div className="grid grid-flow-col items-center">
        <div className="block md:hidden w-[20px]">
          {sidebarOpen && (
            <button className="w-fit" onClick={handleCloseSidebar}>
              <img
                src="/Logos-icons/Arrow Back W Web.svg"
                alt="BACK"
                className="w-[20px] h-auto"
              />
            </button>
          )}
        </div>
        <div className="flex max-md:justify-center">
          <a href="/">
            <img
              src="/Logos-icons/ZiFi W.svg"
              width={96}
              height={50}
              className="w-auto h-[25px] md:h-8 2xl:h-[50px]"
            />
          </a>
        </div>
        <div className="text-center hidden md:block ">
          {isSmallScreen
            ? sidebarOpen
              ? "More Information"
              : "Your internet speed"
            : "Your internet speed"}
        </div>
        <div className="flex justify-end">
          <CountryFlag />
        </div>
      </div>
      <div
        id="changeingtext"
        className="absolute w-full text-center md:hidden block "
      >
        {isSmallScreen
          ? sidebarOpen
            ? "More Information"
            : "Your internet speed"
          : "Your internet speed"}
      </div>
    </div>
  );
};

export default Header;
