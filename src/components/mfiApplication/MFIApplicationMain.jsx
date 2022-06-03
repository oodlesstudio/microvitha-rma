import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import MFIApplicationWindow from "./MFIApplicationWindow";

const MFIApplicationMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <MFIApplicationWindow />
      </div>
    </div>
  );
};

export default MFIApplicationMain;
