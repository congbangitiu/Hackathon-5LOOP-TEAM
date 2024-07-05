import "react-medium-image-zoom/dist/styles.css";

import Divider from "../components//Divider";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Material = ({ TOKEN_ID }) => {
  return (
    <div>
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "60vh",
        }}
      >
        <embed
          title="darkblock"
          allow="fullscreen"
          src={`https://app.darkblock.io/platform/sol-devnet/embed/viewer/41SSeLpN7hoNV3ByiWpFhuribtJfkdS6eXfYtdkNXPqJ`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></embed>
      </div>

      <Divider />

      <Footer />
    </div>
  );
};

export default Material;
