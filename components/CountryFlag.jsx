import React, { useState, useEffect } from "react";
import getCountryCode from "../lib/getCountryCode";
import { hasFlag } from "country-flag-icons";

const CountryFlag = () => {
  const [countryCode, setCountryCode] = useState(null);
  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const code = await getCountryCode();
        setCountryCode(code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };
    fetchCountryCode();
  }, []);

  return (
    <>
      {countryCode && hasFlag(countryCode) && (
        <div className=" aspect-square overflow-hidden">
          <img
            className=" rounded-md h-8 md:h-11 2xl:h-[50px] aspect-square overflow-hidden bg-white "
            alt={countryCode}
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
          />
        </div>
      )}
    </>
  );
};

export default CountryFlag;
