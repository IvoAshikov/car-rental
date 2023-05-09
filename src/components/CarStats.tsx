import "../styles/CarStats/carstats.css";

function CarStats() {
  return (
    <>
      <div className="car-description-container">
        <div className="rent-price">
          <p>45$ per day</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Make</td>
              <td>Mercedes</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>E200</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>Doors</td>
              <td>4/5</td>
            </tr>
            <tr>
              <td>Coupe</td>
              <td>Sedan</td>
            </tr>
            <tr>
              <td>Engine</td>
              <td>Gasoline</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>Automatic</td>
            </tr>
            <tr>
              <td>Horsepower</td>
              <td>197</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td>6.9l/100km</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CarStats;
