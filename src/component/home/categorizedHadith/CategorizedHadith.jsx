import React from "react";
import Container from "../../container/Container";
import CategoryCards from "../../categorizedHadith/CategoryCards";

const CategorizedHadith = () => {
  return (
    <Container>
      <div className="text-center dark:bg-stone-700 dark:text-[#fefdf8] pt-20 pb-16 sticky z-10 bg-[#fefdf8]">
        <h2 className="text-3xl lg:text-5xl font-secondary font-medium">
          Categorized <span className="text-[#f3c556]">Hadith</span>
        </h2>
        <p className="text-lg w-[80%] lg:w-[60%] mx-auto mt-10 leading-8 tracking-wide font-medium">
          Thematic hadiths are collections of hadiths that are organized by
          topic rather than by narrator or chain of transmission. Through this,
          it is possible to gain knowledge on certain topics of Islam easily.
          This compilation can also be helpful for scholars and teachers who
          want to teach specific subjects.
        </p>
        <CategoryCards />
      </div>
    </Container>
  );
};

export default CategorizedHadith;
