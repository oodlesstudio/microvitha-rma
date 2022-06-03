import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import BulkVoucherWindow from "./BulkVoucherWindow";

const NewTicketMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <BulkVoucherWindow />
      </div>
    </div>
  );
};

export default NewTicketMain;
