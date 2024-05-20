import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import Banner from "../../component/home/banner/Banner";
import BookOfHadith from "../../component/home/bookOfHadith/BookOfHadith";
import CategorizedHadith from "../../component/home/categorizedHadith/CategorizedHadith";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(()=>{  
    AOS.init({
      duration:600,
    })
  },[])
  return (
    <MainLayout>
      <div data-aos="zoom-in">
      <Banner />
      </div>
    
      <BookOfHadith />
      <CategorizedHadith />
    </MainLayout>
  );
};

export default HomePage;
