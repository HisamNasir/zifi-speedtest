import React from "react";
import useLocationData from "@/hooks/useLocationData";

const Clock = () => {
  const locationData = useLocationData();

  return (
    <div className="tracking-[0.2em]">
      {locationData ? (
        <div>
          <p>
            <span>{locationData.time}</span>{" "}
            <span>
              {locationData.city}, {locationData.country}
            </span>
          </p>
          <p className="text-[#BE9F56]">
            <span>
              {locationData.weekday.toUpperCase()}, {locationData.day}{" "}
              {locationData.month.toUpperCase()} {locationData.year}
            </span>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Clock;
