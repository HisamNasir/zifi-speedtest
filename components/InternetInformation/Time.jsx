import React from "react";
import useLocationData from "../../hooks/useLocationData";

const Time = () => {
  const locationData = useLocationData();

  return (
    <div>
      {locationData ? (
        <span>{locationData.time}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Time;
