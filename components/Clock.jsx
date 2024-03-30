import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLocationData,
  selectLocationData,
  selectLocationLoading,
  selectLocationError,
} from "./locationSlice";

const Clock = () => {
  const dispatch = useDispatch();
  const locationData = useSelector(selectLocationData);
  const loading = useSelector(selectLocationLoading);
  const error = useSelector(selectLocationError);

  useEffect(() => {
    dispatch(fetchLocationData());
  }, [dispatch]);

  return (
    <div className="tracking-[0.2em]">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {locationData && (
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
      )}
    </div>
  );
};

export default Clock;
