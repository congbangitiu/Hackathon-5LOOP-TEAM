import BlogContent from "../components/BlogContent";
import Breadcrumb from "../components/Breadcrumb";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Blog = () => {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Blog"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <BlogContent />

      <Divider />

      <Footer />
    </>
  );
};

export default Blog;
