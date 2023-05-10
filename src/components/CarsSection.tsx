import "../styles/CarsStyles/cars.css";
import CarCard from "./CarCard";
import { CAR_DATA } from "./CarData";
import ContactBanner from "./ContactBanner";
import Footer from "./Footer";

function CarsSection() {
  return (
    <>
      <section className="cars-section">
        <div className="about-background">
          <img src={require("../images/about-background.jpg")} className="about-image" />
          <div className="about-nav-text">
            <h1>Available Cars</h1>
            <p className="back-home">Home</p>
            <span> / </span>
            <span>Available Cars</span>
          </div>
        </div>
        <div className="cars-container">
          <CarCard carData={CAR_DATA[0]} />
          <CarCard carData={CAR_DATA[1]} />
          <CarCard carData={CAR_DATA[2]} />
          <CarCard carData={CAR_DATA[3]} />
          <CarCard carData={CAR_DATA[4]} />
          <CarCard carData={CAR_DATA[5]} />
          <CarCard carData={CAR_DATA[6]} />
          <CarCard carData={CAR_DATA[7]} />
          <CarCard carData={CAR_DATA[8]} />
          <CarCard carData={CAR_DATA[9]} />
        </div>
        <ContactBanner />
        <Footer />
      </section>
    </>
  );
}

export default CarsSection;
