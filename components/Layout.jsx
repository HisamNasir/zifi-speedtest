import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className=" relative overflow-hidden flex flex-col justify-between h-full min-h-screen pb-[24px] pt-[12px] md:py-6 2xl:py-[40px] px-[18px] md:px-8 2xl:px-[50px] bg-black text-white">
      <header>
        <Header />
      </header>
      <main className="">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
