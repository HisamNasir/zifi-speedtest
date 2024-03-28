import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CountryFlag from "./CountryFlag";

const Sidebar = ({ toggleMoreInfo, speed, setSpeed, handleClose }) => {
  return (
    <div className="h-full absolute top-0 left-0  z-10 w-full bg-opacity-90 flex flex-col justify-between min-h-screen py-4 md:py-6 2xl:py-[40px] px-6 md:px-8 2xl:px-[50px] bg-black ">
      <Header />
      <div className=" h-full 2xl:py-[40px]">
        <div className="flex max-lg:flex-col items-center justify-between w-full h-full">
          {/* left side  */}
          <div className=" w-full h-full flex flex-col gap-12 lg:text-lg 2xl:text-xl">
            <p>more information</p>
            <button className=" w-fit" onClick={handleClose}>
              <img
                src="/Logos-icons/back.png"
                className=" w-[20px] 2xl:w-[30px] h-auto"
              />
            </button>
            <div className=" flex gap4 lg:gap-8 2xl:gap-10 items-center">
              <div className=" w-[80px]">
                <CountryFlag />
              </div>
              <div className="grid grid-cols-2 gap-2 2xl:gap-4 gap-x-10 2xl:gap-x-20">
                <div className=" opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  city
                </div>
                <div className="">london</div>
                <div className="opacity-50">country</div>
                <div className="">united kingdom</div>
              </div>
            </div>
            <div className=" flex gap4 lg:gap-8 2xl:gap-10 items-center">
              <div className=" w-[80px]">
                <img
                  src="/Logos-icons/ZIFI User Icon.png"
                  className="h-auto max-w-[40px]  lg:max-w-[40px] 2xl:max-w-[50px] "
                />
              </div>
              <div className="grid grid-cols-2 gap-2 2xl:gap-4 gap-x-10 2xl:gap-x-20">
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  LATITUDE
                </div>
                <div className="">51.514882</div>
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  LONGITUDE
                </div>
                <div className="">-0.123563</div>
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  INTERNAL IP
                </div>
                <div className="">10.0.0.186</div>
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  EXTERNAL IP
                </div>
                <div className="">82.41.174.63</div>
              </div>
            </div>

            <div className=" flex gap4 lg:gap-8 2xl:gap-10 items-center">
              <div className=" w-[80px]">
                <img
                  src="/Logos-icons/ZIFI WiFi Icon W.png"
                  className="max-h-[35px] max-w-[40px] lg:max-h-[40px] lg:max-w-[40px] 2xl:max-h-[50px] 2xl:max-w-[50px]  h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 2xl:gap-4 gap-x-10 2xl:gap-x-20">
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  PROVIDER
                </div>
                <div className="">VIRGIN MEDIA</div>
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  ROUTER NAME
                </div>
                <div className="">TP LINK</div>
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  SERVER
                </div>
                <div className="">LONDON</div>
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  PING
                </div>
                <div className=" normal-case">12 ms</div>
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  MAC ADDRESS
                </div>
                <div className="">5D:C3:07:7A:C4:88</div>
              </div>
            </div>
            <div className=" flex gap4 lg:gap-8 2xl:gap-14 items-center">
              <div className="w-[80px]"></div>
              <div className="grid grid-cols-2 gap-2 2xl:gap-4 gap-x-10 2xl:gap-x-20">
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  DATE
                </div>
                <div className="">27/03/2024</div>
                <div className="opacity-50 w-[230px] lg:w-[250px] 2xl:w-[270px]">
                  TIME
                </div>
                <div className="">15:45</div>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className=" flex flex-col gap-4 lg:gap-8 2xl:gap-14 items-end w-full ">
            <div id="download">
              <div className="flex items-center">
                <p className="text-[100px] lg:text-[120px] 2xl:text-[146px] leading-none">
                  {speed}
                </p>
                <div className=" flex flex-col gap-2 items-center">
                  <p className=" normal-case text-[15px] lg:tex-[20px] 2xl:text-[26px]">
                    Mbps
                  </p>
                  <img
                    src="/Logos-icons/ZIFI Download Arrow Green.png"
                    className=" max-h-[35px] max-w-[40px] lg:max-h-[40px] lg:max-w-[40px] 2xl:max-h-[50px] 2xl:max-w-[50px]  "
                  />
                </div>
              </div>
              <p className=" text-end">download</p>
            </div>
            <div id="upload">
              <div className="flex items-center">
                <p className=" text-[100px] lg:text-[120px] 2xl:text-[146px] leading-none">
                  {speed}
                </p>
                <div className=" flex flex-col gap-2 items-center">
                  <p className=" normal-case text-[15px] lg:tex-[20px] 2xl:text-[26px]">
                    Mbps
                  </p>
                  <img
                    src="/Logos-icons/ZIFI Upload Arrow Purple.png"
                    className=" max-h-[35px] max-w-[40px] lg:max-h-[40px] lg:max-w-[40px] 2xl:max-h-[50px] 2xl:max-w-[50px] "
                  />
                </div>
              </div>
              <p className=" text-end">upload</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
