import React from "react";
import { useSelector } from "react-redux";

const Card = ({ item }) => {
  const { lang } = useSelector((state) => state.language);
  console.log(item);
  return (
    <div className="card bg-[#fff9ef] h-full dark:bg-[#24201e] dark:text-[#fefdf8] hover:scale-105 transform duration-150 shadow-[0_6px_15px_rgba(0,0,0,0.1)] dark:shadow-none text-[#0e1037]">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-base lg:text-xl capitalize">
          {item.name? item.name[lang] : item.book_name[lang]}
        </h2>
        <p className="text-sm lg:text-base">
          {lang == "en" ? `Number of Hadiths: ` : `হাদিসের সংখ্যাঃ `}
          {item.hadith_range[lang]}
        </p>
      </div>
    </div>
  );
};

export default Card;
