import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#5ab270] footer-center py-3 text-white">
      <aside>
        <p className="font-bold text-xl">
          <Link to={"/"}>
            <Logo footer={true} />
          </Link>
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
