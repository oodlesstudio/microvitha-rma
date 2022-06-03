import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

// Images
import AddIcon from "./../../images/common/add.svg";
import RemoveIcon from "./../../images/common/remove.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const BulkVoucherWindow = () => {
  // Table Data State Handle Function

  const [voucherList, setVoucherList] = useState([{ voucher: "" }]);

  const handleServiceRemove = (index) => {
    if (voucherList.length > 1) {
      const list = [...voucherList];
      list.splice(index, 1);
      setVoucherList(list);
      console.log(list);
    }
  };

  const handleServiceAdd = () => {
    setVoucherList([...voucherList, { voucher: "" }]);
  };

  // Select Error

  // hsm log Error
  const [voucherType, setVoucherType] = useState(false);
  const changevoucherType = () => setVoucherType(true);

  // Tooltip
  const renderAddTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add
    </Tooltip>
  );
  const renderRemoveTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Remove
    </Tooltip>
  );

  //   Date Calendar
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Bulk Voucher Posting
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
          <p className="fontSize12 colorPrimaryDefault">Financial Report</p>
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
          <p className="fontSize12 ">Bulk Voucher Posting</p>
        </div>
      </div>

      {/* Log Box */}
      <div className=" newTicketLastTable bulkBoxHeight logBoxSection">
        <div className="tableBorderBox bulkVoucherBox">
          {/* Table */}
          <div className="table-responsive tableContentBox">
            <table className="table tab-table table-striped table-hover table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Debit Ledger</th>
                  <th scope="col">Credit Ledger</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Voucher Type</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {voucherList.map((singleVoucher, index) => (
                  <tr key={index}>
                    <td>
                      <div className=" tabpadding">
                        {/* debitLedger */}
                        <div className="clientNameSelect">
                          <input
                            type="text"
                            name="debitLedger"
                            id="debitLedger"
                            className="inputTextBox"
                            placeholder="Enter Debit Ledger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className=" tabpadding">
                        {/* creditLedger */}
                        <div className="clientNameSelect">
                          <input
                            type="text"
                            name="creditLedger"
                            id="creditLedger"
                            className="inputTextBox"
                            placeholder="Enter Credit Ledger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className=" tabpadding">
                        {/* creditLedger */}
                        <div className="clientNameSelect">
                          <input
                            type="text"
                            name="amount"
                            id="amount"
                            className="inputTextBox"
                            placeholder="Enter Amount"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-start">
                      <div className=" tabpadding">
                        <div className="clientNameSelect">
                          <Select
                            defaultValue={voucherType}
                            onChange={() => {
                              setVoucherType();
                              changevoucherType();
                            }}
                            options={options}
                            id="AssignedTo"
                            classNamePrefix="reactSelectBox"
                            placeholder="Dropdown"
                          />
                          {voucherType && (
                            <p className="text-danger font-size9">
                              Enter a correct input
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className=" tabpadding">
                        {/* creditLedger */}
                        <div className="clientNameSelect">
                          <input
                            type="text"
                            name="comment"
                            id="comment"
                            className="inputTextBox"
                            placeholder="Enter Comment"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderAddTooltip}
                        >
                          <button
                            className="act-add-Btn"
                            onClick={handleServiceAdd}
                          >
                            <img src={AddIcon} alt="AddIcon" />
                          </button>
                        </OverlayTrigger>

                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderRemoveTooltip}
                        >
                          <button
                            className="act-remove-Btn"
                            onClick={() => handleServiceRemove(index)}
                          >
                            <img src={RemoveIcon} alt="RemoveIcon" />
                          </button>
                        </OverlayTrigger>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Stage Btn */}
        <div className="text-center  btnsBtmMobile ">
          <button type="button" className="btnPrimaryOutline">
            Cancel
          </button>
          <button type="button" className="btnPrimary btnMobilePadding ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkVoucherWindow;
