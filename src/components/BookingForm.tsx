import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/BookingFormStyles/booking-form.css";
import { faCar, faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function BookingForm() {
  return (
    <>
      <form className="booking-form">
        <div className="one-part-container">
          <label>
            <FontAwesomeIcon icon={faCar} className="icon" />
            Select your dream car<span>*</span>
          </label>
          <select required>
            <option selected disabled hidden>
              Select your dream car
            </option>
            <option>Mercedes Benz E-Class</option>
            <option>BMW 525</option>
            <option>Volkswagen Golf 7</option>
            <option>Opel Astra</option>
            <option>Audi A3</option>
            <option>Kia Ceed</option>
            <option>Citroen C3</option>
            <option>Volkswagen T-Roc</option>
            <option>Volkswagen Touareg</option>
            <option>Hyundai Tucson</option>
          </select>
        </div>
        <div className="one-part-container">
          <label>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Pick-up Location<span>*</span>
          </label>
          <select required>
            <option selected disabled hidden>
              Select your pick-up location
            </option>
            <option>Sofia Airport Terminal 1</option>
            <option>Sofia Airport Terminal 2</option>
            <option>Paradise Center</option>
            <option>Business Park Sofia</option>
            <option>Plovdiv Airport</option>
            <option>Varna Airport</option>
          </select>
        </div>
        <div className="one-part-container">
          <label>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Drop-off Location<span>*</span>
          </label>
          <select required>
            <option selected disabled hidden>
              Select your drop-off location
            </option>
            <option>Same As Pick-up</option>
            <option>Sofia Airport Terminal 1</option>
            <option>Sofia Airport Terminal 2</option>
            <option>Paradise Center</option>
            <option>Business Park Sofia</option>
            <option>Plovdiv Airport</option>
            <option>Varna Airport</option>
          </select>
        </div>
        <div className="one-part-container">
          <label>
            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
            Pick-up Date
            <span>*</span>
          </label>
          <input type="date" />
        </div>
        <div className="one-part-container">
          <label>
            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
            Drop-off Date
            <span>*</span>
          </label>
          <input type="date" />
        </div>
        <div className="booking-button-container">
          <button>Rent The Car</button>
        </div>
      </form>
    </>
  );
}

export default BookingForm;
