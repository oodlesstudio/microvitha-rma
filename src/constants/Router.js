import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import ManualInsert from "../pages/ManualInsert";
import ActiveCards from "../pages/ActiveCards";
import BulkVoucherPosting from "../pages/BulkVoucherPosting";
import LoanRepayment from "../pages/LoanRepayment";
import MFIApplication from "../pages/MFIApplication";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BulkVoucherPosting />} />
        <Route path="/financial-report/bulk-voucher-posting" element={<BulkVoucherPosting />} />
        <Route path="/loan/loan-repayment" element={<LoanRepayment />} />
        <Route path="/dashboard/mfi-application" element={<MFIApplication />} />
        <Route path="/manual-insert" element={<ManualInsert />} />
        <Route path="/card-operation/active-card" element={<ActiveCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
