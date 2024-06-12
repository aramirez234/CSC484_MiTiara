import ListingInfoContainer from "./ListingInfoContainer";
import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <div className={`container5 ${className}`}>
      <img
        className="container-icon1"
        loading="lazy"
        alt=""
        src="/container1@2x.png"
      />
      <ListingInfoContainer />
      <div className="horizontal-divider-wrapper">
        <div className="horizontal-divider2" />
      </div>
      <div className="frame-group">
        <div className="price-details-heading-parent">
          <div className="price-details-heading">
            <b className="section-heading3">Price details</b>
          </div>
          <div className="price-breakdown1">
            <div className="fees1">
              <div className="fee-buttons">
                <div className="fee-button-names">
                  <u className="vendor-fee1">Vendor Fee</u>
                  <div className="button8">
                    <u className="setup-fee3">Setup Fee</u>
                  </div>
                  <div className="button8">
                    <u className="setup-fee3">Kitchen Fee</u>
                  </div>
                  <div className="button10">
                    <u className="setup-fee5">Security Fee</u>
                  </div>
                  <div className="button11">
                    <u className="site-service-fee1">Site service fee</u>
                  </div>
                </div>
                <div className="fee-button-names1">
                  <div className="div25">$4000</div>
                  <div className="wrapper6">
                    <div className="div26">$180</div>
                  </div>
                  <div className="wrapper6">
                    <div className="div26">$90</div>
                  </div>
                  <div className="wrapper6">
                    <div className="div26">$110</div>
                  </div>
                  <div className="wrapper9">
                    <div className="div29">$1.94</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="horizontal-divider3" />
          </div>
        </div>
        <div className="total-wrapper">
          <div className="fee-buttons">
            <b className="total-usd">
              {`Total `}
              <span className="usd1">(USD)</span>
            </b>
            <b className="b11">$4381.94</b>
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
