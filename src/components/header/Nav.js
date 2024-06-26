import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export default function FuntoNavbar() {
  return (
    <div className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
      <NavLink to="/top-creator">Top Creator</NavLink>

      <NavDropdown className="ft-dd" title="Explore" id="Explore">
        <NavLink to="/explore">All NFT Pass</NavLink>
        <NavLink to="/collections">Course Collections</NavLink>
      </NavDropdown>

      <NavDropdown className="ft-dd" title="Study Tools" id="Tools">
        <NavLink to="/ai">AI Chatbot</NavLink>
        <NavLink to="/study-goal">Study Goal</NavLink>
      </NavDropdown>

      <NavLink to="/blog">Blog</NavLink>

      <NavLink to="/help-center">FAQ</NavLink>
    </div>
  );
}
