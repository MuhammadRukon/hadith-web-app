import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ footer, dashboard }) => {
  return (
    <Link to={"/"}
      className={`font-logo font-bold ${
        footer ? "text-[#fefdf8] text-xl" : dashboard ? "text-[#fefdf8] text-2xl md:text-3xl":"text-[#5ab270] text-2xl md:text-3xl"
      }`}
    >
      <span className="text-[#f3c556]">Hadith</span>Khujo
    </Link>
  );
};

export default Logo;
