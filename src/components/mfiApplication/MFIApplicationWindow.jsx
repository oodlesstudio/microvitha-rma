import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

// Images
import CompanyLogo from "../../images/common/CompanyLogo.svg";
// mfi
import keyPerson from "../../images/common/key-person.svg";
import Products from "../../images/common/products.svg";
import Users from "../../images/common/users.svg";
import AssetsAllocated from "../../images/common/assetsAllocate.svg";
import Agents from "../../images/common/agents.svg";
import Customers from "../../images/common/customers.svg";
import SavingAc from "../../images/common/saving-ac.svg";
import LoanAc from "../../images/common/loan-ac.svg";

const options = [
  { value: "1", label: "options" },
  { value: "2", label: "options" },
  { value: "3", label: "options" },
  { value: "4", label: "options" },
];

const MFIApplicationWindow = () => {
  // Select Error

  const [transactionType, setTransactionType] = useState(false);
  const changeTransactionType = () => setTransactionType(true);
  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          MFI Summary
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Dashboard</p>
          </Link>
          <Link to="/">
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </Link>
          <p className="fontSize12">MFI Application</p>
        </div>
      </div>
      {/* mfi-name-box */}
      <div className="mfiNameBox">
        <div className="clientNameSelect mfiSummarySelect">
          <label htmlFor="clientName">
            MFI Name<span> *</span>
          </label>
          <Select
            defaultValue={transactionType}
            onChange={() => {
              setTransactionType();
              changeTransactionType();
            }}
            options={options}
            id="clientName"
            classNamePrefix="reactSelectBox"
            placeholder="Select"
          />
          {transactionType && (
            <p className="text-danger font-size9">Enter a correct input</p>
          )}
        </div>
      </div>
      {/* MFI Details box */}
      <div className="mfiDetailBox">
        {/* Box  Left */}
        <div className="mfiLeftDetailBox">
          <img src={CompanyLogo} className="companyLogo" alt="CompanyLogo" />
          <div className="mfiLeftDetails">
            <h4 className="company-heading-1">MFI Details</h4>
            <p>
              MFI Name : <span>BAOWE</span>{" "}
            </p>
            <p>
              Contact Person : <span>Namgay Wagno</span>{" "}
            </p>
            <p>
              Contact No : <span>17129876</span>{" "}
            </p>
            <p>
              Email ID : <span>baowe@gmail.com</span>{" "}
            </p>
            <p>
              Registered Address : <span>Sohna Road Gurgaon</span>{" "}
            </p>
          </div>
        </div>
        {/* divider */}
        {/* <hr className="mfi-hr" /> */}
        <span className="mfi-vertical-border"></span>
        {/* Box  right */}
        <div className="mfiRightDetailBox">
          <div className="mfirightDetails">
            <h4>Financial Details</h4>
            <p>
              Deposit Amount : <span>00</span>{" "}
            </p>
            <p>
              Share Capital : <span>00</span>{" "}
            </p>
            <p>
              Reserve and Surplus : <span>00</span>{" "}
            </p>
            <p>
              Preliminary Expense : <span>00</span>{" "}
            </p>
            <p>
              Net Worth : <span>00</span>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* MFI Summary Box */}
      <div className="mfiSummaryBox">
        <h4>MFI Summary</h4>
        <div className="mfi-info row tab-row">
          {/* Key Persons */}
          <div className="mfi-info-container mfi-tab-top col">
            <div className="mf-circle">
              <img src={keyPerson} alt="key-person" />
            </div>
            <h4>1300</h4>
            <p>Key Persons</p>
          </div>
          {/* Products */}
          <div className="mfi-info-container mfi-tab-top col">
            <div className="mf-circle">
              <img src={Products} alt="products" />
            </div>
            <h4>96</h4>
            <p>Products</p>
          </div>
          {/* Users */}
          <div className="mfi-info-container mfi-tab-top col">
            <div className="mf-circle">
              <img src={Users} alt="users" />
            </div>
            <h4>198</h4>
            <p>Users</p>
          </div>
          {/* Assets Allocated */}
          <div className="mfi-info-container mfi-tab-top col">
            <div className="mf-circle">
              <img src={AssetsAllocated} alt="assets allocated" />
            </div>
            <h4>1300</h4>
            <p>Assets Allocated</p>
          </div>
          {/* Agents */}
          <div className="mfi-info-container col">
            <div className="mf-circle">
              <img src={Agents} alt="agents" />
            </div>
            <h4>1300</h4>
            <p>Agents</p>
          </div>
          {/* Customers */}
          <div className="mfi-info-container col">
            <div className="mf-circle">
              <img src={Customers} alt="customers" />
            </div>
            <h4>96</h4>
            <p>Customers</p>
          </div>
          {/* Saving A/c */}
          <div className="mfi-info-container col">
            <div className="mf-circle">
              <img src={SavingAc} alt="saving ac" />
            </div>
            <h4>198</h4>
            <p>Saving A/c</p>
          </div>
          {/* Loan A/c */}
          <div className="mfi-info-container col">
            <div className="mf-circle">
              <img src={LoanAc} alt="loan ac" />
            </div>
            <h4>1300</h4>
            <p>Loan A/c</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFIApplicationWindow;
