import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
     
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        const mainDiv = document.getElementById("root");
        if (theme === "dark") {
          mainDiv.classList.add("dark");
          mainDiv.classList.remove("light");
        } else {
          mainDiv.classList.add("light");
          mainDiv.classList.remove("dark");
        }
      }, [theme]);
  return (
    <div className=" w-full bg-[#fefdf8] dark:bg-[#312c2a] px-5 py-[27px]">
      <div className="flex items-start gap-7">
        <Sidebar />
        <div className="w-full">
          <TopNav />
         <div className="px-6 mt-[25px] rounded-2xl py-[27px]">
         <Outlet/>
         </div>
         <Footer dashboard={true}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
