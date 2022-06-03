import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/manualInsert/manualInsert.css";

// Components
import Header from "../components/common/Header";
import ManualInsertMain from "../components/manualInsert/ManualInsertMain";
import Footer from "../components/common/Footer";

const ManualInsert = () => {
  return (
    <div>
      <Header />
      <ManualInsertMain />
      <Footer />
    </div>
  );
};

export default ManualInsert;
