import React from "react";
// Components
import SidebarMain from "./SidebarMain";
import MainWindow from "./MainWindow";

const MainView = () => {
  return (
    <div className="mainView w-100 d-flex">
      <SidebarMain />
      <MainWindow />
    </div>
  );
};

export default MainView;
