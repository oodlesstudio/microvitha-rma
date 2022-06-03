import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
// import Error from "../../images/common/error.svg";
// import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const LoanRepaymentWindow = () => {
  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  // const [showFilters, setShowFilters] = useState(false);

  // Select Error
  const [paymentName, setPaymentType] = useState(false);
  const changePaymentType = () => setPaymentType(true);

  const [transactionType, setTransactionType] = useState(false);
  const changeTransactionType = () => setTransactionType(true);

  const [selectedOption, setSelectedOption] = useState(null);

  // Modals
  const [referenceNo, setReferenceNo] = useState(false);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  // -------------------- CheckBox Logic ---------------------------------

  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    nr1: false,
    nr2: false,
    nr3: false,
    nr4: false,
    nr5: false,
    nr6: false,
    nr7: false,
    nr8: false,
    nr9: false,
    nr10: false,
  });

  /* -------------------- TOGGLES checK STATE BASED ON inputName -------------------- */

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  /* -------------------- CHECKS OR UNCHECKS ALL FROM SELECT ALL CLICK -------------------- */

  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  /* -------------------- EFFECT TO CONTROL CHECKED_ALL STATE -------------------- */

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Loan Repayment
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
          <p className="fontSize12  colorPrimaryDefault">Loan</p>
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
          <p className="fontSize12">Loan Repayment</p>
        </div>
      </div>

      {/* Search Criteria 2 */}
      <div
        className="accordion searchCriteriaBox searchCriteriaBox2"
        id="CriteriaFilters"
      >
        <div className="accordion-item">
          <div
            className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
            id="criteriaFiltersHeading"
          >
            <h6 className="fontWeight-600 colorBlack">Search</h6>

            <button
              className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#criteriaFiltersCollapse"
              aria-expanded="true"
              aria-controls="criteriaFiltersCollapse"
            >
              <span className="icon-Hide"></span>
              <span className="ms-1 fontSize12-m colorPrimaryDefault">
                Show / Hide
              </span>
            </button>
          </div>

          <div
            id="criteriaFiltersCollapse"
            className="accordion-collapse collapse show"
            aria-labelledby="criteriaFiltersHeading"
            data-bs-parent="#criteriaFilters"
          >
            <div className="accordion-body">
              <div className="hrGreyLine"></div>
              <div className="configSelectBoxTop configTopBlueBox mt-0 row">
                <div className="clientNameSelect col col-Search">
                  <label htmlFor="Name">
                    Customer Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    placeholder="Enter Customer Name"
                    className="inputTextBox"
                  />
                </div>

                <div className="clientNameSelect col col-Search">
                  <label htmlFor="id">
                    Customer ID <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    placeholder="Enter Customer ID (Code ID)"
                    className="inputTextBox"
                  />
                </div>

                <div className="clientNameSelect col col-Search">
                  <label htmlFor="cidNo">
                    CID no <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="cidNo"
                    id="cidNo"
                    placeholder="Citizenship Identity (CID)"
                    className="inputTextBox"
                  />
                </div>

                <div className="clientNameSelect col col-Search">
                  <label htmlFor="clientName">
                    Loan no <span>*</span>
                  </label>
                  <Select
                    defaultValue={selectedOption}
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
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
              </div>
              <div className="text-center btnsBtm">
                <button
                  type="button"
                  className="btnPrimaryOutline"
                  onClick={() => setResetFilters(!resetFilters)}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="btnPrimary ms-2"
                  onClick={() => setSaveFilters(!saveFilters)}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom ticketCentreTableHeader">
        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={false}
                classNamePrefix="reactSelectBox"
                placeholder="10 Entries"
              />
            </div>
            <div className="d-flex">
              <div className="form-group has-search">
                <span className="icon-Search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Pdf} alt="Pdf" />
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipExcel}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox">
            <table className="table all-transaction table-striped table-hover table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(event) => selectAll(event.target.checked)}
                        checked={checkedAll}
                      />
                    </div>
                  </th>
                  <th scope="col">
                    Period
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Pay Date
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    EMI Amt
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Interest Amt
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Principal Amt
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Charges (PI)
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Last Due Amt
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Total Amt
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Status
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Principal Overdue
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Interest Overdue
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Penalty Overdue
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Payment
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr1"
                        onChange={() => toggleCheck("nr1")}
                        checked={checked["nr1"]}
                      />
                    </div>
                  </td>
                  <td>1</td>
                  <td>01/02/2022</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>90.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>0.00</td>
                  <td>12.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr2"
                        onChange={() => toggleCheck("nr2")}
                        checked={checked["nr2"]}
                      />
                    </div>
                  </td>
                  <td>2</td>
                  <td>01/02/2022</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>90.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>0.00</td>
                  <td>12.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr3"
                        onChange={() => toggleCheck("nr3")}
                        checked={checked["nr3"]}
                      />
                    </div>
                  </td>
                  <td>3</td>
                  <td>01/02/2022</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>90.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>0.00</td>
                  <td>12.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr4"
                        onChange={() => toggleCheck("nr4")}
                        checked={checked["nr4"]}
                      />
                    </div>
                  </td>
                  <td>4</td>
                  <td>01/02/2022</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>90.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>0.00</td>
                  <td>12.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr5"
                        onChange={() => toggleCheck("nr5")}
                        checked={checked["nr5"]}
                      />
                    </div>
                  </td>
                  <td>5</td>
                  <td>01/02/2022</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>90.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>0.00</td>
                  <td>12.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr6"
                        onChange={() => toggleCheck("nr6")}
                        checked={checked["nr6"]}
                      />
                    </div>
                  </td>
                  <td>6</td>
                  <td>01/02/2022</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>90.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>0.00</td>
                  <td>12.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr7"
                        onChange={() => toggleCheck("nr7")}
                        checked={checked["nr7"]}
                      />
                    </div>
                  </td>
                  <td>7</td>
                  <td>01/02/2022</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>90.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>0.00</td>
                  <td>12.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr8"
                        onChange={() => toggleCheck("nr8")}
                        checked={checked["nr8"]}
                      />
                    </div>
                  </td>
                  <td>8</td>
                  <td>01/02/2022</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>150.00</td>
                  <td>90.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>Pending</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>0.00</td>
                  <td>12.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="paginationBox d-flex align-items-center justify-content-between my-12">
            <div className="paginationLeft fontSize12">
              Showing 1 to 10 of 49 entries
            </div>

            <div className="paginationRight">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link previousPagination"
                      to="/"
                      aria-label="Previous"
                    >
                      <span
                        className="icon-Dropdown-Arrow"
                        style={{ fontSize: "12px" }}
                      ></span>
                      <span>First</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      2
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link paginationBottom" to="/">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link nextPagination"
                      to="/"
                      aria-label="Next"
                    >
                      <span>Last</span>
                      <span
                        className="icon-Dropdown-Arrow-1"
                        style={{ fontSize: "12px" }}
                      ></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Save Filters */}
        {referenceNo && (
          <Modal
            show={referenceNo}
            onHide={() => setReferenceNo(!referenceNo)}
            centered
            className="defaultThemeModal saveFiltersModal unmatchedTableModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Transaction ID Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  EJ Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7">
                        <em>No record(s) found...</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  SW Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SVCB0001</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>459115XXXXXX5716</td>
                      <td>203218001138</td>
                      <td>6100.00</td>
                      <td>00</td>
                      <td>N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  Network Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SVCB0001</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>459115XXXXXX5716</td>
                      <td>203218001138</td>
                      <td>6100.00</td>
                      <td>00</td>
                      <td>N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  GL Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7">
                        <em>No record(s) found...</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom">
        <div className="tableBorderBox">
          <div className="configSelectBoxTop configSelectBoxTop2 mt-0 row">
            {/* Disbursement Date */}
            <div className="clientNameSelect col">
              <label htmlFor="Disbursement">
                Disbursement Date<span> *</span>
              </label>
              <input
                type="text"
                name="Disbursement"
                id="Disbursement"
                placeholder="Disbursement Date"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Loan Amount */}
            <div className="clientNameSelect col">
              <label htmlFor="loanAmount">
                Loan Amount<span> *</span>
              </label>
              <input
                type="text"
                name="loanAmount"
                id="loanAmount"
                placeholder="Loan Amount"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Remaining Amount */}
            <div className="clientNameSelect col">
              <label htmlFor="remainAmount">
                Remaining Amount<span> *</span>
              </label>
              <input
                type="text"
                name="remainAmount"
                id="remainAmount"
                placeholder="Remaining Amount"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Current EMI Amount */}
            <div className="clientNameSelect col">
              <label htmlFor="emiAmount">Current EMI Amount</label>
              <input
                type="text"
                name="emiAmount"
                id="emiAmount"
                placeholder="Current EMI Amount"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Tenure Type */}
            <div className="clientNameSelect col ">
              <label htmlFor="tenureType">
                Tenure Type<span> *</span>
              </label>
              <input
                type="text"
                name="tenureType"
                id="tenureType"
                placeholder="Tenure Type"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Outstanding Principal Amount */}
            <div className="clientNameSelect col ">
              <label htmlFor="opa">
                Outstanding Principal Amount<span> *</span>
              </label>
              <input
                type="text"
                name="opa"
                id="opa"
                placeholder="Oustanding Principal Amount"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Tenure */}
            <div className="clientNameSelect col ">
              <label htmlFor="Tenure">
                Tenure<span> *</span>
              </label>
              <input
                type="text"
                name="Tenure"
                id="Tenure"
                placeholder="Tenure"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Payment Ref */}
            <div className="clientNameSelect col ">
              <label htmlFor="PaymentRef">
                Payment Ref<span> *</span>
              </label>
              <input
                type="text"
                name="PaymentRef"
                id="PaymentRef"
                placeholder="Payment Ref"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Payment No */}
            <div className="clientNameSelect col ">
              <label htmlFor="PaymentNo">
                Payment No<span> *</span>
              </label>
              <input
                type="text"
                name="PaymentNo"
                id="PaymentNo"
                placeholder="Payment No"
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Payment Period */}
            <div className="clientNameSelect col ">
              <label htmlFor="PaymentPeroid">
                Payment Period <span> *</span>
              </label>
              <input
                type="text"
                name="PaymentPeroid"
                id="PaymentPeroid"
                placeholder="Payment Period "
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Outstanding Payable Amount */}
            <div className="clientNameSelect col ">
              <label htmlFor="opa2">
                Outstanding Payable Amount<span> *</span>
              </label>
              <input
                type="text"
                name="opa2"
                id="opa2"
                placeholder="Payable Amount "
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Total Amount */}
            <div className="clientNameSelect col ">
              <label htmlFor="totalAmount">Total Amount</label>
              <input
                type="text"
                name="totalAmount"
                id="totalAmount"
                placeholder="Total Amount "
                className="inputTextBox"
              />
            </div>
            {/* Payment Date */}
            <div className="clientNameSelect col">
              <label htmlFor="p-day">
                Payment Date <span> *</span>{" "}
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="unmatchedDate"
                disabled
              />
            </div>
            {/* Paid Amount */}
            <div className="clientNameSelect col ">
              <label htmlFor="paidAmount">
                Paid Amount<span> *</span>
              </label>
              <input
                type="text"
                name="paidAmount"
                id="paidAmount"
                placeholder="Paid Amount "
                className="inputTextBox"
                disabled
              />
            </div>
            {/* Payment Type */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">
                Payment Type<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setPaymentType();
                  changePaymentType();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
                isDisabled
              />
              {paymentName && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
          </div>

          <div className="text-center btnsBtm">
            <button
              type="button"
              className="btnPrimaryOutline"
              onClick={() => setResetFilters(!resetFilters)}
            >
              Reset
            </button>
            <button
              type="button"
              className="btnPrimary ms-2"
              onClick={() => setSaveFilters(!saveFilters)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanRepaymentWindow;
