import Breadcrumb from "../components/Breadcrumb";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TermsPrivacyContent from "../components/TermsPrivacy";

export default function License() {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="License"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <TermsPrivacyContent
        contentBody={[
          "<h3>LICENSE NOTICE FOR NFT-BSTUDY</h3>",
          "<p>This License Notice governs the use of NFT-BStudy, a cutting-edge platform that leverages blockchain technology, specifically Solana, to revolutionize the way study materials are distributed and monetized. By accessing or using the NFT-BStudy platform, you agree to be bound by the following terms and conditions:</p>",
          "<h4>1. Ownership and Intellectual Property</h4>",
          "<p>Creators retain full ownership and intellectual property rights to the study materials they upload to NFT-BStudy. By listing materials on the platform, creators grant NFT-BStudy a non-exclusive, worldwide, royalty-free license to display and distribute these materials as part of the service.</p>",
          "<h4>2. Usage Rights</h4>",
          "<p>Users are granted a limited, non-transferable, non-exclusive license to access and use the study materials listed on NFT-BStudy for personal, non-commercial purposes. Users may not reproduce, distribute, or create derivative works from any content accessed through the platform without the explicit permission of the content creator.</p>",
          "<h4>3. Content Management</h4>",
          "<p>Creators are responsible for ensuring that their content complies with all applicable laws and does not infringe on the rights of third parties. NFT-BStudy reserves the right to remove or disable access to any content that violates these terms or is otherwise objectionable.</p>",
          "<h4>4. Wallet Connection and Security</h4>",
          "<p>NFT-BStudy utilizes secure blockchain technology to manage transaction history and verify ownership. Users are responsible for maintaining the security of their wallet connections and ensuring that their account information is up to date.</p>",
          "<h4>5. AI-Driven Features</h4>",
          "<p>The platform includes AI-driven tools for content summaries, interactive insights, and smart pricing suggestions. While these tools are designed to enhance the user experience, they should not be relied upon as the sole basis for academic or financial decisions.</p>",
          "<h4>6. Royalties and Market Conditions</h4>",
          "<p>Creators may earn royalties from secondary market sales of their study materials. NFT-BStudy does not guarantee any specific level of income and is not responsible for fluctuations in market conditions that may affect earnings.</p>",
          "<h4>7. Limitation of Liability</h4>",
          "<p>NFT-BStudy provides the platform and services on an 'as is' basis and makes no warranties regarding the accuracy, reliability, or availability of the service. To the fullest extent permitted by law, NFT-BStudy disclaims all liability for any direct, indirect, incidental, or consequential damages arising from the use of the platform.</p>",
          "<h4>8. Amendments</h4>",
          "<p>NFT-BStudy reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on the platform. Continued use of NFT-BStudy following the posting of changes constitutes acceptance of those changes.</p>",
          "<p>If you have any questions about this License Notice, please contact us at support@nft-bstudy.com.</p>",
        ]}
        infoLastUpdated="Last updated June 27, 2024"
      />

      <Divider />

      <Footer />
    </>
  );
}
