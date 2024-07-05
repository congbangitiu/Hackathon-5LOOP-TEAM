import "react-medium-image-zoom/dist/styles.css";

import Divider from "../components//Divider";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Material = ({ TOKEN_ID }) => {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="View Material" // {title}
        breadcrumbNav={[
          {
            navText: "Featured",
            path: "/featured-items",
          },
        ]}
      />

      <iframe
        title="darkblock"
        allow="fullscreen"
        src={`https://app.darkblock.io/platform/sol-devnet/embed/viewer/${TOKEN_ID}`}
      ></iframe>

      <Divider />

      <Footer />
    </>
  );
};

export default Material;
