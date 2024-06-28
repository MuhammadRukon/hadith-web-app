import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const NavItems = () => {
  const { lang } = useSelector((state) => state.language);
  const links = [
    { title: "Dashboard", titleBn: "ড্যাশবোর্ড", path: "/dashboard" },
    { title: "Home", titleBn: "হোম", path: "/" },
    { title: "Hadith", titleBn: "হাদিস", path: "/hadith" },
    { title: "Hadith Books", titleBn: "হাদিসের বই", path: "/hadith-books" },
  ];
  return (
    <>
      {links.map((link, idx) => (
        <Link to={link.path} key={idx}>
          {lang == "en" ? link.title : link.titleBn}
        </Link>
      ))}
    </>
  );
};

export default NavItems;
