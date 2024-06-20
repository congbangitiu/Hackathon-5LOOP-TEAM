import CTA from "../components/cta/CTA";
import Divider from "../components/divider/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeroTwo from "../components/hero/HeroTwo";
import PopularCollection from "../components/popularCollection/PopularCollection";
import Process from "../components/process/Process";
import TodaysDrop from "../components/todaysDrop/TodaysDrop";
import TopBuyer from "../components/topBuyer/TopBuyer";
import TopSeller from "../components/topSeller/top-seller";

export default function HomeTwo() {
  return (
    <>
      <Header />

      <HeroTwo
        heading="Exchange for better study. Welcome to NFT-BStudy"
        subHeading="Unlock the potential of your study materials. Earn and learn with NFT-BStudy's innovative NFT marketplace made possible by Solana."
        buttonInfo={[
          {
            btnColor: "primary",
            btnText: "Explore collections",
            btnURL: "/explore2",
            btnIcon: "bi-grid-3x3-gap",
          },
        ]}
      />
      <Divider />

      <PopularCollection title="Trending in the last" />

      <Divider />

      {/* Todays Drop, Top Seller, Top Buyer */}
      <div className="top-seller-wrapper">
        <div className="container">
          <div className="row g-4 g-lg-5 justify-content-center">
            {/* Data: data > todaysDrop > todays-drop.json */}
            <TodaysDrop
              heading="Today's Drops"
              buttonText="View All Drops"
              buttonURL="featured-items"
            />
            {/* Data: data > topSeller > top-seller.json */}
            <TopSeller
              heading="Top Seller"
              buttonText="View All Seller's"
              buttonURL="top-seller"
            />
            {/* Data: data > topBuyer > top-buyer.json */}
            <TopBuyer
              heading="Top Buyer"
              buttonText="View All Buyer's"
              buttonURL="top-buyer"
            />
          </div>
        </div>
      </div>
      <Divider />

      <Process />

      <Divider />

      <CTA
        backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc
        text="Getting started with NFT-BStudy platform"
        buttonText="Read the docs"
        buttonColor="info"
        buttonURL="/help-center"
        buttonIcon=""
      />

      <Divider />

      <Footer />
    </>
  );
}
