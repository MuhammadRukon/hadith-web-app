import { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  const [active, setActive] = useState(false);
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) => {
        setActive(isActive ? isActive : "");
        return `flex group items-center px-2.5 py-2 my-5 rounded-xl hover:shadow-md hover:bg-[#fefdf8] hover:dark:bg-stone-950  hover:text-[#2D3748] hover:dark:text-[#fefdf8] transition-colors duration-300 transform  ${
          isActive
            ? "bg-[#fefdf8] dark:bg-stone-950 group text-[#2D3748] dark:text-[#fefdf8] shadow-md"
            : "text-[#fefdf8]"
        }`;
      }}
    >
      <Icon
        className={`${
          active ? "bg-[#5ab270] text-[#fefdf8] dark:text-stone-950" : "bg-[#fefdf8] dark:bg-transparent text-[#5ab270]"
        } w-8 h-8 p-1 transform duration-200 group-hover:text-white group-hover:dark:text-stone-950 group-hover:bg-[#5ab270] rounded-lg`}
      />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
