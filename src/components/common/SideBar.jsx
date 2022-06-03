import React, { useEffect } from "react";
import { Link, useLocation, matchPath, useNavigate } from "react-router-dom";
// Components

// path match

const SideBar = (props) => {
  let path = useLocation().pathname;
  let navigate = useNavigate();

  // Dashboard Path
  let dashBoardPath = matchPath("/dashboard/*", path);
  if (dashBoardPath) {
    dashBoardPath = dashBoardPath.pathnameBase;
  }
  // financial report Path
  let financialReportPath = matchPath("/financial-report/*", path);
  if (financialReportPath) {
    financialReportPath = financialReportPath.pathnameBase;
  }

  // loan Path
  let loanPath = matchPath("/loan/*", path);
  if (loanPath) {
    loanPath = loanPath.pathnameBase;
  }

  // route Re-Direct
  useEffect(() => {
    if (path === "/") {
      navigate("/dashboard/mfi-application");
    }
  });

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const activeBtnClass = (arr) => {
    if (arr === path) {
      return "accordion-button";
    }
    if (arr === financialReportPath) {
      return "accordion-button";
    }
    if (arr === loanPath) {
      return "accordion-button";
    }
    if (arr === dashBoardPath) {
      return "accordion-button";
    } else {
      return "accordion-button collapsed";
    }
  };
  const activeAriaExpand = (arr = []) => {
    if (arr === path) {
      return "true";
    }
    if (arr === financialReportPath) {
      return "true";
    }
    if (arr === loanPath) {
      return "true";
    }
    if (arr === dashBoardPath) {
      return "true";
    } else {
      return "false";
    }
  };
  const activeAccordionBodyClass = (arr) => {
    if (arr === path) {
      return "accordion-collapse collapse show";
    }
    if (arr === financialReportPath) {
      return "accordion-collapse collapse show";
    }
    if (arr === loanPath) {
      return "accordion-collapse collapse show";
    }
    if (arr === dashBoardPath) {
      return "accordion-collapse collapse show";
    } else {
      return "accordion-collapse collapse ";
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/* Dashboard */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDashboard">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDashboard"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseDashboard"
            >
              <span className="sidebarIconSize icon-Dashboard"></span>
              <span className="fontSize14 ms-2">Dashboard</span>
            </button>
          </h2>
          <div
            id="collapseDashboard"
            className={activeAccordionBodyClass("/dashboard")}
            aria-labelledby="headingDashboard"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Summary</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/mfi-application"
                    className={activeLink("/dashboard/mfi-application")}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">MFI Summary</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Admin */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAdmin">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAdmin"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseAdmin"
            >
              <span className="sidebarIconSize icon-admin-management"></span>
              <span className="fontSize14 ms-2">Admin</span>
            </button>
          </h2>
          <div
            id="collapseAdmin"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAdmin"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Role Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Create User</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Master */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingMaster">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseMaster"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseMaster"
            >
              <span className="sidebarIconSize icon-master"></span>
              <span className="fontSize14 ms-2">Master</span>
            </button>
          </h2>
          <div
            id="collapseMaster"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingMaster"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Product Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Product Approval</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Agent Application */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingMFIApplication">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseMFIApplication"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseMFIApplication"
            >
              <span className="sidebarIconSize icon-MFI-Application"></span>
              <span className="fontSize14 ms-2">MFI Application</span>
            </button>
          </h2>
          <div
            id="collapseMFIApplication"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingMFIApplication"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">MFI Application</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">MFI Verification</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">MFI Onboard</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Transaction */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAccount">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTransaction"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseTransaction"
            >
              <span className="sidebarIconSize icon-transaction"></span>
              <span className="fontSize14 ms-2">Transaction</span>
            </button>
          </h2>
          <div
            id="collapseTransaction"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAccount"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Saving Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Statement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Summary</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">EOD Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">MFI Summary</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Active Loan Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Settlement Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">CTR Beyond The Limit</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Suspicious Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">SMS Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Transaction</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Operating Report */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAccount">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOperatingReport"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseOperatingReport"
            >
              <span className="sidebarIconSize icon-Operating-Report"></span>
              <span className="fontSize14 ms-2">Operating Report</span>
            </button>
          </h2>
          <div
            id="collapseOperatingReport"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAccount"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Registration Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">CIB Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">NPL Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Individual Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Loan Consolidate Report
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
