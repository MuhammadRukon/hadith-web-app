import MenuItem from "./MenuItem";
// icons
import { FaUser } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa6";
import { GrChapterAdd } from "react-icons/gr";
import Logo from "../../components/logo/Logo";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { isAnyOf } from "@reduxjs/toolkit";

const Sidebar = ({isActive, setIsActive}) => {
  const handleLogout = () => {
    console.log("logged out button clicked");
  };

  const handleToggle = () =>{
   setIsActive(false)
  }
  return (
    <div>

      {/* Sidebar */}
      <div
        className={`z-10 md:h-[calc(100vh-54px)] absolute top-0 md:static flex flex-col rounded-2xl justify-between bg-[#5ab270] dark:bg-[#24201e] w-64 space-y-6 px-2 py-4 transform ${
          !isActive ? "-translate-x-72":"-translate-x-1"
        }  top-[18px] md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="relative">
            <div className="w-full md:flex bg-transparent px-4 py-2 justify-center items-center mx-auto">
              <Logo dashboard={true}/>
            </div>
            <div
              className="text-red-600 absolute top-1 md:hidden right-1"
              onClick={handleToggle}
            >
              <MdOutlineCancel size={24} />
            </div>
          </div>
          {/* Nav Items */}
          <div className="flex flex-col  justify-between px-4 flex-1 mt-6">
            <nav>
              {/* Menu Items */}
              <MenuItem icon={AiFillHome} label="Home" address="/dashboard" />
              <MenuItem
                icon={FaBookOpen}
                label="Add Book"
                address="add-hadith-book"
              />
              <MenuItem
                icon={GrChapterAdd}
                label="Add Chapter"
                address="add-chapter"
              />
              <MenuItem
                icon={BsFillChatLeftQuoteFill}
                label="Add Hadith"
                address="add-hadith"
              />
            </nav>
          </div>
        </div>

        <div className="px-5">
          <div className="bg-white dark:bg-stone-600 h-[1px] rounded-full w-full mx-auto"></div>

          <MenuItem
            icon={FaUser}
            label="Profile"
            address="/dashboard/profile"
          />
          <button className="flex w-full items-center px-4 py-2 mt-5 text-[#fefdf8]">
            <FaSignOutAlt size={22} />

            <span onClick={handleLogout} className="mx-3 font-medium">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
