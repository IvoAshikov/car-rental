import "../styles/ChooseUsStyles/choose.css";

import CarBuilding from "../images/car-building.png";
import AllInclusive from "../images/all-inclusive.png";
import NoHiddenFees from "../images/no-hidden-fees.png";

function ChooseUsSection() {
  return (
    <>
      <section className="choose-section" id="choose-us">
        <div className="choose-img-container">
          <img src={require("../images/three-cars.png")} />
        </div>
        <div className="choose-container">
          <div className="choose-text">
            <h3>Why Choose Us</h3>
            <h1>Best valued deals you will ever find</h1>
            <p>
              Expect a hassle-free and enjoyable experience. We offer a wide variety of top-quality rental vehicles that are regularly maintained and kept in pristine condition. We're committed to
              providing excellent customer service and support, which is why our team is available 24/7 to answer your questions and provide roadside assistance if needed.
            </p>
            <button>Find Details</button>
          </div>
          <div className="pros-container">
            <div className="choose-part-container">
              <div className="round-background">
                <img src={CarBuilding} className="choose-icon" />
              </div>
              <div className="choose-text-container">
                <h2>Cross Country Drive</h2>
                <p>Experience the thrill of a cross-country drive with our comfortable and reliable rental vehicles.</p>
              </div>
            </div>
            <div className="choose-part-container">
              <div className="round-background">
                <img src={AllInclusive} className="choose-icon" />
              </div>
              <div className="choose-text-container">
                <h2>All Inclusive Pricing</h2>
                <p>Streamline your rental experience with our transparent, all-in-one pricing policy.</p>
              </div>
            </div>
            <div className="choose-part-container">
              <div className="round-background">
                <img src={NoHiddenFees} className="choose-icon" />
              </div>
              <div className="choose-text-container">
                <h2>No Hidden Charges</h2>
                <p>Our pricing is transparent and honest, giving you peace of mind with our no hidden charges policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUsSection;
