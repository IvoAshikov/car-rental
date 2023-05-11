import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/CarCardStyles/car-card.css";
import { faCar, faDoorOpen, faGasPump, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CarData } from "./CarData";

interface CarStats {
  carData: CarData;
}

function CarCard({ carData }: CarStats) {
  return (
    <>
      <div className="car-info-container">
        <div className="car-image-container">
          <img src={carData.imageNEW} />
        </div>
        <div className="car-specs-container">
          <div className="car-name-container">
            <h2>{carData.model}</h2>
            <p>
              <span>{carData.price}$</span>per day
            </p>
          </div>
          <div className="car-info-one">
            <p>
              <FontAwesomeIcon icon={faCar} className="car-icon-one" />
              {carData.make}
            </p>
            <p>
              {carData.doors} <FontAwesomeIcon icon={faDoorOpen} className="car-icon-two" />
            </p>
          </div>
          <div className="car-info-two">
            <p>
              <FontAwesomeIcon icon={faMapPin} className="car-icon-one" />
              {carData.transmission}
            </p>
            <p>
              {carData.engine}
              <FontAwesomeIcon icon={faGasPump} className="car-icon-two" />
            </p>
          </div>
          <Link to="/" className="link">
            <button>Book A Ride</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CarCard;
