import "../styles/NavbarStyles/navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="logo-container">
            <img src={require("../images/logo.png")} />
          </div>
          <div className="pages-container">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Available Cars</li>
              <li>Contact</li>
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
