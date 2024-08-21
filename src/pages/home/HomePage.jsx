import { useEffect } from "react";
import Banner from "../../components/home/banner/Banner";
import BookOfHadith from "../../components/home/bookOfHadith/BookOfHadith";
import CategorizedHadith from "../../components/home/categorizedHadith/CategorizedHadith";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <>
      <Banner />
      <BookOfHadith />
      <CategorizedHadith />
    </>
  );
};

export default HomePage;
