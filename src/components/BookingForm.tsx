import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/BookingFormStyles/booking-form.css";
import { faCar, faLocationDot, faCalendarDays, faAt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function BookingForm() {
  const [areEmpty, setAreEmpty] = useState<string>("");
  const [formState, setFormState] = useState<any>({
    car: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
    email: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (formState.car === "" || formState.pickupLocation === "" || formState.dropoffLocation === "" || formState.pickupDate === "" || formState.dropoffDate === "" || formState.email === "") {
      setAreEmpty("Fields Are Empty");
    } else {
      setAreEmpty("Booking Complete");
    }
  };

  return (
    <>
      {areEmpty === "Fields Are Empty" && (
        <div className="empty">
          <p>All fields are required!</p>
        </div>
      )}
      {areEmpty === "Booking Complete" && (
        <div className="ready">
          <p>Please check your email to confirm your booking!</p>
        </div>
      )}
      <form className="booking-form">
        <div className="one-part-container">
          <label>
            <FontAwesomeIcon icon={faCar} className="icon" />
            Select your dream car<span>*</span>
          </label>
          <select required onChange={(e) => setFormState({ ...formState, car: e.target.value })}>
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
          <select required onChange={(e) => setFormState({ ...formState, pickupLocation: e.target.value })}>
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
          <select required onChange={(e) => setFormState({ ...formState, dropoffLocation: e.target.value })}>
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
          <input type="date" required onChange={(e) => setFormState({ ...formState, pickupDate: e.target.value })} />
        </div>
        <div className="one-part-container">
          <label>
            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
            Drop-off Date
            <span>*</span>
          </label>
          <input type="date" required onChange={(e) => setFormState({ ...formState, dropoffDate: e.target.value })} />
        </div>
        <div className="one-part-container">
          <label>
            <FontAwesomeIcon icon={faAt} className="icon" />
            Email
            <span>*</span>
          </label>
          <input type="text" placeholder="johndoe@yourmail.com" required onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
        </div>
        <div className="booking-button-container">
          <button onClick={handleSubmit}>Rent The Car</button>
        </div>
      </form>
    </>
  );
}

export default BookingForm;
