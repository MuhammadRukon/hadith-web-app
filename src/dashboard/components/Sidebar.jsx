import MenuItem from "./MenuItem";
// import logoWithText from "../../assets/dashboard-logo.png";
// icons
import { FaUser } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FaUsersCog } from "react-icons/fa";
import Logo from "../../components/logo/Logo";

const Sidebar = () => {
  const handleLogout = () => {
    console.log("logged out button clicked");
  };
  const logoWithText = null;
  const isActive = true;
  const handleToggle = ()=>{
    console.log("toggle");
  }
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`z-10 h-[calc(100vh-54px)] absolute top-0 md:static flex flex-col md:rounded-3xl justify-between bg-[#5ab270] dark:bg-[#24201e] w-64 space-y-6 px-2 py-4 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
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
                icon={IoStatsChart}
                label="Add Book"
                address="add-hadith-book"
              />
              <MenuItem
                icon={FaUsersCog}
                label="Add Hadith"
                address="add-hadith"
              />
            </nav>
          </div>
        </div>

        <div className="px-5">
          <hr />

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
