import CreateNewContent from "../components/createNew/CreateNewContent";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function CreateNew() {
  return (
    <>
      <Header />

      <Divider />

      <CreateNewContent />

      <Divider />

      <Footer />
    </>
  );
}