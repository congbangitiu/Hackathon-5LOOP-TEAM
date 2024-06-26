import ActivityTab from "../components/dashboard/activityTab/ActivityTab";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import HeroCard from "../components/dashboard/hero/HeroCard";
import TopAuthor from "../components/dashboard/topAuthor/TopAuthor";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />

      <CreateNewButton />

      <div className="admin-wrapper">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-xxl-6">
              <div className="row g-4">
                {/* Hero Card */}
                <HeroCard
                  backgroundImage="img/bg-img/44.jpg"
                  heading="Explore, buy, and sell exceptional NFTs."
                  subHeading="It's crafted with the latest trend of design & coded with all modern approaches."
                  buttonGroup={[
                    {
                      style: "warning",
                      path: "/explore1",
                      text: "Discover",
                    },
                    {
                      style: "dark",
                      path: "/create-new",
                      text: "Create",
                    },
                  ]}
                />
              </div>
            </div>

            {/* Activity Tab */}
            <ActivityTab />

            <TopAuthor title="Top Authors" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
