import axios from "axios";

const getCountryCode = async () => {
  try {
    const response = await axios.get("https://get.geojs.io/v1/ip/geo.json");

    console.log("ipstack response:", response.data);
    const countryCode = response.data.country_code;
    return countryCode;
  } catch (error) {
    return null;
  }
};

export default getCountryCode;
