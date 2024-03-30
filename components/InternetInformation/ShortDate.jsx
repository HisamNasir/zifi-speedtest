import React from "react";
import useLocationData from "../../hooks/useLocationData";

const ShortDate = () => {
  const locationData = useLocationData();

  return (
    <div>
      {locationData ? (
        <span>
          {locationData.day}/{locationData.month}/{locationData.year}
        </span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default ShortDate;
