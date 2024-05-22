import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div id="main-div" className="font-primary">
      <Navbar />
      <div className="mt-[65px] bg-[#fefdf8] dark:bg-stone-700">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
