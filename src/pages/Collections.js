import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CollectionContent from "../components/collection/CollectionContent";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import CollectionData from "../data/collection.json";

export default function Collections() {
  const [filteredDocument, setFilteredDocument] = useState(CollectionData);

  // useEffect(() => {
  //   fetch(
  //     "https://api.shyft.to/sol/v1/marketplace/active_sellers?network=devnet&marketplace_address=JDn3zWPKcTd1qurNNjvr8YGYcVrdm8i7eHam7M6DQggo",
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFilteredDocument(data[0].result);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <Header
        originalDocument={CollectionData}
        filteredDocument={filteredDocument}
        setFilteredDocument={setFilteredDocument}
      />

      <Breadcrumb
        breadcrumbTitle="Course Collections"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <CollectionContent
        filteredDocument={filteredDocument}
        setFilteredDocument={setFilteredDocument}
      />

      <Divider />

      <Footer />
    </>
  );
}
