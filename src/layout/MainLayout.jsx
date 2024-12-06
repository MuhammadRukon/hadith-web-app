import { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { changeToBn, changeToEn } from "../redux/features/languageSlice";
import { Outlet } from "react-router-dom";
import { AppContext } from "../provider/AppContext";

const MainLayout = () => {
  const { theme, handleThemeChange } = useContext(AppContext);
  // bangla / english
  const { lang } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const handleChangeLanguage = () => {
    lang === "en" ? dispatch(changeToBn()) : dispatch(changeToEn());
  };

  return (
    <div className="font-primary">
      <Navbar
        handleChangeLanguage={handleChangeLanguage}
        lang={lang}
        handleThemeChange={handleThemeChange}
        theme={theme}
      />
      <div className="pt-[65px] w-full dark-scroller bg-[#fefdf8] overflow-hidden dark:bg-[#312c2a]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
