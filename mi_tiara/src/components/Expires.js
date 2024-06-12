import "./Expires.css";
import PropTypes from "prop-types";

const Expires = ({
  className = "",
  expires,
  icon,
  datePlaceholderPlaceholde,
}) => {
  return (
    <div className={`expires ${className}`}>
      <div className="expires1">{expires}</div>
      <div className="text-field">
        <img className="icon2" alt="" src={icon} />
        <input
          className="date-placeholder"
          placeholder={datePlaceholderPlaceholde}
          type="text"
        />
      </div>
    </div>
  );
};

Expires.propTypes = {
  className: PropTypes.string,
  expires: PropTypes.string,
  icon: PropTypes.string,
  datePlaceholderPlaceholde: PropTypes.string,
};

export default Expires;
