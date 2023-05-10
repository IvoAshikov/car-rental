import "../styles/CarStats/carstats.css";

interface CarData {
  name: string;
  make: string;
  model: string;
  year: string;
  doors: string;
  coupe: string;
  engine: string;
  transmission: string;
  horsepower: string;
  consumption: string;
  price: string;
  image: any;
}

interface CarStats {
  carData: CarData;
}

function CarStats({ carData }: CarStats) {
  return (
    <>
      <div className="car-picture-container">
        <img src={carData.image} />
      </div>
      <div className="car-description-container">
        <div className="rent-price">
          <p>{carData.price}$ per day</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Make</td>
              <td>{carData.make}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{carData.model}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{carData.year}</td>
            </tr>
            <tr>
              <td>Doors</td>
              <td>{carData.doors}</td>
            </tr>
            <tr>
              <td>Coupe</td>
              <td>{carData.coupe}</td>
            </tr>
            <tr>
              <td>Engine</td>
              <td>{carData.engine}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>{carData.transmission}</td>
            </tr>
            <tr>
              <td>Horsepower</td>
              <td>{carData.horsepower}</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td>{carData.consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CarStats;
