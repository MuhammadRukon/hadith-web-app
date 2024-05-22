import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#5ab270] dark:bg-stone-700 footer-center py-3 sticky z-10 text-[#fefdf8]">
      <aside>
        <div className="font-bold text-xl">
          <Link to={"/"}>
            <Logo footer={true} />
          </Link>
        </div>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
