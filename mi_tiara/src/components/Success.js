import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Success.css";

const Success = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContinueContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`success ${className}`}>
      <h1 className="all-done-go">All done, go explore more!</h1>
      <div className="checkmark-container">
        <img
          className="check-mark-icon"
          loading="lazy"
          alt=""
          src="/check-mark@2x.png"
        />
      </div>
      <div className="continue-button-container">
        <div
          className="buttoncontinue"
          onClick={onButtonContinueContainerClick}
        >
          <div className="button-background" />
          <div className="continue1">Confirm and Continue</div>
        </div>
      </div>
    </div>
  );
};

Success.propTypes = {
  className: PropTypes.string,
};

export default Success;
