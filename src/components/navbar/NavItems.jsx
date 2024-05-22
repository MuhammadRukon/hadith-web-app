import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const NavItems = () => {
  const { lang } = useSelector((state) => state.language);
  const links = [
    { title: "Home", titleBn: "হোম", path: "/" },
    { title: "Hadith", titleBn: "হাদিস", path: "/hadith" },
    { title: "Hadith Books", titleBn: "হাদিসের বই", path: "/hadith-books" },
  ];
  return (
    <ul className="flex gap-8 py-5 text-base font-semibold">
      {links.map((link, idx) => (
        <NavLink to={link.path} key={idx}>
          {lang == "en" ? link.title : link.titleBn}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavItems;
