import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/cmsConfiguration/cmsConfiguration.css";

// Components
import Header from "../components/common/Header";
import CmsConfigurationMain from "../components/cmsConfiguration/CmsConfigurationMain";
import Footer from "../components/common/Footer";

const CmsConfiguration = () => {
  return (
    <div>
      <Header />
      <CmsConfigurationMain />
      <Footer />
    </div>
  );
};

export default CmsConfiguration;
