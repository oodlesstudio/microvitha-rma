import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/loanRepayment/loanRepayment.css";

// Components
import Header from "../components/common/Header";
import LoanRepaymentMain from "../components/loanRepayment/LoanRepaymentMain";
import Footer from "../components/common/Footer";

const LoanRepayment = () => {
  return (
    <div>
      <Header />
      <LoanRepaymentMain />
      <Footer />
    </div>
  );
};

export default LoanRepayment;
