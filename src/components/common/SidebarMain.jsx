import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SideBar from "./SideBar";
import SidebarSmall from "./SidebarSmall";
import { openSidebar } from "../../constants/actions/sidebarAction";

const SidebarMain = () => {
  const [navStatus, setNavStatus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSidebar(true));
  }, [dispatch]);

  function buttonCollapse() {
    setNavStatus(!navStatus);
    dispatch(openSidebar(navStatus));
  }
  return (
    <>
      {navStatus ? (
        <SidebarSmall buttonCollapse={buttonCollapse} />
      ) : (
        <SideBar buttonCollapse={buttonCollapse} />
      )}
    </>
  );
};

export default SidebarMain;
