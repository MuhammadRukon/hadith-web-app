import React from "react";
import MainLayout from "../../layout/MainLayout";
import Banner from "../../component/home/banner/Banner";
import BookOfHadith from "../../component/home/bookOfHadith/BookOfHadith";
import CategorizedHadith from "../../component/home/categorizedHadith/CategorizedHadith";

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <BookOfHadith />
      <CategorizedHadith />
    </MainLayout>
  );
};

export default HomePage;
