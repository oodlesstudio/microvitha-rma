import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import CmsConfigurationWindow from "./CmsConfigurationWindow";

const CmsConfigurationMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <CmsConfigurationWindow />
      </div>
    </div>
  );
};

export default CmsConfigurationMain;
