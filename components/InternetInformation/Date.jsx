import React from "react";
import useLocationData from "../../hooks/useLocationData";

const Date = () => {
  const locationData = useLocationData();

  return (
    <div>
      {locationData ? (
        <span>{locationData.date}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Date;
