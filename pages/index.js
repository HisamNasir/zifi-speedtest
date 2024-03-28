import React, { useState } from "react";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import { Lato } from "next/font/google";

const inter = Lato({
  subsets: ["latin"],
  weight: "100",
});

export default function Home() {
  const [speed, setSpeed] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [buttonImage, setButtonImage] = useState(
    "/Logos-icons/ZIFI Circle Test.png"
  );
  const [showSpeedDisplay, setShowSpeedDisplay] = useState(true);
  const [speedDisplayStyle, setSpeedDisplayStyle] = useState({
    zIndex: 0,
    opacity: 1,
  });

  const handleButtonClick = () => {
    setButtonImage("/Logos-icons/ZIFI Circle Download Green.png");

    let initialSpeed = 0;
    const interval = setInterval(() => {
      initialSpeed += 1.0; // Increment by 1.00
      const roundedSpeed = Math.min(initialSpeed, 105.31).toFixed(2); // Limit speed to 105.31 and round to two decimal places
      setSpeed(roundedSpeed);
      if (initialSpeed >= 105.31) {
        clearInterval(interval);
        setTimeout(() => {
          setButtonImage("/Logos-icons/ZIFI Circle Test.png");
        }, 2000); // Delay for 2 seconds before switching back to the original button image
      }
    }, 20); // Speed increase interval of 200 milliseconds
  };
  const handleCloseSidebar = () => {
    setShowMoreInfo(false);
    // Additional logic to reset speed or perform any other actions upon closing the sidebar
  };
  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
    setShowSpeedDisplay(!showSpeedDisplay); // Toggle visibility of speed display
  };

  return (
    <main>
      <Layout className="">
        <div className=" h-full">
          <div className="flex max-h-min justify-end items-center">
            <>
              <p className=" text-6xl md:text-8xl lg:text-[200px] 2xl:text-[343px] p-0 leading-none pb-10 ">
                {Math.floor(parseFloat(speed))}
              </p>

              <div className=" flex flex-col justify-center gap-2 lg:gap-6 2xl:gap-8">
                <p className=" normal-case text-lg md:text-[25px] lg:tex-[35px] 2xl:text-[44px]">
                  Mbps
                </p>
                <button
                  onClick={handleButtonClick}
                  className=" h-full relative"
                >
                  <div className=" absolute">
                    {buttonImage === "/Logos-icons/ZIFI Circle Test.png" && (
                      <p className=" flex justify-center items-center  uppercase lg:text-xl 2xl:text-[35px] w-[40px] lg:w-[80px] 2xl:w-[130px] h-[40px] lg:h-[80px] 2xl:h-[130px]">
                        Go
                      </p>
                    )}
                  </div>
                  <img
                    src={buttonImage}
                    alt="Button"
                    className="w-[40px] lg:w-[80px] 2xl:w-[130px] h-[40px] lg:h-[80px] 2xl:h-[130px] "
                    id="imageButton"
                  />
                </button>
              </div>
            </>
          </div>
          {speed === "105.31" && (
            <div>
              {showMoreInfo ? (
                <Sidebar
                  toggleMoreInfo={toggleMoreInfo}
                  speed={speed}
                  setSpeed={setSpeed}
                  handleClose={handleCloseSidebar}
                />
              ) : (
                <p
                  onClick={toggleMoreInfo}
                  className=" text-xs md:text-base lg:text-xl 2xl:text-xl flex justify-end cursor-pointer mt-10"
                >
                  More Information
                </p>
              )}
            </div>
          )}
        </div>
      </Layout>
    </main>
  );
}
