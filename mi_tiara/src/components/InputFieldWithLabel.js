import { useMemo } from "react";
import "./InputFieldWithLabel.css";
import PropTypes from "prop-types";

const InputFieldWithLabel = ({
  className = "",
  eventStartTime,
  prop,
  label,
  propColor,
}) => {
  const spanStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={`input-field-with-label4 ${className}`}>
      <div className="event-start-time-container">
        <span>{eventStartTime}</span>
        <span className="span3" style={spanStyle}>
          {prop}
        </span>
      </div>
      <div className="field6">
        <div className="label8">{label}</div>
      </div>
    </div>
  );
};

InputFieldWithLabel.propTypes = {
  className: PropTypes.string,
  eventStartTime: PropTypes.string,
  prop: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
};

export default InputFieldWithLabel;
