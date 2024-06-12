import "./Listings.css";
import PropTypes from "prop-types";

const Listings = ({ className = "" }) => {
  return (
    <section className={`listings ${className}`}>
      <header className="search-section">
        <div className="search-container">
          <div className="search-bar">
            <div className="service-input">
              <div className="servicelabel">Service</div>
              <div className="input-field-with-button">
                <div className="servicefield">
                  <input
                    className="serviceplaceholder"
                    placeholder="Search for services or vendors"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="location-date-input">
              <div className="servicelabel">Location</div>
              <div className="field1">
                <input
                  className="label3"
                  placeholder="San Luis Obispo, CA"
                  type="text"
                />
              </div>
            </div>
            <div className="location-date-input1">
              <div className="date">Date</div>
              <div className="field2">
                <div className="label4">July 3, 2024</div>
              </div>
            </div>
            <button className="seachbutton">
              <img className="searchicon" alt="" src="/searchicon.svg" />
              <div className="searchtext">Search</div>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

Listings.propTypes = {
  className: PropTypes.string,
};

export default Listings;
