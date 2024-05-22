import React, { useState } from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div id="main-div" className="font-primary bg-[#fefdf8] dark:stroke-neutral-700">
      <Navbar />
      <div className="mt-[65px]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
