import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Link, NavLink } from "react-router-dom";
import NotificationData from "../../data/dashboard/notification-data.json";
import AirdropButton from "../AirdropButton";
import useStickyHeader from "../header/StickyHeader";

const DashboardHeader = () => {
  const BrandLogo = "img/core-img/db-logo.png";

  let [check] = useState(true);
  const sticky = useStickyHeader(10);
  const stickyClass = `${sticky && check ? "sticky-on" : ""}`;

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const userInfo = [
    {
      thumbnail: "img/bg-img/u2.jpg",
      username: "Designing W.",
      userType: "Premium User",
    },
  ];

  const balanceCard = [
    {
      title: "Current balance",
      icon: "img/core-img/solana-icon.svg",
      balance: 4.0678,
      balanceType: "SOL",
    },
  ];

  const AdminNav = [
    {
      id: 1,
      path: "/activity",
      icon: "bi-person-circle",
      text: "My Activity",
    },
    {
      id: 2,
      path: "/my-collection",
      icon: "bi-columns-gap",
      text: "My Collections",
    },
    {
      id: 3,
      path: "/notifications",
      icon: "bi-bell",
      text: "Notifications",
    },
  ];

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
    <>
      <header
        className={`header-area ${stickyClass} dashboard-header px-0 px-sm-0`}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              {/* Brand Logo */}
              <div className="admin-logo me-2 me-sm-3">
                <Link className="d-block" to="/dashboard">
                  <img src={`${process.env.PUBLIC_URL}/${BrandLogo}`} alt="" />
                </Link>
              </div>

              {/* Search Form */}
              <div className="search-form">
                <Form
                  className="position-relative d-flex align-items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search anything"
                  />
                  <button className="position-absolute" type="submit">
                    <i className="bi bi-search" />
                  </button>
                </Form>
              </div>
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

      <div
        className={`admin-sidebar-wrap ${
          isActive ? "sidebar-active" : "sidebar-disabled"
        }`}
      >
        <div className="overflowY-scroll">
          {/* User Profile */}
          <div className="user-profile">
            {/* User Name */}
            <div className="user-name mb-5">
              <div className="d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/${userInfo[0].thumbnail}`}
                  alt=""
                />
                <div className="ms-3">
                  <h6 className="lh-1 text-dark fz-18">
                    {userInfo[0].username}
                  </h6>
                  <span className="badge bg-primary fz-12">
                    {userInfo[0].userType}
                  </span>
                </div>
              </div>
            </div>

            <AirdropButton />

            {/* Balance */}
            <div className="card shadow mb-5">
              <div className="card-body text-center p-4">
                <h6 className="mb-1">{balanceCard[0].title}</h6>
                <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center">
                  <img
                    className="me-1"
                    src={`${process.env.PUBLIC_URL}/${balanceCard[0].icon}`}
                    alt=""
                  />
                  <span className="counter">{balanceCard[0].balance}</span>
                  <span className="ms-2">{balanceCard[0].balanceType}</span>
                </h5>
              </div>
            </div>
          </div>

          {/* Sidenav */}
          <div className="sidenav">
            <ul>
              <li>Menu</li>
              {AdminNav.map((elem, index) => (
                <li key={index}>
                  <NavLink to={elem.path}>
                    <i className={`bi ${elem.icon}`} />
                    {elem.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <div className="mt-5" />
            {/* Copyright Text */}
            <div className="copywrite-text mt-4">
              <p className="mb-0 fz-14">
                {new Date().getFullYear()} © All rights reserved by
                <a
                  className="fz-14 ms-1"
                  rel="noreferrer"
                  href="https://themeforest.net/user/designing-world/portfolio"
                  target="_blank"
                >
                  BStudy Official
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
