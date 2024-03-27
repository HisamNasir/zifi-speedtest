import axios from "axios";

const getCountryCode = async () => {
  try {
    const response = await axios.get("https://get.geojs.io/v1/ip/geo.json");

    console.log("ipstack response:", response.data);
    const countryCode = response.data.country_code;
    return countryCode;
  } catch (error) {
    console.error("Error fetching country code:", error);
    return null;
  }
};

export default getCountryCode;
