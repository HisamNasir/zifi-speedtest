import React, { useState, useEffect } from "react";
import { hasFlag } from "country-flag-icons";
import getCountryCode from "../lib/getCountryCode";

const CountryFlag = () => {
  const [countryCode, setCountryCode] = useState(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        let storedCountryCode = localStorage.getItem("countryCode");
        if (!storedCountryCode) {
          const code = await getCountryCode();
          storedCountryCode = code;
          localStorage.setItem("countryCode", code);
        }
        setCountryCode(storedCountryCode);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };
    fetchCountryCode();
  }, []);

  return (
    <>
      {countryCode && hasFlag(countryCode) && (
        <img
          className=" h-[35px] w-[40px] lg:h-[40px] lg:w-[40px] 2xl:h-[50px] 2xl:w-[50px] rounded-xl 2xl:rounded-2xl  bg-white"
          alt={countryCode}
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
        />
      )}
    </>
  );
};

export default CountryFlag;
