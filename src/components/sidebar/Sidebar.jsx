import { Link, useNavigate } from "react-router-dom";
import NavItems from "../navbar/NavItems";
import {
  MdCancelPresentation,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Sidebar = ({
  show,
  handleShow,
  handleChangeLanguage,
  lang,
  handleThemeChange,
  handleLogout,
  theme,
}) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div
      className={`inline-block transition duration-200 ${
        show ? "translate-x-0" : "translate-x-[-1000px]"
      } md:hidden absolute top-0 left-0 w-full max-h-[100vh] h-[100vh] bg-[#fefdf8] dark:bg-[#312c2a]`}
    >
      <div className="w-full relative text-center">
        <div
          onClick={() => handleShow(false)}
          className="absolute right-6 top-4 text-xl dark:text-white text-[#444444]"
        >
          <MdCancelPresentation size={30} />
        </div>

        <ul className="flex flex-col gap-8 pb-5 pt-16 text-base font-semibold">
          <NavItems
            onClick={() => {
              handleShow(false);
            }}
          />

          <li className="cursor-pointer" onClick={handleChangeLanguage}>
            {lang === "en" ? "বাংলা" : "English"}
          </li>
          <li
            className="ml-2 flex justify-center items-center gap-3"
            onClick={handleThemeChange}
          >
            {theme == "light" ? (
              <>
                {lang == "bn" ? "অন্ধকার করুন" : "Night mode"}{" "}
                <MdOutlineDarkMode size={20} />
              </>
            ) : (
              <>
                {lang == "bn" ? "আলোকিত করুন" : "Light mode"}
                <MdOutlineLightMode size={20} />
              </>
            )}
          </li>
          {user ? (
            <>
              <li>profile</li>
              <Link to={"/bookmarks"}>bookmarks</Link>
              <li onClick={handleLogout}>logout</li>
            </>
          ) : (
            <li onClick={() => navigate("/login")}>login</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
