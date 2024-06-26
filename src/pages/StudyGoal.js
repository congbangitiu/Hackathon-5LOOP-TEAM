import Breadcrumb from "../components/Breadcrumb";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NewsletterContent from "../components/NewsletterContent";

const StudyGoal = () => {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Study Goal Creator"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <NewsletterContent
        title="Create your perfect study goal plan"
        subTitle="We will notify you based on Spaced Repetition technique"
        formInfo={[
          {
            inputPlaceholder:
              "Type your exam type, courses, and date in one line",
            helperText: "We'll never share your information with anyone.",
            helperIcon: "bi-lock",
            buttonColor: "primary",
            buttonText: "Create a Personalized Study Goal",
          },
        ]}
      />

      <Divider />

      <Footer />
    </>
  );
};

export default StudyGoal;
