import "./ListingInfoContainer.css";
import PropTypes from "prop-types";

const ListingInfoContainer = ({ className = "" }) => {
  return (
    <div className={`listing-info-container ${className}`}>
      <div className="listing-intro">
        <h2 className="flying-caballos-ranch">Flying Caballos Ranch</h2>
        <div className="intro-stats">
          <b className="offered-by-rodriguez-container">
            <span className="offered-by-rodriguez-container1">
              <span>Offered by</span>
              <span className="rodriguez-vineyard1"> Rodriguez Vineyard</span>
            </span>
          </b>
          <div className="rating6">
            <img
              className="star-fill-icon4"
              loading="lazy"
              alt=""
              src="/star-fill1.svg"
            />
            <b className="label9">4.9</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ListingInfoContainer.propTypes = {
  className: PropTypes.string,
};

export default ListingInfoContainer;
