import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ContactStyles/contact.css";
import { faAt, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <>
      <section className="contact-section">
        <div className="contact-background">
          <img src={require("../images/about-background.jpg")} className="contact-image" />
          <div className="contact-nav-text">
            <h1>Contact Us</h1>
            <Link to="/home">
              <p className="back-home">Home</p>
            </Link>
            <span> / </span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-text">
            <div className="helper-container">
              <h1>Need additional information?</h1>
              <p>
                We are always happy to hear from our customers! If you have any questions, comments, or feedback about our car rental services, please feel free to contact us via phone, email, or in
                person at any of our convenient locations. Our friendly and knowledgeable staff will be happy to assist you and help make your rental experience a success.
              </p>
              <div className="contact-options">
                <span>
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  (123)-456-789
                </span>
                <span>
                  <FontAwesomeIcon icon={faAt} className="contact-icon" />
                  dummyemail@gmail.com
                </span>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                  Sofia, Bulgaria
                </span>
              </div>
            </div>
          </div>
          <div className="contact-inputs">
            <div className="helper-container">
              <form>
                <label>
                  Full Name <span>*</span>
                </label>
                <input type="text" placeholder="John Doe" />
                <label>
                  Email <span>*</span>
                </label>
                <input type="email" placeholder="johndoe@yourmail.com" />
                <label>
                  Tell Us About It <span>*</span>
                </label>
                <textarea placeholder="Write here..."></textarea>
              </form>
              <button>
                <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
                Shoot Us A Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
