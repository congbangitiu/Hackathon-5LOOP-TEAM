import FooterNav from "./FooterNav";
import LeftWidget from "./LeftWidget";
import FooterWidget from "./Widget";

export default function Footer() {
  const footerBgImg = "img/bg-img/1.jpg";
  const footerBgShape = "img/core-img/shape1.png";

  return (
    <footer
      className="footer-area pb-120 pt-120"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/${footerBgImg}')`,
      }}
    >
      {/* Background Shape */}
      <img
        className="footer-bg-shape"
        src={`${process.env.PUBLIC_URL}/${footerBgShape}`}
        alt="Shape"
      />

      <div className="container">
        <div className="row">
          {/* Footer Widget */}
          <LeftWidget
            lightLogo="img/core-img/logo.png"
            darkLogo="img/core-img/logo-white.png"
            subText="The first study material NFT marketplace on Solana"
            contactInfo="Call: +84 XX XXXXXXXX <br /> Email: betterstudy.official@gmail.com"
            socialVisibility="visible" // try 'visible' or 'hidden'
            socialTitle="Visit our social"
            socialLists={[
              {
                tootipPosition: "top",
                title: "X",
                icon: "img/core-img/icons8-twitter.svg",
                url: "/",
              },
              {
                tootipPosition: "top",
                title: "Instagram",
                icon: "img/core-img/icons8-instagram.svg",
                url: "/",
              },
            ]}
            newsletterVisibility="hidden" // try 'visible' or 'hidden'
          />

          {/* Footer Widget */}
          <div className="col-12 col-lg-7">
            <div className="row g-4">
              {/* Single Widget */}
              <FooterWidget
                widgetTitle="Explore"
                navList={[
                  {
                    text: "By University",
                    url: "/explore1",
                  },
                  {
                    text: "By Creator",
                    url: "/explore2",
                  },
                  {
                    text: "Featured Pass",
                    url: "/featured-items",
                  },
                  {
                    text: "Courses Collections",
                    url: "/collections",
                  },
                  {
                    text: "Top Creator",
                    url: "/top-seller",
                  },
                  {
                    text: "Top Buyer",
                    url: "/top-buyer",
                  },
                ]}
              />

              {/* Single Widget */}
              <FooterWidget
                widgetTitle="Marketplace"
                navList={[
                  {
                    text: "Slides",
                    url: "#",
                  },
                  {
                    text: "Exam Papers",
                    url: "#",
                  },
                  {
                    text: "Exercises",
                    url: "#",
                  },
                  {
                    text: "Books",
                    url: "#",
                  },
                  {
                    text: "Summary Records",
                    url: "#",
                  },
                ]}
              />

              {/* Single Widget */}
              <FooterWidget
                widgetTitle="About"
                navList={[
                  {
                    text: "Docs",
                    url: "#",
                  },
                  {
                    text: "Blog",
                    url: "#",
                  },
                  {
                    text: "Licenses Notice",
                    url: "#",
                  },
                  {
                    text: "Careers",
                    url: "#",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">
          {/* Copywrite Text */}
          <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
            <p className="mb-0">
              {new Date().getFullYear()} © All rights reserved by{" "}
              <a href="" target="_blank" rel="noreferrer">
                @BStudy Official
              </a>
            </p>
          </div>

          {/* Footer Nav */}
          <FooterNav
            navList={[
              {
                title: "Privacy Policy",
                link: "/privacy",
              },
              {
                title: "Terms & Conditions",
                link: "/terms",
              },
            ]}
          />
        </div>
      </div>
    </footer>
  );
}
