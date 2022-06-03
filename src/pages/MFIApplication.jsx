import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/mfiApplication/mfiApplication.css";

// Components
import Header from "../components/common/Header";
import MFIApplicationMain from "../components/mfiApplication/MFIApplicationMain";
import Footer from "../components/common/Footer";

const MFIApplication = () => {
  return (
    <div>
      <Header />
      <MFIApplicationMain />
      <Footer />
    </div>
  );
};

export default MFIApplication;
