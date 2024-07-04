import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import SubHeader from "./SubHeader";

const DashboardSidebar = (props) => {
  const {
    isDashboardPage,
    originalDocument = [],
    filteredDocument = [],
    setFilteredDocument = () => {},
  } = props;

  const [currentBalance, setCurrentBalance] = useState(0);

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.shyft.to/sol/v1/wallet/balance?network=devnet&wallet=4FDoxjfuapy9HRAVSwkLiqekgM4hohcomKPNSfFn7dKA",
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.result && data.result.balance !== undefined) {
          setCurrentBalance(data.result.balance);
        } else {
          console.error("Invalid response structure", data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

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
      balance: currentBalance,
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

  return (
    <>
      {/* Header */}
      <SubHeader
        isActive={isActive}
        setActive={setActive}
        isDashboardPage={isDashboardPage}
        originalDocument={originalDocument}
        filteredDocument={filteredDocument}
        setFilteredDocument={setFilteredDocument}
      />

      {/* Sidebar */}
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

export default DashboardSidebar;
