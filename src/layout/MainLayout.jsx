import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="font-primary">
      <Navbar />
      <div className="mt-[65px]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
