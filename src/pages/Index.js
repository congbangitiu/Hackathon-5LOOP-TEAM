import CTA from "../components/cta/CTA";
import Divider from "../components/divider/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import DemoHero from "../components/hero/DemoHero";

export default function DemoPage() {
  return (
    <>
      <Header />

      <DemoHero
        title="First Study Material NFT Marketplace"
        subTitle="~ Exchange for Better Study ~"
        btnInfo={[
          {
            color: "primary",
            text: "Explore Now",
            path: "/home1",
            icon: "bi-arrow-right",
          },
          {
            color: "minimal",
            text: "",
            path: "/dashboard",
            icon: "",
          },
        ]}
        heroThumbnail="img/illustrator/2.png"
      />

      <Divider />

      <CTA
        backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc
        text="Beautifully designed & coded, NFT buying & selling React JS template."
        buttonText="Purchase Now"
        buttonColor="warning"
        buttonURL="https://themeforest.net/item/funto-react-nft-marketplace/36593340"
        buttonIcon=""
      />

      {/* <Divider /> */}

      {/* <TemplateFeature /> */}

      <Divider />

      {/* <TemplateDemos /> */}

      <Footer />
    </>
  );
}
