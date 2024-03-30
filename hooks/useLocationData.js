import { useState, useEffect } from "react";
import axios from "axios";

const useLocationData = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let cachedData = sessionStorage.getItem("locationData");
        if (cachedData) {
          setLocationData(JSON.parse(cachedData));
        } else {
          const position = await getCurrentPosition();
          const { latitude, longitude } = position.coords;
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const { city, country } = getLocationDetails(
            locationResponse.data.address
          );
          const newData = {
            city,
            country,
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
