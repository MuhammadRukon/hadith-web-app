import React from "react";
import { useSelector } from "react-redux";

const HadithCard = ({ hadith }) => {
  const { lang } = useSelector((state) => state.language);
  return (
    <div className="bg-stone-900 text-[#dadada] rounded-lg p-5 text-base lg:text-lg">
      <p>{lang == 'en' && 'Narrated by'} {hadith.narrator[lang]} {lang=='bn'&& "থেকে বর্ণিত"}:</p>
      <p>{hadith.text[lang]}</p>
      <p className="w-fit text-sm lg:text-base flex items-center gap-3">
        Authenticity:{" "}
        <span
          className="py-0.5 px-2 text:xs lg:text-sm rounded-md text-black font-bold"
          style={{ background: hadith.colorCode }}
        >
          {hadith.authenticity[lang]}
        </span>
      </p>
    </div>
  );
};

export default HadithCard;
