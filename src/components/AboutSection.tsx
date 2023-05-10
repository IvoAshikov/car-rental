import { Link } from "react-router-dom";
import "../styles/AboutStyles/about.css";
import ContactBanner from "./ContactBanner";
import Footer from "./Footer";
import StepsSection from "./StepsSection";

function AboutSection() {
  return (
    <>
      <section className="about-section">
        <div className="about-background">
          <img src={require("../images/about-background.jpg")} className="about-image" />
          <div className="about-nav-text">
            <h1>About</h1>
            <Link to="/">
              <p className="back-home">Home</p>
            </Link>
            <span> / </span>
            <span>About</span>
          </div>
        </div>
        <div className="about-company">
          <div className="about-company-image-container">
            <img src={require("../images/car-deal.jpg")} className="car-deal-image" />
          </div>
          <div className="about-text-container">
            <h2>Experience Convenience and Comfort with Our Car Rental Company</h2>
            <p>
              Our car rental company is dedicated to providing a convenient and enjoyable travel experience for our customers. We offer a wide range of vehicles, including sedans, SUVs, and trucks, to
              meet all your transportation needs. Our fleet is well-maintained, regularly serviced, and thoroughly cleaned, ensuring that you can drive in comfort and safety.
            </p>
            <p>
              Whether you need a vehicle for business or pleasure, for a day or a week, our car rental company has got you covered. With multiple locations across the city, we make it easy to pick up
              and drop off your rental vehicle at your convenience. Trust us to help you get where you need to go, in style and comfort.
            </p>
          </div>
        </div>
        <StepsSection />
        <ContactBanner />
        <Footer />
      </section>
    </>
  );
}

export default AboutSection;
