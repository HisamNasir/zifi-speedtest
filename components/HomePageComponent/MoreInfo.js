import React from "react";
import Sidebar from "@/components/Sidebar";

const MoreInfo = ({ speed, sidebarOpen, toggleMoreInfo }) => {
  return (
    <div className="hidden md:block">
      {speed === "105.31" && (
        <div className="">
          {sidebarOpen ? (
            <Sidebar speed={speed} />
          ) : (
            <div className="relative">
              <p
                onClick={toggleMoreInfo}
                className="absolute right-0 text-xs md:text-base 2xl:text-xl flex justify-end cursor-pointer mt-10 opacity-50 hover:opacity-100 transition-opacity duration-500"
              >
                More Information
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
