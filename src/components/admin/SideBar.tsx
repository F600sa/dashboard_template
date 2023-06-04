import { SideBars } from "src/core/statics/SideBarData";
import { NavLink } from "react-router-dom";
import { Imgs } from "src/core/statics/img";
// import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
// import { useState } from "react";

function SideBar() {
  //   const [open, setOpen] = useState<Boolean>(false);

  return (
    <div className={`w-[250px] h-[1555px] bg-white container  shadow-md `}>
      <NavLink
        to="/"
        className="flex pl-[20px]  hover:bg-gray-200 sm:pt-[30px] pt-[10px]"
      >
        <div className={`bg-icon1 bg-cover w-[20px] h-[20px]`}></div>
        <h4 className="pl-[20px]">Overview</h4>
      </NavLink>

      <div className="pt-[20px]"></div>
      {SideBars.map((item, index) => {
        return (
          <NavLink to={item.pageRoute} key={index}>
            <div className="flex pl-[20px] items-start justify-start hover:bg-gray-200">
              <div
                className={`${item.images} bg-cover w-[20px] h-[20px]`}
              ></div>
              <h4 className="pl-[20px]">{item.name}</h4>
            </div>
            {index === SideBars.length - 3 && (
              <div className="pt-[1px] container">
                <hr className="bg-gray-200 border-100 dark:bg-gray-700 w-[250px] sm:w-[200px]" />
              </div>
            )}
            <div className="pt-[20px]"></div>
          </NavLink>
        );
      })}

      <div className="flex flex-row items-center justify-center gap-3 pt-[1140px] sm:pt-[1110px]">
        {Imgs.map((items, index) => {
          return (
            <div className={`${items.images} bg-cover w-[20px] h-[20px]`}></div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
