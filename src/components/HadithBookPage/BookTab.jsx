import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookTab = ({ item }) => {
  const { lang } = useSelector((state) => state.language);
  return (
    <Link
      to={`${item._id}`}
      className="flex group justify-between px-5 py-2 my-2 bg-[#fff9ef] dark:bg-[#24201e] dark:text-[#fefdf8]  transform duration-200 shadow-[0_2px_7px_rgba(0,0,0,0.19)] dark:shadow-none rounded-lg text-[#0e1037]"
    >
      <h2 className="text-sm lg:text-base group-hover:underline capitalize">
        {item.name[lang]}
      </h2>
      <p className="text-xs lg:text-sm">
        {lang == "en" ? `Number of Hadiths: ` : `হাদিসের সংখ্যাঃ `}
        {item.hadith_range[lang]}
      </p>
    </Link>
  );
};

export default BookTab;
