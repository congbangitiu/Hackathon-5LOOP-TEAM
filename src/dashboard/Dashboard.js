import { useState } from "react";

import ActivityTab from "../components/dashboard/ActivityTab";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

import ActivityData from "../data/dashboard/activity-table-data.json";

const Dashboard = () => {
  const [filteredDocument, setFilteredDocument] = useState(ActivityData);
  // const [isDashboardPages, setIsDashboardPages] = useState(true);
  const isDashboardPage = true;

  return (
    <>
      <DashboardSidebar
        isDashboardPage={isDashboardPage}
        originalDocument={ActivityData}
        filteredDocument={filteredDocument}
        setFilteredDocument={setFilteredDocument}
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
