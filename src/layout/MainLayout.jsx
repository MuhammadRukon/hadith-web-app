import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="font-primary">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
