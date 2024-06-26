import Breadcrumb from "../components/Breadcrumb";
import ContactContent from "../components/ContactContent";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Contact = () => {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Contact"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      {/* Contact Content */}
      <ContactContent
        contactTitle="You still wondering? Let's talk!"
        contactSubTitle="Write to us or give us a call. We will reply to you as soon as possible. But yes, it can take up to 24 hours."
        mapIframeSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1316505607742!2d106.79904467453298!3d10.877590057320619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a415a9d221%3A0x550c2b41569376f9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBRdeG7kWMgVOG6vyAtIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1719423169954!5m2!1svi!2s"
      />

      <Divider />

      <Footer />
    </>
  );
};

export default Contact;
