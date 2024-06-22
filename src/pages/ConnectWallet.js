import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ConnectWalletContent from "../components/connetWallet/ConnetWalletContent";
import Divider from "../components/divider/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const ConnectWallet = () => {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Connect Wallet"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <ConnectWalletContent
        heading="Connect with one of our available wallet providers."
        walletCard={[
          {
            id: 1,
            name: "Phantom",
            image: "img/bg-img/phantom.jpeg",
            badgeText: "Hot",
            buttonInfo: [
              {
                text: "Connect",
                color: "warning",
                path: "/login",
                icon: "bi-arrow-right",
              },
            ],
          },
          {
            id: 2,
            name: "Coinbase Wallet",
            image: "img/bg-img/coinbase.png",
            badgeText: "",
            buttonInfo: [
              {
                text: "Connect",
                color: "warning",
                path: "/login",
                icon: "bi-arrow-right",
              },
            ],
          },
          {
            id: 3,
            name: "OKX Wallet",
            image: "img/bg-img/okx.png",
            badgeText: "",
            buttonInfo: [
              {
                text: "Connect",
                color: "warning",
                path: "/login",
                icon: "bi-arrow-right",
              },
            ],
          },
          {
            id: 4,
            name: "Solflare",
            image: "img/bg-img/solflare.png",
            badgeText: "",
            buttonInfo: [
              {
                text: "Connect",
                color: "warning",
                path: "/login",
                icon: "bi-arrow-right",
              },
            ],
          },
        ]}
      />

      <Divider />

      <Footer />
    </>
  );
};

export default ConnectWallet;
