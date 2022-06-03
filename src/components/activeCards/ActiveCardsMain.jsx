import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./activeCards.css";
// Components
import SidebarMain from "../common/SidebarMain";
import ActiveCardsWindow from "./ActiveCardsWindow";

const ActiveCardsMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <ActiveCardsWindow />
      </div>
    </div>
  );
};

export default ActiveCardsMain;
