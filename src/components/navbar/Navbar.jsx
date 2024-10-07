import Logo from "../logo/Logo";
import NavItems from "./NavItems";
import profileImg from "./../../assets/profileImg.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import Sidebar from "../sidebar/Sidebar";
import { IoMenuOutline } from "react-icons/io5";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = ({ handleChangeLanguage, lang, handleThemeChange, theme }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logOut, handleToggleRefetch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    handleToggleRefetch();
    if (!user) {
      toast("Logged out successfully");
    }
  };
  return (
    <>
      <div className="text-[#0e1037] py-1 dark:bg-[#312c2a] dark:text-[#fefdf8] bg-[#fff9ef] dark:shadow-[0_2px_20px_rgba(0,0,0,0.17)] shadow-[0_2px_10px_rgba(0,0,0,0.12)] fixed top-0 left-0 w-full z-50">
        <div className="xl:container mx-auto px-8  h-[64px] flex justify-between items-center">
          <Logo />
          <ul
            className={`hidden sm:flex  gap-8 py-5 text-base ${
              lang == "bn" ? "font-normal" : "font-semibold"
            }`}
          >
            <NavItems setShow={setShowSidebar} />
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
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-8 h-8 border-2 relative cursor-pointer border-[#5ab270] rounded-full -mt-0.5 "
            >
              <div className="rounded-full overflow-hidden">
                <img src={profileImg} alt="profile-img" />
              </div>
              <div
                className={`bg-white dark:bg-stone-900 dark:text-white shadow-xl transition-all duration-200  overflow-hidden text-stone-700 rounded-lg absolute z-[10] right-0 ${
                  showDropdown ? "translate-y-2" : "-translate-y-96"
                }`}
              >
                {user ? (
                  <div className="flex flex-col">
                    <Link
                      to={"/profile"}
                      className="hover:bg-stone-400 hover:text-white px-4 pt-1.5"
                    >
                      profile
                    </Link>
                    <Link
                      to={"/bookmarks"}
                      className="hover:bg-stone-400 hover:text-white px-4"
                    >
                      bookmarks
                    </Link>
                    <p
                      onClick={handleLogout}
                      className="hover:bg-stone-400 hover:text-white px-4 pb-1"
                    >
                      logout
                    </p>
                  </div>
                ) : (
                  <p
                    onClick={() => navigate("/login")}
                    className="hover:bg-stone-400 hover:text-white px-4 pb-1"
                  >
                    login
                  </p>
                )}
              </div>
            </div>
          </div>
          <div
            onClick={() => setShowSidebar(true)}
            className="border-[2px] sm:hidden border-[#585858] dark:border-white rounded-md px-1 py-0.5"
          >
            <IoMenuOutline
              size={26}
              color={theme == "dark" ? "white" : "#444444"}
            />
          </div>
        </div>
        <Sidebar
          theme={theme}
          handleThemeChange={handleThemeChange}
          lang={lang}
          handleChangeLanguage={handleChangeLanguage}
          show={showSidebar}
          handleLogout={handleLogout}
          handleShow={setShowSidebar}
        />
      </div>
    </>
  );
};

export default Navbar;
