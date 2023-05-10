import { Link } from "react-router-dom";
import "../styles/CarsStyles/cars.css";
import CarCard from "./CarCard";
import { CAR_DATA } from "./CarData";
import ContactBanner from "./ContactBanner";
import Footer from "./Footer";

function CarsSection() {
  return (
    <>
      <section className="cars-section">
        <div className="cars-background">
          <img src={require("../images/about-background.jpg")} className="cars-image" />
          <div className="cars-nav-text">
            <h1>Available Cars</h1>
            <Link to="/">
              <p className="back-home">Home</p>
            </Link>
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
