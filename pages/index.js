import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [speed, setSpeed] = useState("0 mbps");
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleButtonClick = () => {
    setTimeout(() => {
      setSpeed("200 mbps");
    }, 500);

    setTimeout(() => {
      document.getElementById("imageButton").src = "new_image.png";
    }, 2000);
  };

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <main>
      <Layout>
        <div>
          <div>
            <p>Network Speed: {speed}</p>
            <motion.button
              whileTap={{ scale: 0.9 }} // Framer Motion effect on button click
              onClick={handleButtonClick}
            >
              <img
                id="imageButton"
                src="button.png" // Initial button image
                alt="Button"
                style={{ width: "100px", height: "100px" }}
              />
            </motion.button>
          </div>
          {speed === "200 mbps" && (
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
                <p onClick={toggleMoreInfo} style={{ cursor: "pointer" }}>
                  200mbps - Click for More Info
                </p>
              )}
            </div>
          )}
        </div>
      </Layout>
    </main>
  );
}
