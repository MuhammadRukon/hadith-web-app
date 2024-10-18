import { useContext, useEffect, useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import profileImg from "./../../assets/profileImg.png";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AppContext } from "../../provider/AppContext";
import { AuthContext } from "../../provider/AuthProvider";

const TopNav = ({ setIsActive }) => {
  const { theme, handleThemeChange } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const handleToggle = () => {
    setIsActive(true);
  };

  return (
    <div className="bg-[#5ab270] dark:bg-[#24201e] rounded-full md:rounded-2xl w-full flex items-center justify-between p-5">
      {/* user image */}
      <div className="flex gap-3 md:gap-[18px]">
        <img
          src={profileImg}
          className="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        <div className="text-[#fefdf8]">
          <p className="text-xl">{user?.displayName || ""}</p>
          <p className="text-xs">{user?.email || ""}</p>
        </div>
      </div>

      {/* options */}
      <div className=" flex gap-3 md:gap-[15px]">
        <button
          onClick={handleToggle}
          className="md:hidden flex bg-[#fff9ef] dark:bg-stone-400 text-[#24201e] w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] justify-center items-center cursor-pointer rounded-full"
        >
          <FaBars />
        </button>
        {/* <div className="hidden md:flex bg-[#fff9ef] dark:bg-stone-400 text-[#24201e] w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] justify-center items-center cursor-pointer rounded-full">
          <FaBell size={23} />
        </div> */}
        <div
          onClick={handleThemeChange}
          className="hidden md:flex bg-[#fff9ef] dark:bg-stone-400 text-[#24201e] w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] justify-center items-center cursor-pointer rounded-full"
        >
          {theme == "light" ? (
            <MdOutlineDarkMode size={30} />
          ) : (
            <MdOutlineLightMode size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
