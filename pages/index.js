import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [speed, setSpeed] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [buttonImage, setButtonImage] = useState(
    "/Logos-icons/ZIFI Circle Test.png"
  );

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

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <main>
      <Layout>
        <div>
          <div className="flex max-h-min  justify-end items-center">
            <p className=" 2xl:text-[293pt] p-0 mr-4">{speed}</p>
            <div className=" flex flex-col justify-center gap-8">
              <p className=" normal-case 2xl:text-[44px]">Mbps</p>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleButtonClick}
              >
                {buttonImage === "/Logos-icons/ZIFI Circle Test.png" && (
                  <p className=" flex justify-center items-center absolute uppercase 2xl:text-[27px] 2xl:w-[113px] 2xl:h-[113px]">
                    Go
                  </p>
                )}
                <motion.img
                  src={buttonImage}
                  alt="Button"
                  className=" 2xl:w-[113px] 2xl:h-[113px] absolute"
                  id="imageButton"
                />
              </motion.button>
            </div>
          </div>
          {speed === "105.31" && (
            <div>
              {showMoreInfo ? (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>More Info: Lorem ipsum dolor sit amet.</p>
                </motion.div>
              ) : (
                <p
                  onClick={toggleMoreInfo}
                  className=" flex justify-end cursor-pointer"
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
