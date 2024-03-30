import React from "react";
import useLocationData from "../../hooks/useLocationData";

const Longitude = () => {
  const locationData = useLocationData();

  return (
    <div>
      {locationData ? (
        <span>{locationData.longitude}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Longitude;
