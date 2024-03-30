import React from "react";
import useLocationData from "../../hooks/useLocationData";

const ShortDate = () => {
  const locationData = useLocationData();

  const getShortDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      {locationData ? (
        <span>{getShortDate(locationData.date)}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default ShortDate;
