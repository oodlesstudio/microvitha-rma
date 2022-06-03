import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-bootstrap";
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

const CmsConfigurationWindow = () => {
  // Form modals
  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  // Select Error

  // hsm log Error
  const [hsmLog, setHsmLog] = useState(false);
  const changeHsmLog = () => setHsmLog(true);

  // encrypted file Error
  const [encryptedFile, setEncryptedFile] = useState(false);
  const changeEncryptedFile = () => setEncryptedFile(true);

  // normal file Error
  const [normalFile, setNormalFile] = useState(false);
  const changeNormalFile = () => setNormalFile(true);

  // integrated Chakra Error
  const [integratedChakra, setIntegratedChakrae] = useState(false);
  const changeintegratedChakra = () => setIntegratedChakrae(true);

  // cerdit card AddOn Error
  const [cardAddOn, setCardAddOn] = useState(false);
  const changeCardAddOn = () => setCardAddOn(true);

  // Debit card AddOn Error
  const [cardAddOn2, setCardAddOn2] = useState(false);
  const changeCardAddOn2 = () => setCardAddOn2(true);

  // Debit card AddOn Error
  const [inventoryIntegrated, setInventoryIntegrated] = useState(false);
  const changeInventoryIntegrated = () => setInventoryIntegrated(true);

  // Debit card AddOn Error
  const [posId, setPosId] = useState(false);
  const changePosId = () => setPosId(true);

  // Debit card AddOn Error
  const [subAggregator, setSubAggregator] = useState(false);
  const changeSubAggregator = () => setSubAggregator(true);

  // const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          CMS Configuration
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
          <p className="fontSize12">Configuration</p>
        </div>
      </div>

      {/* Docket Window */}
      <div className="docketWindow">
        <ul className="nav nav-tabs nav-mobile-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="accountType-tab"
              data-bs-toggle="tab"
              data-bs-target="#accountType"
              type="button"
              role="tab"
              aria-controls="accountType"
              aria-selected="true"
            >
              Account Type
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="branch-tab"
              data-bs-toggle="tab"
              data-bs-target="#branch"
              type="button"
              role="tab"
              aria-controls="branch"
              aria-selected="false"
            >
              Branch
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="cardScheme-tab"
              data-bs-toggle="tab"
              data-bs-target="#cardScheme"
              type="button"
              role="tab"
              aria-controls="cardScheme"
              aria-selected="false"
            >
              Card Scheme
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="Product-tab"
              data-bs-toggle="tab"
              data-bs-target="#Product"
              type="button"
              role="tab"
              aria-controls="Product"
              aria-selected="false"
            >
              Product
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="bin-tab"
              data-bs-toggle="tab"
              data-bs-target="#bin"
              type="button"
              role="tab"
              aria-controls="bin"
              aria-selected="false"
            >
              BIN
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="binRange-tab"
              data-bs-toggle="tab"
              data-bs-target="#binRange"
              type="button"
              role="tab"
              aria-controls="binRange"
              aria-selected="false"
            >
              BIN Range
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="Scheme-tab"
              data-bs-toggle="tab"
              data-bs-target="#Scheme"
              type="button"
              role="tab"
              aria-controls="Scheme"
              aria-selected="false"
            >
              Scheme
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="dataValidation-tab"
              data-bs-toggle="tab"
              data-bs-target="#dataValidation"
              type="button"
              role="tab"
              aria-controls="dataValidation"
              aria-selected="false"
            >
              Data Validation
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active nav-mobile-link"
              id="configuration-tab"
              data-bs-toggle="tab"
              data-bs-target="#configuration"
              type="button"
              role="tab"
              aria-controls="configuration"
              aria-selected="false"
            >
              Configuration
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          {/* Account Type Tab */}
          <div
            className="tab-pane fade"
            id="accountType"
            role="tabpanel"
            aria-labelledby="accountType-tab"
          ></div>
          {/* branch Tab */}
          <div
            className="tab-pane fade"
            id="branch"
            role="tabpanel"
            aria-labelledby="branch-tab"
          >
            <div className="docketWindowSection"></div>
          </div>
          {/* Card Scheme Tab */}
          <div
            className="tab-pane fade"
            id="cardScheme"
            role="tabpanel"
            aria-labelledby="cardScheme-tab"
          >
            <div className="docketWindowSection"></div>
          </div>
          {/* Product Tab */}
          <div
            className="tab-pane fade"
            id="Product"
            role="tabpanel"
            aria-labelledby="Product-tab"
          >
            <div className="docketWindowSection"></div>
          </div>
          {/* bin  */}
          <div
            className="tab-pane fade"
            id="bin"
            role="tabpanel"
            aria-labelledby="bin-tab"
          >
            <div className="docketWindowSection"></div>
          </div>
          {/* bin range */}
          <div
            className="tab-pane fade"
            id="binRange"
            role="tabpanel"
            aria-labelledby="binRange-tab"
          >
            <div className="docketWindowSection"></div>
          </div>
          {/* Scheme */}
          <div
            className="tab-pane fade"
            id="Scheme"
            role="tabpanel"
            aria-labelledby="Scheme-tab"
          >
            <div className="docketWindowSection"></div>
          </div>
          {/* data Validation */}
          <div
            className="tab-pane fade"
            id="dataValidation"
            role="tabpanel"
            aria-labelledby="dataValidation-tab"
          >
            <div className="docketWindowSection"></div>
          </div>
          {/* configuration */}
          <div
            className="tab-pane fade show active"
            id="configuration"
            role="tabpanel"
            aria-labelledby="configuration-tab"
          >
            <div className="nav-tab-box">
              {/* forms Fields */}
              <div className="configLeftBottom tableBorderBox docketWindowSection">
                <div className="configSelectBoxTop row row-cols-auto CMS-grid">
                  {/* ------------------------------- first Row ------------------------------- */}

                  {/* Login Page Image */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="loginPage">Login Page Image</label>
                    <input
                      type="text"
                      name="loginPage"
                      id="loginPage"
                      className="inputTextBox"
                      placeholder="Enter URL"
                    />
                  </div>

                  {/* file Path */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="filePath">file Path</label>
                    <input
                      type="text"
                      name="filePath"
                      id="filePath"
                      className="inputTextBox"
                      placeholder="Enter Path"
                    />
                  </div>

                  {/* Max HTTP Collection Keys */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="http">Max HTTP Collection Keys</label>
                    <input
                      type="text"
                      name="http"
                      id="http"
                      className="inputTextBox"
                      placeholder="2000"
                    />
                  </div>

                  {/* Max json Deserializer Members */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="maxJson">
                      Max json Deserializer Members
                    </label>
                    <input
                      type="text"
                      name="maxJson"
                      id="maxJson"
                      className="inputTextBox"
                      placeholder="2000"
                    />
                  </div>

                  {/* ------------------------------- second Row ------------------------------- */}

                  {/* HSM Logs */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="HsmLogs">HSM Logs</label>
                    <input
                      type="text"
                      name="HsmLogs"
                      id="HsmLogs"
                      className="inputTextBox"
                      placeholder="D:\logs"
                    />
                  </div>

                  {/* HSM IP */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="filePath">HSM IP</label>
                    <input
                      type="text"
                      name="hsmip"
                      id="hsmip"
                      className="inputTextBox"
                      placeholder="150.25.50.50"
                    />
                  </div>

                  {/* HSM Port */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="http">HSM Port</label>
                    <input
                      type="text"
                      name="http"
                      id="http"
                      className="inputTextBox"
                      placeholder="2000"
                    />
                  </div>

                  {/* Message Header */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="maxJson">Message Header</label>
                    <input
                      type="text"
                      name="messageHeader"
                      id="messageHeader"
                      className="inputTextBox"
                      placeholder="############"
                    />
                  </div>

                  {/* ------------------------------- third Row ------------------------------- */}

                  {/* Client Image Path */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="clientImagePath">Client Image Path</label>
                    <input
                      type="text"
                      name="clientImagePath"
                      id="clientImagePath"
                      className="inputTextBox"
                      placeholder="Images/SBM"
                    />
                  </div>

                  {/* encoding Embossing Path */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="encodingEmbossingPath">
                      Encoding Embossing Path
                    </label>
                    <input
                      type="text"
                      name="encodingEmbossingPath"
                      id="encodingEmbossingPath"
                      className="inputTextBox"
                      placeholder="150.25.50.50"
                    />
                  </div>

                  {/* Chart Image handler */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="chartImageHandler">
                      Chart Image handler
                    </label>
                    <input
                      type="text"
                      name="chartImageHandler"
                      id="chartImageHandler"
                      className="inputTextBox"
                      placeholder="storage-file"
                    />
                  </div>

                  {/* Field Separator */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="fieldSeparator">Field Separator</label>
                    <input
                      type="text"
                      name="fieldSeparator"
                      id="fieldSeparator"
                      className="inputTextBox"
                      placeholder="Images/SBM"
                    />
                  </div>

                  {/*------------------------------- fourth Row ------------------------------- */}

                  {/* Pin Length */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="pinLength">Pin Length</label>
                    <input
                      type="text"
                      name="pinLength"
                      id="pinLength"
                      className="inputTextBox"
                      placeholder="4"
                    />
                  </div>

                  {/* Decimalisation Table String */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="decimalisation">
                      Decimalisation Table String
                    </label>
                    <input
                      type="text"
                      name="decimalisation"
                      id="encodingEmbossingPath"
                      className="inputTextBox"
                      placeholder="0123456789"
                    />
                  </div>

                  {/* show HSM logs */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="AssignedTo">show HSM logs</label>
                    <Select
                      defaultValue={hsmLog}
                      onChange={() => {
                        setHsmLog();
                        changeHsmLog();
                      }}
                      options={options}
                      id="AssignedTo"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {hsmLog && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Bank Name */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="bankName">Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      id="bankName"
                      className="inputTextBox"
                      placeholder="State Bank"
                    />
                  </div>

                  {/* ------------------------------- fifth Row ------------------------------- */}

                  {/* CMS version */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="cms-version">CMS version</label>
                    <input
                      type="text"
                      name="cms-version"
                      id="cms-version"
                      className="inputTextBox"
                      placeholder="5.0.1.3"
                    />
                  </div>

                  {/* Card Expiry Duration  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="cardExpiryDuration">
                      Card Expiry Duration
                    </label>
                    <input
                      type="text"
                      name="cardExpiryDuration"
                      id="cardExpiryDuration"
                      className="inputTextBox"
                      placeholder="5"
                    />
                  </div>

                  {/* HSM Vendor  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="HSMVendor">HSM Vendor</label>
                    <input
                      type="text"
                      name="HSMVendor"
                      id="HSMVendor"
                      className="inputTextBox"
                      placeholder="Safenet"
                    />
                  </div>

                  {/* Set Time */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="SetTime">Set Time</label>
                    <input
                      type="text"
                      name="SetTime"
                      id="SetTime"
                      className="inputTextBox"
                      placeholder="2"
                    />
                  </div>

                  {/* ------------------------------- sixth Row ------------------------------- */}

                  {/* Encrypted File  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="encryptedFile">Encrypted File</label>
                    <Select
                      defaultValue={encryptedFile}
                      onChange={() => {
                        setEncryptedFile();
                        changeEncryptedFile();
                      }}
                      options={options}
                      id="encryptedFile"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {encryptedFile && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Normal File  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="encryptedFile">Normal File</label>
                    <Select
                      defaultValue={normalFile}
                      onChange={() => {
                        setNormalFile();
                        changeNormalFile();
                      }}
                      options={options}
                      id="encryptedFile"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {normalFile && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Set Time */}
                  <div className="clientNameSelect cmscol2">
                    <label htmlFor="Emboss">
                      Encode Emboss File Name Format
                    </label>
                    <input
                      type="text"
                      name="Emboss"
                      id="Emboss"
                      className="inputTextBox"
                      placeholder="@Branch@Bin"
                    />
                  </div>

                  {/* ------------------------------- seventh Row - Heading Tab ------------------------------- */}

                  {/* Heading : Checbox */}
                  <div className="clientNameSelect cmscolheadings checkHeadingBox">
                    <div>
                      <label htmlFor="SetTime">Heading :</label>
                    </div>
                    <div className="headingAllSections">
                      <div className="form-check headingCheckBoxs">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckBranch"
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="flexCheckBranch"
                        >
                          Branch
                        </label>
                      </div>
                      <div className="form-check headingCheckBoxs">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckBin"
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="flexCheckBin"
                        >
                          Bin
                        </label>
                      </div>
                      <div className="form-check headingCheckBoxs">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckScheme"
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="flexCheckScheme"
                        >
                          Scheme
                        </label>
                      </div>
                      <div className="form-check headingCheckBoxs">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckProduct"
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="flexCheckProduct"
                        >
                          Product
                        </label>
                      </div>
                      <div className="form-check headingCheckBoxs">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckAccountType"
                        />
                        <label
                          className="form-check-label mb-0"
                          htmlFor="flexCheckAccountType"
                        >
                          Account Type
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Heading : Radio */}
                  <div className="clientNameSelect cmscolheadings checkHeadingBox">
                    <div>
                      <label htmlFor="SetTime">Heading :</label>
                    </div>
                    <div className="headingAllSections">
                      <div className="form-check headingCheckBoxs">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          ddmmyyyyhhmmss
                        </label>
                      </div>
                      <div className="form-check headingCheckBoxs">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          ddmmyyyyhhmm
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------- EigthRow ------------------------------- */}

                  {/* Customer Name XCO */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="CustomerNameXCO">Customer Name XCO</label>
                    <input
                      type="text"
                      name="CustomerNameXCO"
                      id="CustomerNameXCO"
                      className="inputTextBox"
                      placeholder="100"
                    />
                  </div>

                  {/* Customer Name YCO  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="CustomerNameYCO">Customer Name YCO</label>
                    <input
                      type="text"
                      name="CustomerNameYCO"
                      id="CustomerNameYCO"
                      className="inputTextBox"
                      placeholder="5"
                    />
                  </div>

                  {/* Printer Name  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="Printer Name">Printer Name</label>
                    <input
                      type="text"
                      name="Printer Name"
                      id="Printer Name"
                      className="inputTextBox"
                      placeholder="Safenet"
                    />
                  </div>

                  {/* Card Printer Font */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="SetTime">Card Printer Font</label>
                    <input
                      type="text"
                      name="CardPrinterFont"
                      id="CardPrinterFont"
                      className="inputTextBox"
                      placeholder="2"
                    />
                  </div>

                  {/* ------------------------------- NinthRow ------------------------------- */}

                  {/* Credit Card Product Code*/}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="ccpc">Credit Card Product Code</label>
                    <input
                      type="text"
                      name="ccpc"
                      id="ccpc"
                      className="inputTextBox"
                      placeholder="100"
                    />
                  </div>

                  {/* CC Integrated with Chakra  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="integratedChakra">
                      CC Integrated with Chakra
                    </label>
                    <Select
                      defaultValue={integratedChakra}
                      onChange={() => {
                        setIntegratedChakrae();
                        changeintegratedChakra();
                      }}
                      options={options}
                      id="integratedChakra"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {integratedChakra && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Credit card AddOn  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="cardAddOn">Credit card AddOn</label>
                    <Select
                      defaultValue={cardAddOn}
                      onChange={() => {
                        setCardAddOn();
                        changeCardAddOn();
                      }}
                      options={options}
                      id="cardAddOn"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {cardAddOn && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Debit card AddOn  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="cardAddOn2">Debit Card AddOn</label>
                    <Select
                      defaultValue={cardAddOn2}
                      onChange={() => {
                        setCardAddOn2();
                        changeCardAddOn2();
                      }}
                      options={options}
                      id="cardAddOn2"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {cardAddOn2 && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* ------------------------------- TenthRow ------------------------------- */}

                  {/*  Inventory Integrated  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="inventoryIntegrated">
                      Inventory Integrated
                    </label>
                    <Select
                      defaultValue={inventoryIntegrated}
                      onChange={() => {
                        setInventoryIntegrated();
                        changeInventoryIntegrated();
                      }}
                      options={options}
                      id="inventoryIntegrated"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {inventoryIntegrated && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Debit Card Product Code*/}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="dcpc">Debit Card Product Code</label>
                    <input
                      type="text"
                      name="dcpc"
                      id="dcpc"
                      className="inputTextBox"
                      placeholder="02"
                    />
                  </div>

                  {/* PrepaidCard Product Code*/}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="pcpc">PrepaidCard Product Code</label>
                    <input
                      type="text"
                      name="pcpc"
                      id="pcpc"
                      className="inputTextBox"
                      placeholder="02"
                    />
                  </div>

                  {/* Hot Card Role ID*/}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="hcri">Hot Card Role ID</label>
                    <input
                      type="text"
                      name="hcri"
                      id="hcri"
                      className="inputTextBox"
                      placeholder="12"
                    />
                  </div>

                  {/* ------------------------------- eleventh Row ------------------------------- */}

                  {/*  POS Termianl Role ID  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="posId">POS Termianl Role ID</label>
                    <Select
                      defaultValue={posId}
                      onChange={() => {
                        setPosId();
                        changePosId();
                      }}
                      options={options}
                      id="posId"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {posId && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  {/* Insta Account Mapping Role ID*/}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="instaAccount">
                      Insta Account Mapping Role ID
                    </label>
                    <input
                      type="text"
                      name="instaAccount"
                      id="instaAccount"
                      className="inputTextBox"
                      placeholder="0"
                    />
                  </div>

                  {/*  Sub Aggregator  */}
                  <div className="clientNameSelect cmscol">
                    <label htmlFor="subAggregator">POS Termianl Role ID</label>
                    <Select
                      defaultValue={subAggregator}
                      onChange={() => {
                        setSubAggregator();
                        changeSubAggregator();
                      }}
                      options={options}
                      id="posId"
                      classNamePrefix="reactSelectBox"
                      placeholder="false"
                    />
                    {subAggregator && (
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
              CMS Configuration
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
              CMS Configuration
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Success} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Configuration Details Saved Successfully!
            </p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default CmsConfigurationWindow;
