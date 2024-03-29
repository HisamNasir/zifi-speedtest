import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="grid grid-flow-col items-center">
      {isMobile ? (
        <>
          <img
            src="/Logos-icons/ZTFR w.svg "
            width={96}
            height={50}
            className="w-auto h-5 md:h-6 2xl:h-[35px]"
          />
          <img
            src="/Logos-icons/ZIG - ZIMO GROUP W.svg"
            width={96}
            height={50}
            className="w-auto h-5 md:h-6 2xl:h-[35px] mx-auto"
          />
          <img
            src="/Logos-icons/ZIMO MEET masked W.svg"
            width={96}
            height={50}
            className="w-auto h-5 md:h-6 2xl:h-[35px] ml-auto"
          />
        </>
      ) : (
        <>
          <img
            src="/Logos-icons/ZIG - ZIMO GROUP W.svg"
            width={96}
            height={50}
            className="w-auto h-5 md:h-6 2xl:h-[35px]"
          />
          <div className="flex gap-2 md:gap-8 2xl:gap-12 justify-end items-center">
            <img
              src="/Logos-icons/ZTFR w.svg"
              width={96}
              height={50}
              className="w-auto h-5 md:h-6 2xl:h-[35px]"
            />
            <img
              src="/Logos-icons/ZIMO MEET masked W.svg"
              width={96}
              height={50}
              className="w-auto h-5 md:h-6 2xl:h-[35px]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
