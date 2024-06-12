import "./NavHeader1.css";
import PropTypes from "prop-types";

const NavHeader1 = ({ className = "" }) => {
  return (
    <div className={`nav-header ${className}`}>
      <img
        className="horizontallogo-icon"
        loading="lazy"
        alt=""
        src="/horizontallogo@2x.png"
      />
      <div className="nav-menu">
        <div className="dropdown">
          <img className="globe-icon" alt="" src="/globe.svg" />
          <a className="label1">English</a>
          <img className="chevron-down-icon" alt="" src="/chevrondown.svg" />
        </div>
        <div className="nav-list-item">
          <img
            className="globe-icon"
            loading="lazy"
            alt=""
            src="/user-cicrle.svg"
          />
          <a className="login-sign">Login / Sign Up</a>
        </div>
        <div className="button-primary">
          <a className="label2">List Your Business</a>
        </div>
      </div>
    </div>
  );
};

NavHeader1.propTypes = {
  className: PropTypes.string,
};

export default NavHeader1;
