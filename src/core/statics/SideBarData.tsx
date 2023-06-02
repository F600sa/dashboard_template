import { To } from "react-router-dom";
import { appRoutesObj } from "src/app.paths";

interface SideBarData {
  name: string;
  images: string;
  pageRoute: To;
}

export const SideBars: SideBarData[] = [
  {
    name: "Pages",
    images: "bg-icon2",
    pageRoute: appRoutesObj.getDocsPagePath(),
  },
  {
    name: "Sales",
    images: "bg-icon3",
    pageRoute: appRoutesObj.getDocsPagePath(),
  },
  {
    name: "Messages",
    images: "bg-icon4",
    pageRoute: appRoutesObj.getDocsPagePath(),
  },
  {
    name: "Authentication",
    images: "bg-icon5",
    pageRoute: appRoutesObj.getDocsPagePath(),
  },
  {
    name: "Docs",
    images: "bg-icon6",
    pageRoute: appRoutesObj.getDocsPagePath(),
  },
  {
    name: "Help",
    images: "bg-icon7",
    pageRoute: appRoutesObj.getDocsPagePath(),
  },
];
