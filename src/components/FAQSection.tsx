import { useState } from "react";
import "../styles/FAQStyles/faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function FAQSection() {
  const [faqActive, setFaqActive] = useState<string>("QNum1");
  return (
    <>
      <section className="faq-section" id="faq">
        <div className="faq-text-container">
          <h1>Frequently Asked Quesitons</h1>
          <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>
        <div className="faq-container">
          <div className="one-question-container">
            <div
              className={faqActive === "QNum1" ? "q q-active" : "q"}
              onClick={() => {
                setFaqActive("QNum1");
              }}
            >
              <p>1. Who is responsible for paying for damages in a car crash while renting a car?</p>
              <FontAwesomeIcon icon={faqActive === "QNum1" ? faCaretUp : faCaretDown} />
            </div>

            <div className={faqActive === "QNum1" ? "a-active" : "a"}>
              Depends on the circumstances of the incident. If the crash was caused by you, you may be held liable for the damages. However, if the crash was caused by another driver, he will be
              paying for the damages.
            </div>
          </div>
          <div className="one-question-container">
            <div
              className={faqActive === "QNum2" ? "q q-active" : "q"}
              onClick={() => {
                setFaqActive("QNum2");
              }}
            >
              <p>2. What is your fuel policy?</p>
              <FontAwesomeIcon icon={faqActive === "QNum2" ? faCaretUp : faCaretDown} />
            </div>

            <div className={faqActive === "QNum2" ? "a-active" : "a"}>
              We offer a full-to-full fuel policy, which means you'll receive the car with a full tank of gas and you'll need to return it with a full tank. If you return the car with less fuel,
              you'll be charged for the missing fuel.
            </div>
          </div>
          <div className="one-question-container">
            <div
              className={faqActive === "QNum3" ? "q q-active" : "q"}
              onClick={() => {
                setFaqActive("QNum3");
              }}
            >
              <p>3. What happens if I return the car late?</p>
              <FontAwesomeIcon icon={faqActive === "QNum3" ? faCaretUp : faCaretDown} />
            </div>

            <div className={faqActive === "QNum3" ? "a-active" : "a"}>
              If you return the car after the agreed-upon rental period, you may be charged a late return fee. It's important to contact us as soon as possible if you know you'll be returning the car
              late.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;
