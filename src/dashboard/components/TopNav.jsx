import { useState } from 'react';
import { FaBars, FaBell, FaSignOutAlt } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import profileImg from "./../../assets/profileImg.png";

const TopNav = () => {
        //user
  const [user, setUser] = useState({
    company: "Hadith Khujo",
    name: "Muhammad",
    image: profileImg
  });
  const handleToggle = ()=>{
    console.log("toggle");
  }
  //handle logout
  const handleLogout = () => {
    console.log("logged out button clicked");
  };
  return (
    <div className="bg-[#5ab270] dark:bg-[#24201e] rounded-full md:rounded-2xl w-full flex items-center justify-between p-5">
      {/* user image */}
      <div className="flex gap-3 md:gap-[18px]">
        <img
          src={user?.image}
          className="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        <div className="text-[#fefdf8]">
          <p className="text-xs">{user?.company || ""}</p>
          <p className="text-xl">{user?.name || ""}</p>
        </div>
      </div>

      {/* options */}
      <div className=" flex gap-3 md:gap-[15px]">
        <button
          onClick={handleToggle}
          className="bg-[#fff9ef] md:hidden w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] flex justify-center items-center cursor-pointer rounded-full"
        >
          <FaBars />
        </button>
        <div className="bg-[#fff9ef] w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] hidden md:flex justify-center items-center cursor-pointer rounded-full">
          <FaBell size={23} />
        </div>
        <div className="bg-[#fff9ef] w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] hidden md:flex justify-center items-center cursor-pointer rounded-full">
          <IoMdSettings size={26} />
        </div>
        <div
          onClick={handleLogout}
          className="bg-[#fff9ef] w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] hidden sm:flex justify-center items-center cursor-pointer rounded-full"
        >
          <FaSignOutAlt size={26} />
        </div>
      </div>
    </div>
  )
}

export default TopNav