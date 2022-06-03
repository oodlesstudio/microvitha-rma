import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Error from "../../images/common/error.svg";
import Success from "../../images/common/success.svg";

const options = [
  { value: "1", label: "options" },
  { value: "2", label: "options" },
  { value: "3", label: "options" },
  { value: "4", label: "options" },
];

const ManualInsertMainWindow = () => {
  // Form modals
  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);
  const [updateFilters, setUpdateFilters] = useState(false);

  // Select Error

  // branch Error
  const [branch, setBranch] = useState(false);
  const changeBranch = () => setBranch(true);

  // bin Error
  const [bin, setBin] = useState(false);
  const changeBin = () => setBin(true);

  // scheme Error
  const [scheme, setScheme] = useState(false);
  const changeScheme = () => setScheme(true);

  // Account Type Error
  const [accountType, setAccountType] = useState(false);
  const changeAccountType = () => setAccountType(true);

  // Product Error
  const [product, setProduct] = useState(false);
  const changeProduct = () => setProduct(true);

  // Product Error
  const [gender, setGender] = useState(false);
  const changeGender = () => setGender(true);

  // Select Error for Update Fields

  // branch Error
  const [branch2, setBranch2] = useState(false);
  const changeBranch2 = () => setBranch2(true);

  // bin Error
  const [bin2, setBin2] = useState(false);
  const changeBin2 = () => setBin2(true);

  // scheme Error
  const [scheme2, setScheme2] = useState(false);
  const changeScheme2 = () => setScheme2(true);

  // Account Type Error
  const [accountType2, setAccountType2] = useState(false);
  const changeAccountType2 = () => setAccountType2(true);

  // Product Error
  const [product2, setProduct2] = useState(false);
  const changeProduct2 = () => setProduct2(true);

  // Product Error
  const [gender2, setGender2] = useState(false);
  const changeGender2 = () => setGender2(true);

  // const [selectedOption, setSelectedOption] = useState(null);

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Manual Insert
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Dashboard</p>
          </Link>
          <span>
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
          </span>
          <p className="fontSize12">Manual Insert</p>
        </div>
      </div>

      {/* Docket Window */}
      <div className="docketWindow">
        <ul className="nav nav-tabs nav-mobile-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link active"
              id="insertRecord-tab"
              data-bs-toggle="tab"
              data-bs-target="#insertRecord"
              type="button"
              role="tab"
              aria-controls="insertRecord"
              aria-selected="true"
            >
              Insert Record
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="updateRecord-tab"
              data-bs-toggle="tab"
              data-bs-target="#updateRecord"
              type="button"
              role="tab"
              aria-controls="updateRecord"
              aria-selected="false"
            >
              Update Record
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          {/* Account Type Tab */}
          <div
            className="tab-pane fade show active"
            id="insertRecord"
            role="tabpanel"
            aria-labelledby="insertRecord-tab"
          >
            <div className="nav-tab-box">
              {/* forms Fields */}
              <div className="configLeftBottom tableBorderBox docketWindowSection">
                <div className="configSelectBoxTop row row-cols-auto CMS-grid">
                  {/* Account Number*/}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      id="accountNumber"
                      className="inputTextBox"
                      placeholder="Enter Account Number"
                    />
                  </div>

                  {/* Branch *  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="branch">
                      Branch <span>*</span>
                    </label>
                    <Select
                      defaultValue={branch}
                      onChange={() => {
                        setBranch();
                        changeBranch();
                      }}
                      options={options}
                      id="branch"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {branch && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Account Type * * */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="AccountType">
                      Account Type<span> *</span>
                    </label>
                    <Select
                      defaultValue={accountType}
                      onChange={() => {
                        setAccountType();
                        changeAccountType();
                      }}
                      options={options}
                      id="AccountType"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {accountType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Bin *  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="cardAddOn">
                      Bin <span>*</span>
                    </label>
                    <Select
                      defaultValue={bin}
                      onChange={() => {
                        setBin();
                        changeBin();
                      }}
                      options={options}
                      id="cardAddOn"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {bin && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Product  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="product">
                      Product<span> *</span>
                    </label>
                    <Select
                      defaultValue={scheme}
                      onChange={() => {
                        setProduct();
                        changeProduct();
                      }}
                      options={options}
                      id="product"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {product && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Scheme */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="scheme">
                      Scheme <span>*</span>
                    </label>
                    <Select
                      defaultValue={scheme}
                      onChange={() => {
                        setScheme();
                        changeScheme();
                      }}
                      options={options}
                      id="scheme"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {scheme && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Customer Name */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="customerName">
                      Customer Name <span>*</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      id="customerName"
                      className="inputTextBox"
                      placeholder="Enter Customer Name"
                    />
                  </div>

                  {/* Name On Card */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="nameOnCard">
                      Name On Card
                      <span> *</span>
                    </label>
                    <input
                      type="text"
                      name="nameOnCard"
                      id="nameOnCard"
                      className="inputTextBox"
                      placeholder="Name On Card"
                    />
                  </div>

                  {/* ATM Card Limit */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="acl">
                      ATM Card Limit <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="acl"
                      id="acl"
                      className="inputTextBox"
                      placeholder="Enter Card Limit"
                    />
                  </div>

                  {/* Address  1 */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="address2">
                      Address 1 <span> *</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="address1"
                      id="address1"
                      className="inputTextBox"
                      placeholder="Enter Address"
                    />
                  </div>

                  {/* Address  2 */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="address2">Address 2</label>
                    <input
                      type="text"
                      name="address2"
                      id="address2"
                      className="inputTextBox"
                      placeholder="Enter Address"
                    />
                  </div>

                  {/* Address  2 */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="address3">Address 3</label>
                    <input
                      type="text"
                      name="address3"
                      id="address3"
                      className="inputTextBox"
                      placeholder="Enter Address"
                    />
                  </div>

                  {/* City */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="inputTextBox"
                      placeholder="Enter City"
                    />
                  </div>

                  {/* State */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="inputTextBox"
                      placeholder="Enter State"
                    />
                  </div>

                  {/* Pin Code */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="pincode">Pin Code</label>
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      className="inputTextBox"
                      placeholder="Enter Pin Code"
                    />
                  </div>

                  {/* Mother 's Name */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="motherName">Mother’s Name</label>
                    <input
                      type="text"
                      name="motherName"
                      id="motherName"
                      className="inputTextBox"
                      placeholder="Enter Mother Name"
                    />
                  </div>

                  {/* Preference */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="Preference">Preference</label>
                    <input
                      type="text"
                      name="Preference"
                      id="Preference"
                      className="inputTextBox"
                      placeholder="Enter Card Limit"
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      className="inputTextBox"
                      placeholder="Enter Card Limit"
                    />
                  </div>

                  {/* Customer ID * */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="customerID">
                      Customer ID <span>*</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="customerID"
                      id="customerID"
                      className="inputTextBox"
                      placeholder="Enter Customer ID"
                    />
                  </div>

                  {/* dob */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="dob">
                      Date Of Birth <span>*</span>{" "}
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>

                  {/* record Date */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="recordDate">
                      Record Date <span>*</span>{" "}
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>

                  {/* Gender  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="cardAddOn">
                      Gender <span>*</span>
                    </label>
                    <Select
                      defaultValue={bin}
                      onChange={() => {
                        setGender();
                        changeGender();
                      }}
                      options={options}
                      id="cardAddOn"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {gender && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Config Btns */}
                  <div className="text-center ConfigBtns ">
                    <button
                      type="button"
                      className="btnPrimaryOutline configBtn"
                      onClick={() => setResetFilters(!resetFilters)}
                    >
                      Cancel
                    </button>
                    {/* Save */}
                    <button
                      type="button"
                      className="btnPrimary configSaveBtn configBtn"
                      onClick={() => setSaveFilters(!saveFilters)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* branch Tab */}
          <div
            className="tab-pane fade"
            id="updateRecord"
            role="tabpanel"
            aria-labelledby="updateRecord-tab"
          >
            <div className="nav-tab-box">
              {/* forms Fields */}
              <div className="configLeftBottom tableBorderBox docketWindowSection">
                <div className="configSelectBoxTop row row-cols-auto CMS-grid">
                  {/* Account Number*/}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="accountNumber2">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber2"
                      id="accountNumber2"
                      className="inputTextBox"
                      placeholder="Enter Account Number"
                    />
                  </div>

                  {/* Branch *  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="branch2">
                      Branch <span>*</span>
                    </label>
                    <Select
                      defaultValue={branch}
                      onChange={() => {
                        setBranch2();
                        changeBranch2();
                      }}
                      options={options}
                      id="branch2"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {branch2 && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Account Type * * */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="AccountType2">
                      Account Type<span> *</span>
                    </label>
                    <Select
                      defaultValue={accountType}
                      onChange={() => {
                        setAccountType2();
                        changeAccountType2();
                      }}
                      options={options}
                      id="AccountType"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {accountType2 && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Bin *  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="bin2">
                      Bin <span>*</span>
                    </label>
                    <Select
                      defaultValue={bin}
                      onChange={() => {
                        setBin2();
                        changeBin2();
                      }}
                      options={options}
                      id="bin2"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {bin2 && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Product  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="product">
                      Product<span> *</span>
                    </label>
                    <Select
                      defaultValue={scheme}
                      onChange={() => {
                        setProduct2();
                        changeProduct2();
                      }}
                      options={options}
                      id="product"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {product2 && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Scheme */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="scheme2">
                      Scheme <span>*</span>
                    </label>
                    <Select
                      defaultValue={scheme}
                      onChange={() => {
                        setScheme2();
                        changeScheme2();
                      }}
                      options={options}
                      id="scheme"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {scheme2 && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Customer Name */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="customerName">
                      Customer Name <span>*</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      id="customerName"
                      className="inputTextBox"
                      placeholder="Enter Customer Name"
                    />
                  </div>

                  {/* Name On Card */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="nameOnCard">
                      Name On Card
                      <span> *</span>
                    </label>
                    <input
                      type="text"
                      name="nameOnCard"
                      id="nameOnCard"
                      className="inputTextBox"
                      placeholder="Name On Card"
                    />
                  </div>

                  {/* ATM Card Limit */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="acl">
                      ATM Card Limit <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="acl"
                      id="acl"
                      className="inputTextBox"
                      placeholder="Enter Card Limit"
                    />
                  </div>

                  {/* Address  1 */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="address2">
                      Address 1 <span> *</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="address1"
                      id="address1"
                      className="inputTextBox"
                      placeholder="Enter Address"
                    />
                  </div>

                  {/* Address  2 */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="address2">Address 2</label>
                    <input
                      type="text"
                      name="address2"
                      id="address2"
                      className="inputTextBox"
                      placeholder="Enter Address"
                    />
                  </div>

                  {/* Address  2 */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="address3">Address 3</label>
                    <input
                      type="text"
                      name="address3"
                      id="address3"
                      className="inputTextBox"
                      placeholder="Enter Address"
                    />
                  </div>

                  {/* City */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="inputTextBox"
                      placeholder="Enter City"
                    />
                  </div>

                  {/* State */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="inputTextBox"
                      placeholder="Enter State"
                    />
                  </div>

                  {/* Pin Code */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="pincode">Pin Code</label>
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      className="inputTextBox"
                      placeholder="Enter Pin Code"
                    />
                  </div>

                  {/* Mother 's Name */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="motherName">Mother’s Name</label>
                    <input
                      type="text"
                      name="motherName"
                      id="motherName"
                      className="inputTextBox"
                      placeholder="Enter Mother Name"
                    />
                  </div>

                  {/* Preference */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="Preference">Preference</label>
                    <input
                      type="text"
                      name="Preference"
                      id="Preference"
                      className="inputTextBox"
                      placeholder="Enter Card Limit"
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      className="inputTextBox"
                      placeholder="Enter Card Limit"
                    />
                  </div>

                  {/* Customer ID * */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="customerID">
                      Customer ID <span>*</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="customerID"
                      id="customerID"
                      className="inputTextBox"
                      placeholder="Enter Customer ID"
                    />
                  </div>

                  {/* dob */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="dob">
                      Date Of Birth <span>*</span>{" "}
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>

                  {/* record Date */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="recordDate">
                      Record Date <span>*</span>{" "}
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>

                  {/* Gender  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="cardAddOn">
                      Gender <span>*</span>
                    </label>
                    <Select
                      defaultValue={bin}
                      onChange={() => {
                        setGender2();
                        changeGender2();
                      }}
                      options={options}
                      id="cardAddOn"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {gender2 && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Config Btns */}
                  <div className="text-center ConfigBtns ">
                    <button
                      type="button"
                      className="btnPrimaryOutline configBtn"
                      onClick={() => setResetFilters(!resetFilters)}
                    >
                      Cancel
                    </button>
                    {/* Save */}
                    <button
                      type="button"
                      className="btnPrimary configSaveBtn configBtn"
                      onClick={() => setUpdateFilters(!updateFilters)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Cancel */}
      {resetFilters && (
        <Modal
          show={resetFilters}
          onHide={() => setResetFilters(!resetFilters)}
          centered
          className="defaultThemeModal saveFiltersModal errorFiltersModal centeredModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Manual Insert
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Error} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Changes you have done will be lost, Are <br /> you sure to cancel?
            </p>
            <div className="mt-3 pt-1">
              <button
                type="button"
                className="btnPrimaryOutline"
                onClick={() => setResetFilters(!resetFilters)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btnPrimary ms-2"
                onClick={() => setResetFilters(!resetFilters)}
              >
                Yes
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* form Success Modal */}
      {saveFilters && (
        <Modal
          show={saveFilters}
          onHide={() => setSaveFilters(!saveFilters)}
          centered
          className="defaultThemeModal saveFiltersModal centeredModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Manual Insert
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Success} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Details Saved Successfully!
            </p>
          </Modal.Body>
        </Modal>
      )}

      {/* form Success Modal */}
      {updateFilters && (
        <Modal
          show={updateFilters}
          onHide={() => setUpdateFilters(!updateFilters)}
          centered
          className="defaultThemeModal saveFiltersModal centeredModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Manual Insert
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Success} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Details Successfully Updated!
            </p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ManualInsertMainWindow;
