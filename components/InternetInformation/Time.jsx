import React from "react";

const Time = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;

  return (
    <div>
      <span>{formattedTime}</span>
    </div>
  );
};

export default Time;
