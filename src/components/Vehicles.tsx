import "../styles/VehiclesStyles/vehicles.css";
import CarStats from "./CarStats";
import { CAR_DATA } from "./CarData";
import { useState } from "react";

function Vehicles() {
  const [isActive, setIsActive] = useState<string>("CarNum1");

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
            <button
              className={isActive === "CarNum1" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum1");
              }}
            >
              {CAR_DATA[0].name}
            </button>
            <button
              className={isActive === "CarNum2" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum2");
              }}
            >
              {CAR_DATA[1].name}
            </button>
            <button
              className={isActive === "CarNum3" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum3");
              }}
            >
              {CAR_DATA[2].name}
            </button>
            <button
              className={isActive === "CarNum4" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum4");
              }}
            >
              {CAR_DATA[3].name}
            </button>
            <button
              className={isActive === "CarNum5" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum5");
              }}
            >
              {CAR_DATA[4].name}
            </button>
            <button
              className={isActive === "CarNum6" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum6");
              }}
            >
              {CAR_DATA[5].name}
            </button>
            <button
              className={isActive === "CarNum7" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum7");
              }}
            >
              {CAR_DATA[6].name}
            </button>
            <button
              className={isActive === "CarNum8" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum8");
              }}
            >
              {CAR_DATA[7].name}
            </button>
            <button
              className={isActive === "CarNum9" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum9");
              }}
            >
              {CAR_DATA[8].name}
            </button>
            <button
              className={isActive === "CarNum10" ? "active-pick-button" : "pick-button"}
              onClick={() => {
                setIsActive("CarNum10");
              }}
            >
              {CAR_DATA[9].name}
            </button>
          </div>

          {isActive === "CarNum1" && <CarStats carData={CAR_DATA[0]} />}
          {isActive === "CarNum2" && <CarStats carData={CAR_DATA[1]} />}
          {isActive === "CarNum3" && <CarStats carData={CAR_DATA[2]} />}
          {isActive === "CarNum4" && <CarStats carData={CAR_DATA[3]} />}
          {isActive === "CarNum5" && <CarStats carData={CAR_DATA[4]} />}
          {isActive === "CarNum6" && <CarStats carData={CAR_DATA[5]} />}
          {isActive === "CarNum7" && <CarStats carData={CAR_DATA[6]} />}
          {isActive === "CarNum8" && <CarStats carData={CAR_DATA[7]} />}
          {isActive === "CarNum9" && <CarStats carData={CAR_DATA[8]} />}
          {isActive === "CarNum10" && <CarStats carData={CAR_DATA[9]} />}
        </div>
      </section>
    </>
  );
}

export default Vehicles;
