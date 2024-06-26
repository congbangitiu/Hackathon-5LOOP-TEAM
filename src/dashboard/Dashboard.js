import ActivityTab from "../components/dashboard/ActivityTab";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="admin-wrapper">
        <div className="container">
          <ActivityTab />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
