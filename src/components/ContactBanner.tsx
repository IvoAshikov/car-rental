import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ContactBannerStyles/contact-banner.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function ContactBanner() {
  return (
    <>
      <section className="contact-banner-section">
        <div className="image-overlay"></div>
        <div className="contact-banner-text">
          <p>Book a car by getting in touch with us</p>
          <span>
            <FontAwesomeIcon icon={faPhone} />
            (123)-456-789
          </span>
        </div>
      </section>
    </>
  );
}

export default ContactBanner;
