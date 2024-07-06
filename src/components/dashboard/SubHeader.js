import { Link } from "react-router-dom";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Dropdown from "react-bootstrap/Dropdown";
import NotificationData from "../../data/dashboard/notification-data.json";
import SearchForm from "../header/SearchForm";
import useStickyHeader from "../header/StickyHeader";
import { Link } from "react-router-dom";

const BrandLogo = "img/core-img/db-logo.png";

const SubHeader = (props) => {
  const {
    isActive = [],
    setActive = () => {},
    isDashboardPage,
    originalDocument = [],
    filteredDocument = [],
    setFilteredDocument = () => {},
  } = props;

  let [check] = useState(true);
  const sticky = useStickyHeader(10);
  const stickyClass = `${sticky && check ? "sticky-on" : ""}`;

  const handleToggle = () => {
    setActive(!isActive);
  };

  const notificationCards = NotificationData.slice(0, 4).map((elem, index) => (
    <li key={index}>
      <Link className="dropdown-item" to={`/notification-details/${elem.id}`}>
        <i
          className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`}
        />
        {elem.notification}
      </Link>
    </li>
  ));
  return (
    <header
      className={`header-area ${stickyClass} dashboard-header px-0 px-sm-0`}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            {/* Brand Logo */}
            <div className="admin-logo me-2 me-sm-3">
              <Link className="d-block" to="/">
                <img src={`${process.env.PUBLIC_URL}/${BrandLogo}`} alt="" />
              </Link>
            </div>

            {/* Search Form */}
            <SearchForm
              isDashboardPage={isDashboardPage}
              originalDocument={originalDocument}
              filteredDocument={filteredDocument}
              setFilteredDocument={setFilteredDocument}
            />
          </div>

          {/* Header Meta */}
          <div className="header-meta d-flex align-items-center">
            {/* Notification */}
            <Dropdown className="user-dropdown mx-1 mx-sm-3">
              <Dropdown.Toggle className="user-btn" id="userDropdown">
                <img
                  src={`${process.env.PUBLIC_URL}/img/core-img/notification.png`}
                  alt=""
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="mt-3 noti-dd-menu" align="end">
                {notificationCards}
                <li>
                  <Link
                    className="dropdown-item justify-content-center"
                    to="/notifications"
                  >
                    All notifications
                  </Link>
                </li>
              </Dropdown.Menu>
            </Dropdown>

            {/* Menu Toggler */}
            <div className="menu-toggler ms-1 ms-sm-3" onClick={handleToggle}>
              <i className="bi bi-list" />
            </div>
            <WalletMultiButton className="btn btn-ghost mr-4" />
            {/* Button */}
            <Link
              className="btn btn-sm btn-danger rounded-pill ms-2 ms-sm-3 d-none d-sm-block"
              to="/"
            >
              Back to Marketplace
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SubHeader;
