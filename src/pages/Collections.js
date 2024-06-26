import Breadcrumb from "../components/Breadcrumb";
import CollectionContent from "../components/collection/CollectionContent";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Collections() {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Course Collections"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <CollectionContent />

      <Divider />

      <Footer />
    </>
  );
}
