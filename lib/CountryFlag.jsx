import React, { useState, useEffect } from "react";
import getCountryCode from "./getCountryCode";
import { hasFlag } from "country-flag-icons";
import Image from "next/image";

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
    <div className="">
      {countryCode && hasFlag(countryCode) && (
        <div>
          <Image
            className="outline outline-1 outline-slate-300 aspect-square rounded-md object-cover"
            width={25}
            height={25}
            alt={countryCode}
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
          />
        </div>
      )}
    </div>
  );
};

export default CountryFlag;
