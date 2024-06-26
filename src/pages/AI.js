import Breadcrumb from "../components/Breadcrumb";
import CreateNewAI from "../components/createNew/CreateNewAI";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function AI() {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Personalized AI"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <CreateNewAI />

      <Divider />

      <Footer />
    </>
  );
}
