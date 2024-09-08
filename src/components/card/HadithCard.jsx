import React from "react";
import { useSelector } from "react-redux";

const HadithCard = ({ hadith }) => {
  console.log(hadith);
  const { lang } = useSelector((state) => state.language);
  return (
    <div className="tracking-wider bg-[#fff9ef] shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:bg-stone-900 dark:text-[#dadada] rounded-lg p-5 text-base lg:text-lg">
      <p className="">
        {lang == "en" && "Narrated by"} {hadith.narrator[lang]}{" "}
        {lang == "bn" && "থেকে বর্ণিত"}:
      </p>
      <div className="flex flex-col-reverse lg:flex-row leading-relaxed gap-6 text-lg lg:text-xl my-4">
        {" "}
        <p className="text-left flex-1">{hadith.text[lang]}</p>{" "}
        <p className="text-right flex-1 text-xl lg:text-2xl">
          {hadith.text.ar}
        </p>
      </div>
      <p className="w-fit text-sm lg:text-base flex items-center gap-3">
        Authenticity:{" "}
        <span
          className="py-0.5 px-2 text:xs lg:text-sm rounded-md text-black font-bold"
          style={{ background: hadith.colorCode }}
        >
          {hadith?.authenticity[lang]}
        </span>
      </p>
    </div>
  );
};

export default HadithCard;
