import { Link } from "react-router-dom";
import "../styles/MobileNav/mobile-nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MobileNav() {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
  return (
    <>
      <div className="mobile-nav-container">
        <Link to="/">
          <div className="logo-container">
            <img src={require("../images/logo.png")} />
          </div>
        </Link>
        <div
          className="nav-icon-container"
          onClick={() => {
            setIsSidebarActive(!isSidebarActive);
          }}
        >
          <FontAwesomeIcon icon={faBars} className="more-icon" />
        </div>
      </div>
      <div className={!isSidebarActive ? "sidebar closed" : "sidebar open"}>
        <div
          className="close-sidebar-container"
          onClick={() => {
            setIsSidebarActive(!isSidebarActive);
          }}
        >
          <FontAwesomeIcon icon={faXmark} className="x-icon" />
        </div>
        <ul>
          <Link
            to="/"
            onClick={() => {
              setIsSidebarActive(false);
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setIsSidebarActive(false);
            }}
          >
            <li>About</li>
          </Link>
          <Link
            to="/cars"
            onClick={() => {
              setIsSidebarActive(false);
            }}
          >
            <li>Available Cars</li>
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setIsSidebarActive(false);
            }}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
