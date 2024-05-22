import React from "react";
import { useSelector } from "react-redux";

const Card = ({ book }) => {
  const { lang } = useSelector((state) => state.language);
  console.log(book)
  return (
    <div className="card bg-[#fff9ef] dark:bg-stone-800 dark:text-[#fefdf8] hover:scale-105 transform duration-150 shadow-[0_6px_15px_rgba(0,0,0,0.1)] text-[#0e1037]">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{lang == "en" ? book.name : book.nameBn}</h2>
        <p>
          {" "}
          {lang == "en"
            ? `Number of Hadiths: ${book.hadith_range}`
            : `হাদিসের সংখ্যাঃ ${book.hadith_range_bn}`}
        </p>
      </div>
    </div>
  );
};

export default Card;
