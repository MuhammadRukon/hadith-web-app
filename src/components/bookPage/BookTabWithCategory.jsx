import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BookTabWithCategory = ({ item, setBookId, setChapterId }) => {
  const { lang } = useSelector((state) => state.language);

  const bookId = item._id;
  const { id } = useParams();
  const isSelected = id == item._id;

  useEffect(() => {
    setBookId(id);
  }, [id]);
  return (
    <div
      className={`px-2 py-3 dark:text-[#fefdf8] text-[#0e1037] my-2 rounded-lg transition-all duration-150 ${
        isSelected
          ? "bg-[#fff9ef] dark:bg-stone-900  shadow-[0_2px_7px_rgba(0,0,0,0.19)]"
          : "dark:bg-stone-800 shadow-[0_2px_7px_rgba(0,0,0,0.08)] dark:shadow-none"
      }`}
    >
      <Link to={`/hadith-books/${item._id}`}>
        <h2
          className={`${
            isSelected && "font-semibold"
          } text-sm lg:text-base pl-1 lg:pl-3 text-nowrap capitalize`}
        >
          {item.name[lang]}
        </h2>
      </Link>
      {isSelected && item?.chapters?.length > 0 && (
        <select
          onChange={(e) => setChapterId(e.target.value)}
          className={`focus:outline-none capitalize px-3 py-2 mt-2 w-full text-xs md:text-sm bg-[#fcfaf6] dark:bg-[#100e0d] shadow-[0_2px_7px_rgba(0,0,0,0.19)] dark:shadow-none rounded-lg `}
          name=""
          id=""
        >
          {item?.chapters?.map((chapter) => {
            return (
              <option key={chapter?._id} value={chapter?._id}>
                {chapter?.name[lang]}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default BookTabWithCategory;
