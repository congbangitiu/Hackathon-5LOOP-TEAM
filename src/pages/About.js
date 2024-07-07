import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import AboutCard from "../components/about/AboutCard";
import AboutContent from "../components/about/AboutContent";
import CoolFacts from "../components/about/CoolFacts";
import Testimonial from "../components/about/Testimonial";
import Breadcrumb from "../components/Breadcrumb";
import CTA from "../components/CTA";
import Divider from "../components/Divider";

export default function About() {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="About Us"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <div className="about-area">
        <AboutCard />

        <Divider />

        <CTA
          backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc
          text="Resources for getting started with BStudy."
          buttonText="Get Started"
          buttonColor="warning"
          buttonURL="/help-center"
          buttonIcon=""
        />

        <Divider />

        <AboutContent
          textSectionOrder="20"
          textSection={[
            "<h2 class='h2 fw-bold mb-3'>Digital NFT PASS are trends now. Welcome to the world of NFT-BStudy.</h2>",
            `<p class='fz-18'>NFT-BStudy is crafted with the latest Web3 technology with all modern approaches. It’s a robust and multi-dimensional platform, enabling users to buy, sell, and trade study materials as NFTs, ensuring authenticity and security. It's a great companion with  <a href="https://www.facebook.com/bstudy.official" target="_blank" rel="noopener noreferrer" >BStudy</a> - our flagship TA service and proud to be a part of BStudy Holdings</p>`,
            "<a class='btn btn-primary rounded-pill mt-4' href='/#'>Know More</a>",
          ]}
          imageOrder="10"
          image="img/illustrator/4.png"
        />

        <Divider />

        <CoolFacts
          coolFactsData={[
            {
              value: "3409",
              title: "Total Items",
            },
            {
              value: "7831",
              title: "Users",
            },
            {
              value: "45236",
              title: "NFTs",
            },
            {
              value: "247",
              title: "Daily Sale",
            },
          ]}
        />

        <Divider />
      </div>

      <Divider />

      <Footer />
    </>
  );
}
