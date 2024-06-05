import { Link } from "react-router-dom";
import NavItems from "../navbar/NavItems";
import {
  MdCancelPresentation,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

const Sidebar = ({
  show,
  handleShow,
  handleChangeLanguage,
  lang,
  handleThemeChange,
  theme,
}) => {
  return (
    <div
      className={`inline-block transition duration-200 ${
        show ? "translate-x-0" : "translate-x-[-1000px]"
      } md:hidden absolute top-0 left-0 w-full max-h-[100vh] h-[100vh] bg-[#fefdf8] dark:bg-stone-700`}
    >
      <div className="w-full relative text-center">
        <div
          onClick={() => handleShow(false)}
          className="absolute right-6 top-4 text-xl"
        >
          <MdCancelPresentation size={30} color="#444444"/>
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
                {lang == "bn"? "অন্ধকার করুন":"Night mode"} <MdOutlineDarkMode size={20} />
              </>
            ) : (
              <>
          
                {lang == "bn"? "আলোকিত করুন":"Light mode"}<MdOutlineLightMode size={20} />
              </>
            )}
          </li>
          <Link>{lang == 'bn'? "প্রোফাইল":"Profile"}</Link>
          <button>{lang == 'bn'? "বেরিয়ে যান":"Logout"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
