import "../styles/HeroStyles/hero.css";
function HeroSection() {
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
            <button className="hero-book">Book a Ride</button>
            <button className="hero-about">More About Us</button>
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
