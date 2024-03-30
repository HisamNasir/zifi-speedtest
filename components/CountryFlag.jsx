import React, { useState, useEffect } from "react";
import getCountryCode from "../lib/getCountryCode";
import { hasFlag } from "country-flag-icons";
import Image from "next/image";

const CountryFlag = () => {
  const [countryCode, setCountryCode] = useState(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      const code = await getCountryCode();
      setCountryCode(code);
    };
    fetchCountryCode();
  }, []);

  return (
    <div className=" ">
      {countryCode && hasFlag(countryCode) && (
        <div>
          <Image
            className=" aspect-square rounded-md object-cover"
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
