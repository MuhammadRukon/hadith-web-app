import Logo from "../logo/Logo";
import NavItems from "./NavItems";
import { HiOutlineBell } from "react-icons/hi2";
import profileImg from "./../../assets/profileImg.png";

const Navbar = () => {
  return (
    <>
      <div className="text-[#0e1037] bg-[#fff9ef] shadow-[0_2px_10px_rgba(0,0,0,0.12)] fixed top-0 left-0 w-full z-50">
        <div className="xl:container mx-auto px-8 flex justify-between items-center">
          <Logo />
          <NavItems />
          <div className="flex items-center gap-4">
            <HiOutlineBell
              size={24}
              color="#0e1037"
              className="hover:scale-110 cursor-pointer duration-100 transform"
            />
            <div className="w-8 h-8 border-2 cursor-pointer border-[#5ab270] rounded-full -mt-0.5 overflow-hidden">
              <div>
                <img src={profileImg} alt="profile-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
