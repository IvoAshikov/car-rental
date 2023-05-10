import "../styles/StepsStyles/steps.css";

function StepsSection() {
  return (
    <>
      <section className="steps-section" id="steps">
        <div className="text-container">
          <h3>
            Our <span>3-step</span> process
          </h3>
          <h1>
            <span>Quick</span> and <span>easy</span> car rental
          </h1>
        </div>
        <div className="steps-container">
          <div className="one-step-container">
            <img src={require("../images/blob1.png")} className="one-step-image" />
            <div className="one-step-text-container">
              <h1>Choose your car</h1>
              <p>Choose the perfect car from our selection of options, including compact cars and spacious SUVs. Find the vehicle that fits your needs, then move on to booking your rental.</p>
            </div>
          </div>

          <div className="one-step-container">
            <img src={require("../images/blob2.png")} className="one-step-image" />
            <div className="one-step-text-container">
              <h1>Book your rental</h1>
              <p>Select your desired pick-up and drop-off dates, locations, and review your booking details. Once you're satisfied, complete your reservation and receive your confirmation email.</p>
            </div>
          </div>

          <div className="one-step-container">
            <img src={require("../images/blob3.png")} className="one-step-image" />
            <div className="one-step-text-container">
              <h1>Pick up and enjoy your ride</h1>
              <p>On the day of your rental, head to our location to pick up your car. Enjoy your ride with peace of mind knowing that we've got you covered with 24/7 customer support.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StepsSection;
