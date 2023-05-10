import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer/footer.css";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-left">
          <div className="footer-logo-container">
            <img src={require("../images/logo.png")} />
          </div>
        </div>
        <div className="footer-center">
          <h2>Get In Contact With Us</h2>
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} className="footer-icon" />
            (123)-456-789
          </div>
          <div className="email">
            <FontAwesomeIcon icon={faAt} className="footer-icon" />
            dummyemail@gmail.com
          </div>
        </div>
        <div className="footer-right">
          <h2>WORKING HOURS</h2>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          Sun: Closed
        </div>
      </footer>
    </>
  );
}

export default Footer;
