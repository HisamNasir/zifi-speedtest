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
      {/* {countryCode && hasFlag(countryCode) && (
        <img
          className=" h-[30px] w-[30px] md:h-[35px] md:w-[35px] 2xl:h-[50px] 2xl:w-[50px] rounded-xl 2xl:rounded-2xl bg-white overflow-hidden object-cover "
          alt={countryCode}
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
        />
      )} */}
      <img
        className=" h-[30px] w-[30px] md:h-[35px] md:w-[35px] 2xl:h-[50px] 2xl:w-[50px] rounded-xl 2xl:rounded-2xl bg-white overflow-hidden object-cover "
        alt={countryCode}
        src="/Logos-icons/uk-flag.png"
      />
    </>
  );
};

export default CountryFlag;
