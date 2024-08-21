import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const DashboardLayout = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" w-full relative bg-[#fefdf8] dark:bg-[#312c2a] px-5 py-[27px]">
      <div
        className={`bg-black h-full duration-200 transition-all ${
          !isActive ? "opacity-0 w-0" : "opacity-90 w-full"
        } absolute top-0 left-0`}
      ></div>
      <div className="flex items-start md:gap-7">
        <Sidebar isActive={isActive} setIsActive={setIsActive} />
        <div className="w-full">
          <TopNav isActive={isActive} setIsActive={setIsActive} />
          <div className="px-6 mt-[25px] rounded-2xl py-[27px]">
            <Outlet />
          </div>
          <Footer dashboard={true} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
