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
        src="https://firebasestorage.googleapis.com/v0/b/nft-bstudy.appspot.com/o/pdf%2Freport%20(1).pdf?alt=media&token=91959344-86d4-4fa2-9362-8562df36c6b8#toolbar=0"
        type="application/pdf"
        width="100%"
        title="Embedded PDF Viewer"
      />

      <Divider />

      <Footer />
    </>
  );
};

export default Material;
