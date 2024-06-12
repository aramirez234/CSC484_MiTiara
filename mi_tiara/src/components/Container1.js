import ListingInfoContainer from "./ListingInfoContainer";
import PropTypes from "prop-types";
import "./Container1.css";

const Container1 = ({ className = "" }) => {
  return (
    <div className={`container4 ${className}`}>
      <img
        className="container-icon"
        loading="lazy"
        alt=""
        src="/container@2x.png"
      />
      <ListingInfoContainer />
      <div className="top-divider">
        <div className="horizontal-divider" />
      </div>
      <div className="listing-bottom">
        <div className="price-heading-container-parent">
          <div className="price-heading-container">
            <div className="section-heading1">Price details</div>
          </div>
          <div className="price-breakdown">
            <div className="breakdown-list">
              <div className="fees">
                <div className="fee-items">
                  <u className="vendor-fee">Vendor Fee</u>
                  <div className="button2">
                    <u className="setup-fee">Setup Fee</u>
                  </div>
                  <div className="button2">
                    <u className="setup-fee">Kitchen Fee</u>
                  </div>
                  <div className="button4">
                    <u className="setup-fee2">Security Fee</u>
                  </div>
                  <div className="button5">
                    <u className="site-service-fee">Site service fee</u>
                  </div>
                </div>
                <div className="fee-items1">
                  <div className="div20">$4000</div>
                  <div className="wrapper2">
                    <div className="div21">$180</div>
                  </div>
                  <div className="wrapper2">
                    <div className="div21">$90</div>
                  </div>
                  <div className="wrapper2">
                    <div className="div21">$110</div>
                  </div>
                  <div className="wrapper5">
                    <div className="div24">$1.94</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="horizontal-divider1" />
          </div>
        </div>
        <div className="total-container-wrapper">
          <div className="fees">
            <div className="total-paid-usd-container">
              {`Total Paid `}
              <span className="usd">(USD)</span>
            </div>
            <b className="total-label">$4381.94</b>
          </div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
