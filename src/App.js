import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery-nice-select/css/nice-select.css";
import "tiny-slider/dist/tiny-slider.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-icons.css";
import "./assets/scss/style.scss";

import DiscoverNFTDetails from "./components/discover/DiscoverNFTDetails";
import FeaturedNFTDetails from "./components/featuredNFT/FeaturedNFTDetails";
import Dashboard from "./dashboard/Dashboard";
import DashboardCollection from "./dashboard/MyCollection";
import DashboardWallet from "./dashboard/MyWallet";
import DashboardNotificationDetails from "./dashboard/NotificationDetails";
import DashboardNotification from "./dashboard/Notifications";
import DashboardSettings from "./dashboard/Settings";
import Collections from "./pages/Collections";
import ExploreTwo from "./pages/ExploreTwo";
import FeaturedItems from "./pages/FeaturedItems";
import HomeTwo from "./pages/HomeTwo";
import Newsletter from "./pages/Newsletter";
import StudyGoal from "./pages/StudyGoal";
import TopBuyer from "./pages/TopBuyer";
import TopSeller from "./pages/TopSeller";

import Author from "./pages/Author";
import ConnectWallet from "./pages/ConnectWallet";
import CreateNew from "./pages/CreateNew";

import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

import Contact from "./pages/Contact";
import License from "./pages/License";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import CatagoryQuestions from "./components/helpCenter/CatagoryQuestions";
import HelpQuestionDetails from "./components/helpCenter/QuestionDetails";
import AI from "./pages/AI";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomeTwo />} />

        <Route path="/top-creator" element={<TopSeller />} />
        <Route path="/top-buyer" element={<TopBuyer />} />

        <Route path="/explore" element={<ExploreTwo />} />
        <Route path="/featured-items" element={<FeaturedItems />} />
        <Route path="/collections" element={<Collections />} />

        <Route path="/ai" element={<AI />} />
        <Route path="/study-goal" element={<StudyGoal />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/help-center" element={<HelpCenter />} />

        <Route
          path="/featured-items/:FEATUREDID"
          element={<FeaturedNFTDetails />}
        />
        <Route
          path="/discover-items/:DISCOVERID"
          element={<DiscoverNFTDetails />}
        />
        <Route path="/author/:AUTHORUSERNAME" element={<Author />} />
        <Route path="/blog-details/:POSTID" element={<BlogDetails />} />
        <Route path="/help-center/:CATAGORY" element={<CatagoryQuestions />} />
        <Route
          path="/help-question-details/:CATAGORYID"
          element={<HelpQuestionDetails />}
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-collection" element={<DashboardCollection />} />
        <Route path="/my-wallet" element={<DashboardWallet />} />
        <Route path="/notifications" element={<DashboardNotification />} />
        <Route
          path="/notification-details/:NOTIFYID"
          element={<DashboardNotificationDetails />}
        />
        <Route path="/settings" element={<DashboardSettings />} />

        <Route path="/create-new" element={<CreateNew />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/license" element={<License />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Scroll To Top */}
      <ScrollToTop
        id="scrollTopButton"
        width="14"
        height="14"
        component={<i className="bi bi-arrow-up-short" />}
        color="white"
        smooth
        top={200}
      />
    </div>
  );
}

export default App;
