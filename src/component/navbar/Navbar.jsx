import Logo from "../logo/Logo";
import NavItems from "./NavItems";
import { HiOutlineBell } from "react-icons/hi2";
import profileImg from "./../../assets/profileImg.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const mainDiv = document.getElementById("main-div");
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
  return (
    <>
      <div className="text-[#0e1037] py-1 dark:bg-stone-700 dark:text-white bg-[#fff9ef] dark:shadow-[0_2px_20px_rgba(0,0,0,0.17)] shadow-[0_2px_10px_rgba(0,0,0,0.12)] fixed top-0 left-0 w-full z-50">
        <div className="xl:container mx-auto px-8 flex justify-between items-center">
          <Logo />
          <NavItems />
          <div className="flex items-center gap-4">
            <HiOutlineBell
              size={24}
              className=" cursor-pointer text-[#0e1037] dark:text-white hover:scale-110 duration-100 transform"
            />
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
