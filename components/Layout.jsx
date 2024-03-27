import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className=" relative flex flex-col justify-between min-h-screen py-4 md:py-6 2xl:py-[40px] px-6 md:px-8 2xl:px-[50px] bg-black text-white">
      <header className=" ">
        <Header />
      </header>
      <main className="">{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
