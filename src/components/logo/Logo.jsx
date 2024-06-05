import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ footer }) => {
  return (
    <Link to={"/"}
      className={`font-logo text-xl font-bold ${
        footer ? "text-[#fefdf8]" : "text-[#5ab270]"
      }`}
    >
      <span className="text-[#f3c556]">Hadith</span>Khujo
    </Link>
  );
};

export default Logo;
