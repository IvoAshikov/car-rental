import "../styles/VehiclesStyles/vehicles.css";
import CarStats from "./CarStats";
import { CAR_DATA } from "./CarData";

function Vehicles() {
  return (
    <>
      <section className="vehicles-section">
        <div className="vehicles-text">
          <h1>Browse through our available vehicles</h1>
          <p>Explore our selection of exceptional rental vehicles and choose the perfect one for your next business trip or adventure.</p>
        </div>
        <div className="available-vehicles-container">
          <div className="vehicle-pick-container">
            <div className="mouse-scroll">
              <div className="mouse-round">
                <div className="mouse-wheel"></div>
              </div>
            </div>
            <button className="active-pick-button">{CAR_DATA[0].name}</button>
            <button className="pick-button">{CAR_DATA[1].name}</button>
            <button className="pick-button">{CAR_DATA[2].name}</button>
            <button className="pick-button">{CAR_DATA[3].name}</button>
            <button className="pick-button">{CAR_DATA[4].name}</button>
            <button className="pick-button">{CAR_DATA[5].name}</button>
            <button className="pick-button">{CAR_DATA[6].name}</button>
            <button className="pick-button">{CAR_DATA[7].name}</button>
            <button className="pick-button">{CAR_DATA[8].name}</button>
            <button className="pick-button">{CAR_DATA[9].name}</button>
          </div>
          <div className="car-picture-container">
            <img src={require("../images/hero-picture.png")} />
          </div>
          <CarStats />
        </div>
      </section>
    </>
  );
}

export default Vehicles;
