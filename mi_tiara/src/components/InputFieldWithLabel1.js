import { useMemo } from "react";
import "./InputFieldWithLabel1.css";
import PropTypes from "prop-types";

const InputFieldWithLabel1 = ({
  className = "",
  typeOfEvent,
  label,
  propWidth,
  propAlignSelf,
  propWidth1,
}) => {
  const inputFieldWithLabelStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const dropdownStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  return (
    <div
      className={`input-field-with-label1 ${className}`}
      style={inputFieldWithLabelStyle}
    >
      <h3 className="type-of-event-container">
        <span>{typeOfEvent}</span>
        <span className="span">*</span>
      </h3>
      <div className="dropdown1" style={dropdownStyle}>
        <b className="label5">{label}</b>
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
    </div>
  );
};

InputFieldWithLabel1.propTypes = {
  className: PropTypes.string,
  typeOfEvent: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default InputFieldWithLabel1;
