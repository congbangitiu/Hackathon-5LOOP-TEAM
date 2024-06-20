import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export default function FuntoNavbar() {
  return (
    <div className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
      <NavDropdown className="ft-dd" title="Ranking" id="Home">
        <NavLink to="/home1">Trending Courses</NavLink>
        <NavLink to="/home2">Top Hits</NavLink>
      </NavDropdown>

      <NavDropdown className="ft-dd" title="Explore" id="Explore">
        <NavLink to="/explore1">By University</NavLink>
        <NavLink to="/explore2">By Creator</NavLink>
        <NavLink to="/featured-items">Featured Pass</NavLink>
        <NavLink to="/collections">Courses Collections</NavLink>
        <NavLink to="/top-seller">Top Creator</NavLink>
        <NavLink to="/top-buyer">Top Buyer</NavLink>
      </NavDropdown>

      <NavDropdown className="ft-dd" title="Profile" id="Profile">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/activity">Trade History</NavLink>
        <NavLink to="/my-collection">My Collection</NavLink>
        <NavLink to="/my-wallet">My Wallet</NavLink>
        <NavLink to="/notifications">Study Notifications</NavLink>
        <NavLink to="/settings">Settings</NavLink>

        <NavDropdown className="ft-dd" title="Others" id="Others" drop="end">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/newsletter">Newsletter</NavLink>
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/404">404</NavLink>
        </NavDropdown>
      </NavDropdown>

      <NavDropdown className="ft-dd" title="Blog" id="Blog" drop="end">
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/blog-details/1">Blog Details</NavLink>
      </NavDropdown>

      <NavDropdown
        className="ft-dd"
        title="Help Center"
        id="HelpCenter"
        drop="end"
      >
        <NavLink to="/help-center">Help Home</NavLink>
        <NavLink to="/help-center/licenses">All Questions</NavLink>
        <NavLink to="/help-question-details/1">Question Details</NavLink>
      </NavDropdown>
    </div>
  );
}
