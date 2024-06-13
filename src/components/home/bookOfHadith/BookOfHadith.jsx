import Container from "../../container/Container";
import HadithCards from "../../bookOfHadith/HadithCards";
import { useSelector } from "react-redux";

const BookOfHadithPage = () => {
  const { lang } = useSelector((state) => state.language);
  const content = {
    desc: {
      en: "The books of hadith are an important source of guidance and inspiration for Muslims. These books provide insight into the Seerat (biography) and guidance of the Prophet Muhammad (peace be upon him).",
      bn: "হাদিসের বই মুসলমানদের জন্য নির্দেশনা ও অনুপ্রেরণার একটি গুরুত্বপূর্ণ উৎস। এই বইগুলো নবী করিম হযরত মুহাম্মদ (সাঃ) এর সীরাত (জীবনী) এবং নির্দেশনার অন্তর্দৃষ্টি প্রদান করে।",
    },
  };
  return (
    <Container>
      <div className="text-center dark:text-[#fefdf8] dark:text dark:bg-[#312c2a] pt-14 lg:pt-20 pb-16 sticky z-10 bg-[#fefdf8]">
        <h2 className="text-3xl lg:text-5xl font-secondary font-bold text-[#5ab270]">
          {lang == "en" ? (
            <>
              Books of <span className="text-[#f3c556]">Hadith</span>
            </>
          ) : (
            <>
              <span className="text-[#f3c556]">হাদিসের</span> বই সমূহ
            </>
          )}
        </h2>
        <p className="text-lg w-[80%] lg:w-[60%] mx-auto mt-6 lg:mt-10 leading-8 tracking-wide font-medium">
          {content.desc[lang]}
        </p>
        <HadithCards />
      </div>
    </Container>
  );
};

export default BookOfHadithPage;
