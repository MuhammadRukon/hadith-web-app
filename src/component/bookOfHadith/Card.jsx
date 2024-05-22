import React from "react";

const Card = ({ book }) => {
  return (
    <div className="card bg-[#fff9ef] dark:bg-stone-800 dark:text-[#fefdf8] hover:scale-105 transform duration-150 shadow-[0_6px_15px_rgba(0,0,0,0.1)] text-[#0e1037]">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book.name}</h2>
        <p>Number of Hadiths: {book.hadith_range}</p>
      </div>
    </div>
  );
};

export default Card;
