import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery-nice-select/css/nice-select.css";
import "tiny-slider/dist/tiny-slider.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-icons.css";
import "./assets/scss/style.scss";

import DiscoverNFTDetails from "./components/DiscoverNFTDetails";
import Dashboard from "./dashboard/Dashboard";
import DashboardCollection from "./dashboard/MyCollection";
import DashboardNotification from "./dashboard/Notifications";
import Collections from "./pages/Collections";
import ExploreTwo from "./pages/ExploreTwo";
import HomeTwo from "./pages/HomeTwo";
import StudyGoal from "./pages/StudyGoal";
import TopSeller from "./pages/TopSeller";

import Author from "./pages/Author";
import CreateNew from "./pages/CreateNew";

import Blog from "./pages/Blog";

import Contact from "./pages/Contact";
import License from "./pages/License";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import CatagoryQuestions from "./components/helpCenter/CatagoryQuestions";
import AI from "./pages/AI";
import HelpCenter from "./pages/HelpCenter";
import Material from "./pages/Material";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomeTwo />} />
        <Route path="/top-creator" element={<TopSeller />} />
        <Route path="/explore" element={<ExploreTwo />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/study-goal" element={<StudyGoal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route
          path="/discover-items/:DISCOVERID"
          element={<DiscoverNFTDetails />}
        />
        <Route path="/material/:ITEMID" element={<Material />} />
        <Route path="/author/:AUTHORUSERNAME" element={<Author />} />
        <Route path="/help-center/:CATAGORY" element={<CatagoryQuestions />} />
        <Route path="/activity" element={<Dashboard />} />
        <Route path="/my-collection" element={<DashboardCollection />} />
        <Route path="/notifications" element={<DashboardNotification />} />
        <Route path="/create-new" element={<CreateNew />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/license" element={<License />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/test" element={<Test />} />
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
