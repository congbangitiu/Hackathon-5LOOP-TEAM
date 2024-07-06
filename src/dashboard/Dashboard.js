import { useState, useEffect } from "react";
import ActivityTab from "../components/dashboard/ActivityTab";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import ActivityData from "../data/dashboard/activity-table-data.json";
import { useWallet } from "@solana/wallet-adapter-react";

const Dashboard = () => {
  const [activityHistory, setActivityHistory] = useState([]);
  const [currentAddress, setCurrentAddress] = useState("");
  const [currentBalance, setCurrentBalance] = useState(0);

  const isDashboardPage = true;
  const { publicKey } = useWallet();

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

  const fetchActivityHistory = () => {
    if (publicKey) {
      const address = publicKey.toBase58();
      setCurrentAddress(address);

      fetch(
        `https://api.shyft.to/sol/v1/transaction/history?network=devnet&tx_num=10&account=${address}`,
        {
          method: "GET",
          headers: {
            "x-api-key": process.env.REACT_APP_API_KEY,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data[0] && data[0].result) {
            setActivityHistory(data[0].result);
          } else {
            console.error("Invalid response structure", data);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    fetchWalletBalance();
    fetchActivityHistory();
  }, [publicKey]);

  const [filteredDocument, setFilteredDocument] = useState(activityHistory);

  console.log(currentBalance);

  return (
    <>
      <DashboardSidebar
        publicKey={publicKey}
        isDashboardPage={isDashboardPage}
        originalDocument={ActivityData} //activityHistory
        filteredDocument={filteredDocument}
        setFilteredDocument={setFilteredDocument}
        currentAddress={currentAddress}
        setCurrentAddress={setCurrentAddress}
        currentBalance={currentBalance}
        activityHistory={activityHistory}
        setActivityHistory={setActivityHistory}
      />
      <div className="admin-wrapper">
        <div className="container">
          <ActivityTab filteredDocument={filteredDocument} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
