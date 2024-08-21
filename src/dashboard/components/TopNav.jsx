import { useEffect, useState } from "react";
import { FaBars, FaBell} from "react-icons/fa";
import profileImg from "./../../assets/profileImg.png";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const TopNav = ({setIsActive, isActive}) => {
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
  
  const [user, setUser] = useState({
    company: "Hadith Khujo",
    name: "Muhammad",
    image: profileImg,
  });
  const handleToggle = () => {
    setIsActive(true)
    console.log("top bar click", isActive);
  };

  return (
    <div className="bg-[#5ab270] dark:bg-[#24201e] rounded-full md:rounded-2xl w-full flex items-center justify-between p-5">
      {/* user image */}
      <div className="flex gap-3 md:gap-[18px]">
        <img
          src={user?.image}
          className="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        <div className="text-[#fefdf8]">
          <p className="text-xs">{user?.company || ""}</p>
          <p className="text-xl">{user?.name || ""}</p>
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
        <div className="hidden md:flex bg-[#fff9ef] dark:bg-stone-400 text-[#24201e] w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] justify-center items-center cursor-pointer rounded-full">
          <FaBell size={23} />
        </div>
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
