import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useGetRole from "../../hooks/useGetRole";
const NavItems = ({ handleClick }) => {
  const { lang } = useSelector((state) => state.language);
  const [links, setLinks] = useState([
    { title: "Home", titleBn: "হোম", path: "/" },
    { title: "Hadith", titleBn: "হাদিস", path: "/hadith" },
    { title: "Hadith Books", titleBn: "হাদিসের বই", path: "/hadith-books" },
  ]);
  const role = useGetRole();
  useEffect(() => {
    role && role == "admin"
      ? setLinks([
          { title: "Dashboard", titleBn: "ড্যাশবোর্ড", path: "/dashboard" },
          ...links,
        ])
      : setLinks([
          { title: "Home", titleBn: "হোম", path: "/" },
          { title: "Hadith", titleBn: "হাদিস", path: "/hadith" },
          {
            title: "Hadith Books",
            titleBn: "হাদিসের বই",
            path: "/hadith-books",
          },
        ]);
  }, [role]);
  return (
    <>
      {links.map((link, idx) => (
        <NavLink onClick={handleClick} to={link.path} key={idx}>
          {lang == "en" ? link.title : link.titleBn}
        </NavLink>
      ))}
    </>
  );
};

export default NavItems;
