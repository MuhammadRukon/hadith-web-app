import NavItems from "./NavItems";
import { HiOutlineBell } from "react-icons/hi2";
// import profileImg from "./../../assets/profileImage.jpg";

const Navbar = () => {
  return (
    <>
      <div className="text-[#0e1037] bg-[#fff9ef] shadow-[0_2px_10px_rgba(0,0,0,0.12)] fixed top-0 left-0 w-full z-20">
        <div className="xl:container mx-auto px-8 flex justify-between items-center">
          <NavItems />
          <div className="flex items-center gap-4">
            <HiOutlineBell size={28} color="#9697a3" />
            <div className="w-8 h-8 rounded-full -mt-0.5 overflow-hidden">
              <img className="" alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
