import React from "react";
import useLocationData from "../../hooks/useLocationData";

const City = () => {
  const locationData = useLocationData();

  return (
    <div>
      {locationData ? (
        <span>{locationData.city}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default City;
