import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import CreateNewButton from "./CreateNewButton";
import NavDropDown from "./DropDown";
import FuntoNavbar from "./Nav";
import SearchForm from "./SearchForm";
import useStickyHeader from "./StickyHeader";

export default function Header() {
  const brandLogo = "img/core-img/logo.png";
  const darkLogo = "img/core-img/logo-white.png";

  let [check] = useState(true);
  const sticky = useStickyHeader(10);
  const stickyClass = `${sticky && check ? "sticky-on" : ""}`;

  return (
    <header className={`header-area ${stickyClass}`}>
      <Navbar expand="lg">
        <Container>
          {/* Navbar Brand */}
          <Link className="navbar-brand" to="/">
            <img
              className="light-logo"
              src={`${process.env.PUBLIC_URL}/${brandLogo}`}
              alt="Light"
            />
            <img
              className="dark-logo"
              src={`${process.env.PUBLIC_URL}/${darkLogo}`}
              alt="Dark"
            />
          </Link>

          {/* Navbar Toggler */}
          <Navbar.Toggle className="navbar-toggler" aria-controls="funtoNav" />

          {/* Navbar */}
          <Navbar.Collapse id="funtoNav">
            {/* Navbar List */}
            <FuntoNavbar />

            {/* Header Meta */}
            <div className="header-meta d-flex align-items-center ms-lg-auto">
              {/* Search Form */}
              <SearchForm />

              {/* User Dropdown */}
              <NavDropDown
                dropdownID="dropdownMenuButton1"
                toggleIcon="bi-three-dots"
                dropdownList={[
                  {
                    text: "Dashboard",
                    url: "/dashboard",
                    icon: "bi-speedometer2",
                  },
                  {
                    text: "Collections",
                    url: "/my-collection",
                    icon: "bi-collection",
                  },
                  {
                    text: "Notifications",
                    url: "/notifications",
                    icon: "bi-bell",
                  },
                ]}
              />

              {/* Create New Button */}
              <CreateNewButton
                buttonColor="btn-primary"
                buttonURL="/activity"
                buttonText="Visit Dashboard"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
