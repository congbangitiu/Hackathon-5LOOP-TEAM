import CTA from "../components/CTA";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeroTwo from "../components/HeroTwo";
import PopularCollection from "../components/PopularCollection";
import Process from "../components/Process";

export default function HomeTwo() {
  return (
    <>
      <Header />

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

      <PopularCollection title="Trending in the last" />

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
