import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export default function FuntoNavbar() {
  return (
    <div className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
      <NavDropdown className="ft-dd" title="Ranking" id="Home">
        <NavLink to="/ranking">Top Hits</NavLink>
        <NavLink to="/top-creator">Top Creator</NavLink>
        <NavLink to="/top-buyer">Top Buyer</NavLink>
      </NavDropdown>

      <NavDropdown className="ft-dd" title="Explore" id="Explore">
        <NavLink to="/explore">Explore Pass</NavLink>
        <NavLink to="/featured-items">Featured Pass</NavLink>
        <NavLink to="/collections">Courses Collections</NavLink>
      </NavDropdown>

      <NavDropdown className="ft-dd" title="Tools" id="Blog" drop="end">
        <NavLink to="/ai">AI Chatbot</NavLink>
        <NavLink to="/set-goal">Set Goal</NavLink>
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
