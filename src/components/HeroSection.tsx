import "../styles/HeroStyles/hero.css";
import { Link, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

function HeroSection() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <section className="hero-section" id="hero">
        <img src={require("../images/hero-background.jpg")} className="background-image" />
        <div className="hero-text">
          <h1>
            Drive <span>your dreams</span> with us
          </h1>
          <p>
            Experience the ultimate driving thrill with our dream car rentals. Enjoy top-quality vehicles at affordable prices with unlimited mileage, flexible pick-up options, and exceptional
            customer service.
          </p>
          <div className="hero-button-container">
            <a href="#booking">
              <button className="hero-book">Book a Ride</button>
            </a>
            <Link to="/about">
              <button className="hero-about">More About Us</button>
            </Link>
          </div>
        </div>
        <div className="hero-pic-container">
          <img src={require("../images/hero-picture.png")} />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
