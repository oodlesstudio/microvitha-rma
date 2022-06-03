import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import ManualInsertWindow from "./ManualInsertWindow";

const ManualInsertMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <ManualInsertWindow />
      </div>
    </div>
  );
};

export default ManualInsertMain;
