import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavHeader.css";

const NavHeader = ({ className = "" }) => {
  const navigate = useNavigate();

  const onUntitledDrawing12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={`nav-header1 ${className}`}>
      <img
        className="untitled-drawing-12"
        loading="lazy"
        alt=""
        src="/untitled-drawing-12@2x.png"
        onClick={onUntitledDrawing12Click}
      />
      <div className="search-bar1">
        <div className="input-field-with-label5">
          <div className="service">Service</div>
          <div className="field7">
            <input
              className="label10"
              placeholder="Search for services "
              type="text"
            />
          </div>
        </div>
        <div className="input-field-with-label6">
          <div className="location1">Location</div>
          <div className="field8">
            <div className="label11">San Luis Obispo, CA</div>
          </div>
        </div>
        <div className="date-filter">
          <div className="date1">Date</div>
          <div className="input-field-with-button1">
            <div className="field9">
              <input
                className="label12"
                placeholder="July 3, 2024"
                type="text"
              />
            </div>
            <div className="button-new">
              <img className="search-icon" alt="" src="/search.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="nav-menu1">
        <div className="dropdown2">
          <img className="globe-icon1" alt="" src="/globe.svg" />
          <a className="label13">English</a>
          <img className="chevron-down-icon2" alt="" src="/chevrondown.svg" />
        </div>
        <div className="nav-list-item1">
          <img className="globe-icon1" alt="" src="/user-cicrle.svg" />
          <a className="loginsign-up">Login/Sign Up</a>
        </div>
        <button className="button-primary1">
          <a className="label14">Call to Action</a>
        </button>
      </div>
    </header>
  );
};

NavHeader.propTypes = {
  className: PropTypes.string,
};

export default NavHeader;
