import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import LoanRepaymentWindow from "./LoanRepaymentWindow";

const LoanRepaymentMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <LoanRepaymentWindow />
      </div>
    </div>
  );
};

export default LoanRepaymentMain;
