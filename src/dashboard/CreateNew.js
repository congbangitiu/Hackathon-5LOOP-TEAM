import CreateNewContent from "../components/createNew/CreateNewContent";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Divider from "../components/Divider";

export default function CreateNew() {
  return (
    <>
      <DashboardHeader />

      <Divider />

      <CreateNewContent />

      <Divider />
    </>
  );
}
