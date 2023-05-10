import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ToTop/totop.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ToTop() {
  return (
    <>
      <div className="totop-container">
        <a href="#nav">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </>
  );
}

export default ToTop;
