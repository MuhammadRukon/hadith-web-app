
import Container from "../../container/Container";
import HadithCards from "../../bookOfHadith/HadithCards";

const BookOfHadithPage = () => {

  return (
    <Container>
      <div className="text-center dark:text-[#fefdf8] dark:text dark:bg-stone-700 pt-20 pb-16 sticky z-10 bg-[#fefdf8]">
        <h2 className="text-3xl lg:text-5xl font-secondary font-medium">
          Books of <span className="text-[#f3c556]">Hadith</span>
        </h2>
        <p className="text-lg w-[80%] lg:w-[60%] mx-auto mt-10 leading-8 tracking-wide font-medium">
          The books of hadith are an important source of guidance and
          inspiration for Muslims. These books provide insight into the Seerat
          (biography) and guidance of the Prophet Muhammad (peace be upon him).
        </p>
        <HadithCards />
      </div>
    </Container>
  );
};

export default BookOfHadithPage;
