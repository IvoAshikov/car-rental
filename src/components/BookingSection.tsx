import "../styles/BookingStyles/booking.css";
import BookingForm from "./BookingForm";
function BookingSection() {
  return (
    <>
      <section className="booking-section">
        <div className="booking-container">
          <h2>Book a car</h2>
          <BookingForm />
        </div>
      </section>
    </>
  );
}

export default BookingSection;
