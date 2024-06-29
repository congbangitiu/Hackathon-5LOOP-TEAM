import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";

import Divider from "../components//Divider";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import DiscoverNFTData from "../data/discover-nft.json";

const Material = () => {
  // const discoverID = parseInt(useParams().DISCOVERID, 10);
  // const discoverDetailsData = DiscoverNFTData.filter(
  //   (item) => item.id === discoverID
  // );

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
      {/* Check if NFT Pass is correct for current URL http://localhost:3000/material/1 then only show this if have */}
      <iframe
        title="darkblock"
        allow="fullscreen"
        // src={`https://app.darkblock.io/platform/sol/embed/viewer/${TOKEN_ID}`}
      ></iframe>

      <Divider />

      <Footer />
    </>
  );
};

export default Material;
