import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className=" relative flex flex-col justify-between h-full min-h-screen py-4 md:py-6 2xl:py-[40px] px-6 md:px-8 2xl:px-[50px] bg-black text-white">
      <header className=" z-50 ">
        <Header />
      </header>
      <main className="">{children}</main>
      <footer className=" z-50">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
