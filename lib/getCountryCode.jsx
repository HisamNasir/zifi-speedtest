import axios from "axios";

const getCountryCode = async () => {
  try {
    const storedData = sessionStorage.getItem("locationData");
    if (storedData) {
      return JSON.parse(storedData).country_code;
    }
    const response = await axios.get("https://get.geojs.io/v1/ip/geo.json");
    const countryCode = response.data.country_code;
    console.log("ipstack response:", response.data);
    sessionStorage.setItem("locationData", JSON.stringify(response.data));

    return countryCode;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default getCountryCode;
