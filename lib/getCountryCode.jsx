import axios from "axios";

const getCountryCode = async () => {
  try {
    // Check if the data is already in session storage
    const storedData = sessionStorage.getItem("locationData");
    if (storedData) {
      return JSON.parse(storedData).country_code; // Return country code from stored data
    }

    // Fetch the data from the API
    const response = await axios.get("https://get.geojs.io/v1/ip/geo.json");
    const countryCode = response.data.country_code;

    // Save the fetched data in session storage
    sessionStorage.setItem("locationData", JSON.stringify(response.data));

    return countryCode;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default getCountryCode;
