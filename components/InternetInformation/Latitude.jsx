import React from "react";
import useLocationData from "../../hooks/useLocationData";

const Latitude = () => {
  const locationData = useLocationData();

  return (
    <div>
      {locationData ? (
        <span>{locationData.latitude}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Latitude;
