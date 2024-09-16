import React, { useEffect, useState } from "react";
import Container from "../../container/Container";
import CategoryCards from "../../categorizedHadith/CategoryCards";
import { useSelector } from "react-redux";
import useGetSubjects from "../../../hooks/useGetSubjects";

const CategorizedHadith = () => {
  const { lang } = useSelector((state) => state.language);
  const content = {
    desc: {
      en: "Thematic hadiths are collections of hadiths that are organized by topic rather than by narrator or chain of transmission. Through this, it is possible to gain knowledge on certain topics of Islam easily. This compilation can also be helpful for scholars and teachers who want to teach specific subjects.",
      bn: " বিষয়ভিত্তিক হাদীস হল হাদীসের সংগ্রহ যা বর্ণনাকারী বা ট্রান্সমিশনের চেইন দ্বারা নয় বরং বিষয় অনুসারে সংগঠিত হয়। এর মাধ্যমে খুব সহজেই ইসলামের নির্দিষ্ট কিছু বিষয়ে জ্ঞান অর্জন করা সম্ভব। এই সংকলনটি পণ্ডিত এবং শিক্ষকদের জন্যও সহায়ক হতে পারে যারা নির্দিষ্ট বিষয় পড়াতে চান।",
    },
  };
  const categories = useGetSubjects();
  console.log(categories);
  return (
    <Container>
      <div className="text-center dark:bg-[#312c2a] dark:text-[#fefdf8] py-14 lg:pt-20 sticky z-10 bg-[#fefdf8]">
        <h2 className="text-3xl lg:text-5xl font-secondary font-medium"></h2>
        <h2 className="text-3xl lg:text-5xl font-secondary font-bold text-[#5ab270]">
          {lang == "en" ? (
            <>
              Categorized <span className="text-[#f3c556]">Hadith</span>
            </>
          ) : (
            <>
              বিষয়ভিত্তিক <span className="text-[#f3c556]">হাদিস</span>
            </>
          )}
        </h2>
        <p className="text-lg w-[80%] lg:w-[60%] mx-auto mt-6 lg:mt-10 leading-8 tracking-wide font-medium">
          {content.desc[lang]}
        </p>
        <CategoryCards categories={categories} />
      </div>
    </Container>
  );
};

export default CategorizedHadith;
