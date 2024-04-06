import React, { useEffect, useState } from "react";

const CheckInternet = () => {
  const [isOnline, setIsOnline] = useState(true); // Assume online by default

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  const openNetworkSettings = () => {
    // Open network settings window
    const userAgent = navigator.userAgent.toLowerCase();
    if (/android/.test(userAgent)) {
      const intent = new Intent(Settings.ACTION_WIFI_SETTINGS);
      startActivity(intent);
    } else {
      // For other platforms, open the network settings using a generic URL
      window.open("ms-settings:network", "_blank");
    }
  };

  return (
    <div className={!isOnline ? "block" : "hidden"}>
      <div className="sidebar h-full absolute top-0 right-0  z-10 w-full  text-xs md:text-sm 2xl:text-xl text-white">
        <div className="h-full top-0 left-0  z-10 w-full md:bg-opacity-90 flex flex-col justify-between min-h-[100dvh] pb-[24px] pt-[12px] md:py-6 2xl:py-[40px] px-[18px] md:px-8 2xl:px-[50px] bg-black ">
          <header className="relative max-md:space-y-[44px] h-[25px] md:h-8 2xl:h-[50px]">
            <div className="grid grid-flow-col h-full items-center">
              <p className="text-center">
                you dont seem to be connected to internet
              </p>
            </div>
          </header>
          <div className="flex items-center justify-center max-lg:py-[30px] max-md:pb-[0px] md:my-2 h-[80vh] overflow-auto">
            <div className="flex flex-col items-center gap-5 md:gap-20 2xl:gap-[100px] w-full">
              <img
                src="/Logos-icons/No Internet Connection Grouped.svg"
                width={96}
                height={244}
                className="h-auto w-[140px] md:w-[200px] 2xl:w-[244px] max-h-[40px] overflow-hidden object-cover flex items-center"
              />
              <p className="text-center">no internet connection</p>
              <div className="flex gap-2 text-center justify-center ">
                <p className="text-center">
                  check your connection or try again{" "}
                </p>
                <img
                  src="/Logos-icons/Refresh - No Internet Connection.svg"
                  width={18}
                  height={18}
                  className="h-auto w-[8px] md:w-[14px] 2xl:w-[18px]"
                />
              </div>
              <p
                className="text-center opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                onClick={openNetworkSettings}
              >
                internet settings
              </p>
            </div>
          </div>
          <footer className="grid grid-flow-col items-center">
            <img
              src="/Logos-icons/ZIG - ZIMO GROUP W.svg"
              width={96}
              height={50}
              className="w-auto h-5 md:h-6 2xl:h-[35px]"
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CheckInternet;
