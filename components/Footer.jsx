import React from "react";

const Footer = () => {
  return (
    <div className=" grid grid-flow-col items-center">
      <img
        src="/Logos-icons/ZIG - ZIMO GROUP W.svg"
        width={96}
        height={50}
        className=" w-auto h-4 md:h-6 2xl:h-[35px]"
      />
      <div className="flex gap-2 md:gap-8 2xl:gap-12 justify-end items-center">
        <img
          src="/Logos-icons/ZTFR w.svg"
          width={96}
          height={50}
          className=" w-auto h-4 md:h-6 2xl:h-[35px]"
        />
        <img
          src="/Logos-icons/ZIMO MEET masked W.svg"
          width={96}
          height={50}
          className=" w-auto h-4 md:h-6 2xl:h-[35px]"
        />
      </div>
    </div>
  );
};

export default Footer;
