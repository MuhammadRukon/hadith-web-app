import React from "react";

const Logo = ({ footer }) => {
  return (
    <p
      className={`font-logo text-xl font-bold ${
        footer ? "text-[#fefdf8]" : "text-[#5ab270]"
      }`}
    >
      <span className="text-[#f3c556]">Hadith</span>Khujo
    </p>
  );
};

export default Logo;
