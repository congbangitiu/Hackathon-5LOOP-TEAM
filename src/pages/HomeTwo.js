import { useState, useEffect } from "react";
import CTA from "../components/CTA";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeroTwo from "../components/HeroTwo";
import PopularCollection from "../components/PopularCollection";
import Process from "../components/Process";
import PopularNFTData from "../data/popular-nft.json";

export default function HomeTwo() {
  const [filteredDocument, setFilteredDocument] = useState(PopularNFTData);

  useEffect(() => {
    fetch(
      "https://api.shyft.to/sol/v2/marketplace/active_listings?network=devnet&marketplace_address=JDn3zWPKcTd1qurNNjvr8YGYcVrdm8i7eHam7M6DQggo&sort_by=list_date&sort_order=desc&size=9",
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredDocument(data[0].result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header
        originalDocument={PopularNFTData}
        filteredDocument={filteredDocument}
        setFilteredDocument={setFilteredDocument}
      />

      <HeroTwo
        heading="Exchange for better study. Welcome to NFT-BStudy"
        subHeading="Unlock the potential of your study materials. Earn or learn with NFT-BStudy's innovative NFT marketplace made possible by Solana."
        buttonInfo={[
          {
            btnColor: "primary",
            btnText: "Explore collections",
            btnURL: "/explore",
            btnIcon: "bi-grid-3x3-gap",
          },
        ]}
      />
      <Divider />

      <PopularCollection
        title="Trending in the last"
        PopularNFTData={PopularNFTData}
        filteredDocument={filteredDocument}
      />

      <Divider />

      <Process />

      <Divider />

      <CTA
        backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc
        text="Getting started with NFT-BStudy platform"
        buttonText="Visit Help Guide"
        buttonColor="info"
        buttonURL="/help-center"
        buttonIcon=""
      />

      <Divider />

      <Footer />
    </>
  );
}
