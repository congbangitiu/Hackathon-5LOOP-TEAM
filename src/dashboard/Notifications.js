import { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import NotificationData from "../data/dashboard/notification-data.json";
import { useWallet } from "@solana/wallet-adapter-react";

const DashboardNotification = () => {
  const [filteredDocument, setFilteredDocument] = useState(NotificationData);
  const isDashboardPage = true;
  const [currentAddress, setCurrentAddress] = useState("");
  const [currentBalance, setCurrentBalance] = useState(0);
  const { publicKey } = useWallet();

  const [key, setKey] = useState("today");

  const NotificationToday = filteredDocument.filter(
    (item) => item.tag === "today"
  );
  const notificationTodayCards = NotificationToday.map((elem, index) => (
    <li key={index}>
      <Link to={`/notification-details/${elem.id}`}>
        <i
          className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`}
        />
        {elem.notification}
        <span className="badge bg-warning text-dark fz-12 rounded-pill ms-auto">
          {elem.badgeText}
        </span>
      </Link>
    </li>
  ));

  const NotificationWeek = filteredDocument.filter(
    (item) => item.tag === "week"
  );
  const notificationWeekCards = NotificationWeek.map((elem, index) => (
    <li key={index}>
      <Link to={`/notification-details/${elem.id}`}>
        <i
          className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`}
        />
        {elem.notification}
        <span className="badge bg-warning text-dark fz-12 rounded-pill ms-auto">
          {elem.badgeText}
        </span>
      </Link>
    </li>
  ));

  const notificationAllCards = filteredDocument.map((elem, index) => (
    <li key={index}>
      <Link to={`/notification-details/${elem.id}`}>
        <i
          className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`}
        />
        {elem.notification}
        <span className="badge bg-warning text-dark fz-12 rounded-pill ms-auto">
          {elem.badgeText}
        </span>
      </Link>
    </li>
  ));

  const timeline = [
    {
      eventKey: "today",
      title: "Today",
      cards: notificationTodayCards,
    },
    {
      eventKey: "week",
      title: "7 Day",
      cards: notificationWeekCards,
    },
    {
      eventKey: "all",
      title: "All",
      cards: notificationAllCards,
    },
  ];

  const fetchWalletBalance = () => {
    if (publicKey) {
      const address = publicKey.toBase58();
      setCurrentAddress(address);

      if (address) {
        fetch(
          `https://api.shyft.to/sol/v1/wallet/balance?network=devnet&wallet=${address}`,
          {
            method: "GET",
            headers: {
              "x-api-key": process.env.REACT_APP_API_KEY,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (
              data.success &&
              data.result &&
              data.result.balance !== undefined
            ) {
              setCurrentBalance(data.result.balance);
            } else {
              console.error("Invalid response structure", data);
            }
          })
          .catch((error) => console.log(error));
      }
    } else {
      setCurrentAddress("");
      setCurrentBalance(0);
    }
  };

  useEffect(() => {
    fetchWalletBalance();
  }, [publicKey]);

  return (
    <>
      <DashboardSidebar
        isDashboardPage={isDashboardPage}
        originalDocument={NotificationData}
        currentAddress={currentAddress}
        currentBalance={currentBalance}
        filteredDocument={filteredDocument}
        setFilteredDocument={setFilteredDocument}
      />

      <div className="admin-wrapper">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-lg-10">
              <Tabs
                id="dashboard-notification"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="border-0 mb-3 dashboard-tabs"
              >
                {timeline.map((tl, index) => (
                  <Tab key={index} eventKey={tl.eventKey} title={tl.title}>
                    <div className="notification-content-wrap">
                      <ul className="notification-list ps-0 mb-0">
                        {tl.cards}
                      </ul>
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNotification;
