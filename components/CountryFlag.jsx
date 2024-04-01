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
        <div className="h-[25px] w-[25px] md:h-[35px] md:w-[35px] 2xl:h-[50px] 2xl:w-[50px]">
          <Image
            className=" aspect-square rounded-md md:rounded-xl object-cover"
            width={50}
            height={50}
            alt={countryCode}
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
          />
        </div>
      )}
    </div>
  );
};

export default CountryFlag;
