import "../styles/NavbarStyles/navbar.css";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

function Navbar() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {width <= 768 && <MobileNav />}
      {width > 768 && (
        <div className="nav-container" id="nav">
          <nav>
            <Link to="/">
              <div className="logo-container">
                <img src={require("../images/logo.png")} />
              </div>
            </Link>
            <div className="pages-container">
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About Us</li>
                </Link>
                <Link to="/cars">
                  <li>Available Cars</li>
                </Link>
                <Link to="/contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
            <div className="account-container">
              <button className="sign-in">Sign In</button>
              <button className="register">Register</button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
