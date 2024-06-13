import Logo from "../logo/Logo";
import NavItems from "./NavItems";
import profileImg from "./../../assets/profileImg.png";
import { MdOutlineDarkMode } from "react-icons/md";
import {  useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import Sidebar from "../sidebar/Sidebar";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = ({handleChangeLanguage, lang , handleThemeChange, theme}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <>
      <div className="text-[#0e1037] py-1 dark:bg-[#312c2a] dark:text-[#fefdf8] bg-[#fff9ef] dark:shadow-[0_2px_20px_rgba(0,0,0,0.17)] shadow-[0_2px_10px_rgba(0,0,0,0.12)] fixed top-0 left-0 w-full z-50">
        <div className="xl:container mx-auto px-8  h-[64px] flex justify-between items-center">
          <Logo />
          <ul className={`hidden sm:flex  gap-8 py-5 text-base ${lang=='bn'?"font-normal":"font-semibold"}`}>
            <NavItems setShow={setShowSidebar}/>
          </ul>
          <div className="hidden sm:flex  items-center gap-4">
            <div className="cursor-pointer" onClick={handleChangeLanguage}>
              {lang === "en" ? "বাংলা" : "English"}
            </div>
            <div
              className="cursor-pointer hover:scale-110 duration-100 transform"
              onClick={handleThemeChange}
            >
              {theme == "light" ? (
                <MdOutlineDarkMode size={24} />
              ) : (
                <MdOutlineLightMode size={24} />
              )}
            </div>
            <div className="w-8 h-8 border-2 cursor-pointer border-[#5ab270] rounded-full -mt-0.5 overflow-hidden">
              <div>
                <img src={profileImg} alt="profile-img" />
              </div>
            </div>
            
          </div>
          <div onClick={()=>setShowSidebar(true)} className="border-[2px] sm:hidden border-[#585858] dark:border-white rounded-md px-1 py-0.5">
              <IoMenuOutline size={26} color={theme == 'dark' ? "white":"#444444"}/>
            </div>
        </div>
        <Sidebar theme={theme} handleThemeChange={handleThemeChange} lang={lang} handleChangeLanguage={handleChangeLanguage} show={showSidebar} handleShow={setShowSidebar}/>
      </div>
    </>
  );
};

export default Navbar;
