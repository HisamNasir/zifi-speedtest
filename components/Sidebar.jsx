import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CountryFlag from "./CountryFlag";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, selectIsSidebarOpen } from "../store/sidebarSlice";
import Time from "./InternetInformation/Time";
import Date from "./InternetInformation/Date";
import ShortDate from "./InternetInformation/ShortDate";
import Longitude from "./InternetInformation/Longitude";
import Latitude from "./InternetInformation/Latitude";
import Country from "./InternetInformation/Country";
import City from "./InternetInformation/City";

const Sidebar = ({ speed }) => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(selectIsSidebarOpen);

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <motion.div
      className={`sidebar ${sidebarOpen ? "" : "hidden"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full absolute top-0 left-0  z-10 w-full md:bg-opacity-90 flex flex-col justify-between min-h-screen pb-[24px] pt-[12px] md:py-6 2xl:py-[40px] px-[18px] md:px-8 2xl:px-[50px] bg-black ">
        <Header handleCloseSidebar={handleCloseSidebar} />
        <div className=" h-full max-lg:py-[30px] max-md:pb-[0px] md:my-2 max-h-[80vh] overflow-auto">
          <div className="flex max-md:flex-col-reverse items-center justify-between w-full h-full ">
            <div className=" w-full h-full flex flex-col max-md:mt-2 justify-between  md:justify-around text-[9px] sm:text-[11px] md:text-xs lg:text-sm 2xl:text-xl 2xl:pb-4">
              <p className="hidden md:block opacity-50">more information</p>
              <button className=" hidden md:block" onClick={handleCloseSidebar}>
                <img
                  src="/Logos-icons/Arrow Back W Web.svg"
                  alt="BACK"
                  className=" w-[20px] 2xl:w-[30px] h-auto"
                />
              </button>
              <div className=" flex md:gap-4 lg:gap-0 items-center">
                <div className=" w-[55px] lg:w-[65px] 2xl:w-[80px]">
                  <CountryFlag />
                </div>
                <div className="grid grid-cols-2 gap-[2px] md:gap-1 2xl:gap-4 gap-x-6 md:gap-x-10 2xl:gap-x-20">
                  <div className=" opacity-50 w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    city
                  </div>
                  <div className="">
                    <City />
                  </div>
                  <div className="opacity-50">country</div>
                  <div className="">
                    <Country />
                  </div>
                </div>
              </div>
              <div className=" flex md:gap-4 lg:gap-0 items-center">
                <div className=" w-[55px] lg:w-[65px] 2xl:w-[80px]">
                  <img
                    src="/Logos-icons/ZIFI User Icon.svg"
                    className="w-full h-auto max-w-[25px] md:max-h-[35px] 2xl:max-h-[50px] 2xl:max-w-[50px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-[2px] md:gap-1 2xl:gap-4 gap-x-6 md:gap-x-10 2xl:gap-x-20">
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    LATITUDE
                  </div>
                  <div className="">
                    <Latitude />
                  </div>
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    LONGITUDE
                  </div>
                  <div className="">
                    <Longitude />
                  </div>
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    INTERNAL IP
                  </div>
                  <div className="">10.0.0.186</div>
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    EXTERNAL IP
                  </div>
                  <div className="">82.41.174.63</div>
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    MAC ADDRESS
                  </div>
                  <div className="">5D:C3:07:7A:C4:88</div>
                </div>
              </div>

              <div className=" flex md:gap-4 lg:gap-0 items-center">
                <div className=" w-[55px] lg:w-[65px] 2xl:w-[80px]">
                  <img
                    src="/Logos-icons/ZIFI WiFi Icon W.svg"
                    className="max-w-[21px]   h-auto md:w-auto md:max-h-[35px] 2xl:max-h-[50px] 2xl:max-w-[50px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-[2px] md:gap-1 2xl:gap-4 gap-x-6 md:gap-x-10 2xl:gap-x-20">
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    PROVIDER
                  </div>
                  <div className="">VIRGIN MEDIA</div>
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    ROUTER NAME
                  </div>
                  <div className="">TP LINK</div>
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    SERVER
                  </div>
                  <div className="">LONDON</div>
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    PING
                  </div>
                  <div className=" normal-case">12 ms</div>
                </div>
              </div>
              <div className=" flex md:gap-4 lg:gap-0 items-center">
                <div className=" w-[55px] lg:w-[65px] 2xl:w-[80px]"></div>
                <div className="grid grid-cols-2 gap-[2px] md:gap-1 2xl:gap-4 gap-x-6 md:gap-x-10 2xl:gap-x-20">
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    DATE
                  </div>
                  <div className="">
                    <ShortDate />
                  </div>
                  <div className="opacity-50  w-[126px] md:w-[150px] lg:w-[250px] 2xl:w-[270px]">
                    TIME
                  </div>
                  <div className="">
                    <Time />
                  </div>
                </div>
              </div>
            </div>
            {/* right side  */}
            <div className=" flex max-md:justify-center max-md:items-center flex-col max-md:my-4 max-md:mb-8 gap-4 lg:gap-8 2xl:gap-10 items-end w-full ">
              <div id="download">
                <div className="flex max-md:flex-col max-md:justify-center md:items-center leading-none">
                  <p className=" text-6xl sm:text-6xl sm:text-[108px] md:text-[80px] lg:text-[120px] 2xl:text-[196px] leading-none">
                    {speed}
                  </p>
                  <p className=" md:hidden block text-center text-[9px] pb-1 sm:text-xs md:text-sm lg:text-lg 2xl:text-xl mt-2">
                    download
                  </p>
                  <div className=" flex max-md:flex-row-reverse max-md:justify-center md:flex-col gap-2 2xl:gap-8 lx:mt-2 2xl:mt-4 items-center">
                    <p className=" normal-case text-md sm:text-md sm:text-[38px] md:text-[15px] lg:tex-[20px] 2xl:text-[26px]">
                      Mbps
                    </p>
                    <img
                      src="/Logos-icons/ZIFI Download Arrow Green.svg"
                      className="max-h-3 sm:max-h-[27px] w-auto md:max-h-[20px] md:max-w-[20px] lg:max-h-[40px] lg:max-w-[40px] 2xl:max-h-[50px] 2xl:max-w-[50px]  "
                    />
                  </div>
                </div>
                <p className=" hidden md:block text-xs md:text-sm lg:text-lg 2xl:text-xl mt-2 text-end">
                  download
                </p>
              </div>
              <div id="upload">
                <div className="flex max-md:flex-col max-md:justify-center md:items-center leading-none">
                  <p className="text-6xl sm:text-6xl sm:text-[108px] md:text-[80px] lg:text-[120px] 2xl:text-[196px] leading-none">
                    {speed}
                  </p>
                  <p className=" md:hidden block text-center text-[9px] pb-1 sm:text-xs md:text-sm lg:text-lg 2xl:text-xl mt-2">
                    upload
                  </p>
                  <div className=" flex max-md:flex-row-reverse max-md:justify-center md:flex-col gap-2 2xl:gap-8 lx:mt-2 2xl:mt-4 items-center">
                    <p className=" normal-case text-md sm:text-[38px] md:text-[15px] lg:tex-[20px] 2xl:text-[26px]">
                      Mbps
                    </p>
                    <img
                      src="/Logos-icons/ZIFI Upload Arrow Purple.svg"
                      className=" max-h-3 sm:max-h-[27px] w-auto md:max-h-[20px] md:max-w-[20px] lg:max-h-[40px] lg:max-w-[40px] 2xl:max-h-[50px] 2xl:max-w-[50px]  "
                    />
                  </div>
                </div>
                <p className=" hidden md:block text-xs md:text-sm lg:text-lg 2xl:text-xl mt-2 text-end">
                  upload
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Sidebar;
