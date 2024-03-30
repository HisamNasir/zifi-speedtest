import React from "react";
import useLocationData from "../../hooks/useLocationData";

const Country = () => {
  const locationData = useLocationData();

  return (
    <div>
      {locationData ? (
        <span>{locationData.country}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Country;
