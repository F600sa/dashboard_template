import { ReactElement } from "react";

import NavBar from "./navbar";

interface LayoutProps {
  children: ReactElement;
}
function LayoutWithoutSideBar({ children }: LayoutProps) {
  return (
    <div className="   ">
      <NavBar />

      {children}
    </div>
  );
}

export default LayoutWithoutSideBar;
