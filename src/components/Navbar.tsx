import "../styles/NavbarStyles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-container" id="nav">
        <nav>
          <div className="logo-container">
            <img src={require("../images/logo.png")} />
          </div>
          <div className="pages-container">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/cars">
                <li>Available Cars</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="account-container">
            <button className="sign-in">Sign In</button>
            <button className="register">Register</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
