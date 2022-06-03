import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/bulkVoucher/bulkVoucher.css";

// Components
import Header from "../components/common/Header";
import BulkVoucherMain from "../components/bulkVoucher/BulkVoucherMain";
import Footer from "../components/common/Footer";

const BulkVoucherPosting = () => {
  return (
    <div>
      <Header />
      <BulkVoucherMain />
      <Footer />
    </div>
  );
};

export default BulkVoucherPosting;
