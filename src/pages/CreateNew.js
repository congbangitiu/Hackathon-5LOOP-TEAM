import Breadcrumb from "../components/Breadcrumb";
import CreateNewContent from "../components/createNew/CreateNewContent";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function CreateNew() {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Create New Study NFT Pass"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <CreateNewContent />

      <Divider />

      <Footer />
    </>
  );
}
