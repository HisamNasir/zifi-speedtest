import React, { useState } from "react";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, selectIsSidebarOpen } from "../store/sidebarSlice";

export default function Home() {
  const [speed, setSpeed] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [buttonImage, setButtonImage] = useState(
    "/Logos-icons/ZIFI Circle Test.svg"
  );
  const [showSpeedDisplay, setShowSpeedDisplay] = useState(true);
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(selectIsSidebarOpen);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleButtonClick = () => {
    setButtonImage("/Logos-icons/ZIFI Circle Download Green.svg");
    let initialSpeed = 0;
    const interval = setInterval(() => {
      initialSpeed += 1.0;
      const roundedSpeed = Math.min(initialSpeed, 105.31).toFixed(2);
      setSpeed(roundedSpeed);
      if (initialSpeed >= 105.31) {
        clearInterval(interval);
        setTimeout(() => {
          setButtonImage("/Logos-icons/ZIFI Circle Test.svg");
        }, 50);
      }
    }, 20);
  };
  const toggleMoreInfo = () => {
    dispatch(toggleSidebar()); // Open sidebar when showing information
  };

  return (
    <main>
      <Layout>
        <div className=" h-full flex flex-col justify-between ">
          <div className="flex max-md:flex-col max-h-min justify-center md:justify-end items-center md:gap-2 2xl:gap-4">
            <p className=" text-[150px] md:text-[150px] lg:text-[200px] 2xl:text-[380px] p-0 leading-none md:pb-4">
              <span className=" block md:hidden">
                {Math.floor(parseFloat(speed))}
              </span>
              <span className="hidden md:block">{speed}</span>
            </p>

            <div className=" flex flex-col justify-center gap-[48px] md:gap-2 lg:gap-6 2xl:gap-12">
              <p className=" max-md:text-center normal-case text-[32px] md:text-[25px] lg:tex-[35px] 2xl:text-[45px] leading-none">
                Mbps
              </p>
              <div className=" block md:hidden ">
                {speed === "105.31" && (
                  <div className="h-[16px]">
                    {!sidebarOpen && (
                      <div className=" w-full ">
                        <p
                          onClick={toggleMoreInfo}
                          className="w-full text-xs md:text-base cursor-pointer "
                        >
                          More Information
                        </p>
                      </div>
                    )}
                    {sidebarOpen && <Sidebar speed={speed} />}
                  </div>
                )}
              </div>
              <button
                onClick={handleButtonClick}
                className=" h-full flex justify-center relative"
              >
                <div className=" absolute">
                  {buttonImage === "/Logos-icons/ZIFI Circle Test.svg" && (
                    <p className=" flex justify-center items-center  uppercase text-[30px] md:text-base lg:text-xl 2xl:text-[35px] w-[104px] md:w-[40px] lg:w-[80px] 2xl:w-[130px] h-[104px] md:h-[40px] lg:h-[80px] 2xl:h-[130px]">
                      Go
                    </p>
                  )}
                </div>
                <img
                  src={buttonImage}
                  alt="Button"
                  className=" w-[104px] md:w-[40px] lg:w-[80px] 2xl:w-[130px] h-[104px] md:h-[40px] lg:h-[80px] 2xl:h-[130px] "
                  id="imageButton"
                />
              </button>
            </div>
          </div>
          <div className=" hidden md:block">
            {speed === "105.31" && (
              <div className=" ">
                {sidebarOpen ? (
                  <Sidebar speed={speed} />
                ) : (
                  <div className="relative">
                    <p
                      onClick={toggleMoreInfo}
                      className="absolute right-0 text-xs md:text-base  2xl:text-xl flex justify-end cursor-pointer mt-10 opacity-50 hover:opacity-100 transition-opacity duration-500"
                    >
                      More Information
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </main>
  );
}
