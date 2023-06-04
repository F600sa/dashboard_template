import { ReactElement } from "react";

import NavBar from "./navbar";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactElement;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className=" container  ">
      <NavBar />
      <div className="sm:hidden bg-black w-[250px] container ">
        <SideBar />
      </div>
      {children}
    </div>
  );
}

export default Layout;
