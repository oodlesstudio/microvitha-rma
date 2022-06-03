import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

// const activeLink = (arr) => {};

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

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

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    }
    if (arr === dashBoardPath) {
      return "activeTab";
    }
    if (arr === financialReportPath) {
      return "activeTab";
    }
    if (arr === loanPath) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const dashboardCardPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
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
      </Popover.Body>
    </Popover>
  );

  const adminCardPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Role Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Create User</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const masterPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Product Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Product Approval</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const mfiApplicationPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MFI Application</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MFI Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MFI Onboard</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const transactionPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Saving Ledger</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Statement</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">EOD Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MFI Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Active Loan Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Settlement Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">CTR Beyond The Limit</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Suspicious Transaction Report
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">SMS Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const operatingReportingPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Registration Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">CIB Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">NPL Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Individual Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Consolidate Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="sidebarSmall">
      {/* DashBoard Card */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={dashboardCardPopover}
          rootClose
        >
          <div className={activeLink("/dashboard")}>
            <span className="sidebarIconSize icon-Dashboard">
              {/* icon-Dashboard Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* admin */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={adminCardPopover}
          rootClose
        >
          <span className=" sidebarIconSize icon-admin-management">
            {/*  icon-admin-management Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Master */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={masterPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-master">
            {/* icon-master Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* mfi application */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={mfiApplicationPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-MFI-Application">
            {/* mfi Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Transaction */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={transactionPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-transaction">
            {/* icon-transaction Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Operating Report*/}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={operatingReportingPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Operating-Report">
            {/* icon-transaction Small Icon */}
          </span>
        </OverlayTrigger>
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
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
