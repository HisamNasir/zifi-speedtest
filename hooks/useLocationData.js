import { useState, useEffect } from "react";
import axios from "axios";

const useLocationData = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let storedData = sessionStorage.getItem("locationData");
        if (storedData) {
          setLocationData(JSON.parse(storedData));
        } else {
          const position = await getCurrentPosition();
          const { latitude, longitude } = position.coords;
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const { city, country } = getLocationDetails(
            locationResponse.data.address
          );
          const currentDate = new Date();
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          };
          const formattedDate = currentDate.toLocaleDateString(
            undefined,
            options
          );
          const formattedTime = currentDate.toLocaleTimeString([], options);
          const [weekday, day, month, year] = formattedDate.split(/,\s|\s/);
          const newData = {
            city,
            country,
            weekday,
            month,
            day,
            year,
            date: formattedDate,
            time: formattedTime,
            latitude,
            longitude,
          };
          setLocationData(newData);
          sessionStorage.setItem("locationData", JSON.stringify(newData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getLocationDetails = (address) => {
    const city =
      address.city ||
      address.town ||
      address.village ||
      address.hamlet ||
      address.suburb;
    const country = address.country;
    return { city, country };
  };

  return locationData;
};

export default useLocationData;
