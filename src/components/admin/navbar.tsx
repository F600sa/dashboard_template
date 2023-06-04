import { useState } from "react";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { IoNotificationsOutline } from "@react-icons/all-files/io5/IoNotificationsOutline";
import SideBar from "./SideBar";

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex items-center sm:justify-between container justify-end gap-2 h-[50px] sm:w-full w-full shadow-md">
      <div className=" pr-[1400px] sm:pr-[0px] flex flex-row">
        <img
          src="/assets/images/Logo.png"
          alt="Avatar"
          className="mr-4 sm:hidden w-[30px]"
        />

        <input
          type="text"
          id="large-input"
          value={`Search `}
          className="block w-full  sm:hidden border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[15px] "
        />
      </div>
      {open && (
        <div className=" fixed inset-1 z-50 top-1 left-1 right-[170px] ">
          <div className="absolute top-4 right-4">
            <AiOutlineCloseCircle
              onClick={handleMenuClick}
              className="text-[24px] text-black cursor-pointer"
            />
          </div>
          <SideBar />
        </div>
      )}
      <GiHamburgerMenu
        onClick={handleMenuClick}
        className="text-[30px] text-black 2xl:hidden xl:hidden lg:hidden md:hidden mr-4"
      />
      <div className="sm:pl-[260px] ">
        <IoNotificationsOutline className="text-[24px] text-black " />
      </div>
      <img
        src="/assets/images/Avatar (3).png"
        alt="Avatar"
        className="pr-[10px]"
      />
    </div>
  );
}

export default NavBar;
