import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { changeToBn, changeToEn } from "../redux/features/languageSlice";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // dark theme logic
  useEffect(() => {
    const mainDiv = document.getElementById("root");
    if (theme === "dark") {
      mainDiv.classList.add("dark");
      mainDiv.classList.remove("light");
    } else {
      mainDiv.classList.add("light");
      mainDiv.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

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
      <div className="mt-[65px] w-full dark-scroller bg-[#fefdf8] overflow-hidden dark:bg-[#312c2a]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
