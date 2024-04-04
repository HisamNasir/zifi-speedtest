import React from "react";

const NoInternet = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
      <div className="p-8  rounded-lg bg-neutral-600">
        <p>Please check your internet connection</p>
      </div>
    </div>
  );
};

export default NoInternet;
