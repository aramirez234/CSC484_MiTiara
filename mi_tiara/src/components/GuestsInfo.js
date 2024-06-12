import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Expires from "./Expires";
import PropTypes from "prop-types";
import "./GuestsInfo.css";

const GuestsInfo = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/booking-details-page");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPrimaryButtonContainerClick = useCallback(() => {
    navigate("/review-confirm-screen");
  }, [navigate]);

  return (
    <div className={`guests-info ${className}`}>
      <div className="paragraph">
        <div className="heading-33">{`Date & Times:`}</div>
        <div className="august-12-2024">
          August 12, 2024 @ 2:00 pm - 11:00 pm (PST)
        </div>
      </div>
      <div className="dates-people-wedding">
        <div className="dates-wedding-tables">
          <div className="heading-34">No. of Guests:</div>
          <div className="people">150 people</div>
        </div>
        <div className="dates-wedding-tables">
          <b className="heading-34">Event Type</b>
          <div className="people">Wedding</div>
        </div>
        <div className="dates-wedding-tables">
          <div className="heading-34">No. of Tables:</div>
          <div className="people">17 tables</div>
        </div>
        <div className="dates-wedding-tables">
          <div className="heading-37">Kitchen Access:</div>
          <div className="people">Yes</div>
        </div>
        <div className="dates-wedding-tables">
          <b className="heading-37">Alcohol Served:</b>
          <div className="people">Yes</div>
        </div>
        <div className="heading-3-guests-parent">
          <b className="heading-39">Vendor Notes:</b>
          <p className="we-will-be">
            We will be bringing some decorations that we want to hang around the
            venue
          </p>
        </div>
        <div className="booking-buttons">
          <div className="edit-cancel-buttons">
            <button className="button6" onClick={onButtonClick}>
              <img
                className="arrowright-icon2"
                alt=""
                src="/18--arrowright.svg"
              />
              <div className="edit-booking-details">Edit Booking Details</div>
              <img
                className="arrowright-icon3"
                alt=""
                src="/18--arrowright1.svg"
              />
            </button>
            <button className="button7" onClick={onButton1Click}>
              <img
                className="arrowright-icon2"
                alt=""
                src="/18--arrowright.svg"
              />
              <div className="cancel-booking1">Cancel Booking</div>
              <img
                className="arrowright-icon3"
                alt=""
                src="/18--arrowright1.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="section-heading-2-your-tri-group">
        <h3 className="section-heading2">Payment Information</h3>
        <div className="payment-form">
          <div className="card-number">
            <div className="card-number1">Card number</div>
            <div className="text-field1">
              <img className="icon3" alt="" src="/icon1.svg" />
              <input
                className="name-field"
                placeholder="1234 1234 1234 1234"
                type="text"
              />
            </div>
          </div>
          <div className="date-security">
            <Expires
              expires="Expires"
              icon="/icon-1.svg"
              datePlaceholderPlaceholde="12 / 28"
            />
            <Expires
              expires="Security code"
              icon="/icon-2.svg"
              datePlaceholderPlaceholde="567"
            />
          </div>
          <div className="card-number">
            <div className="card-number1">Cardholder name</div>
            <div className="text-field2">
              <input
                className="mariana-hernandez"
                placeholder="Mariana Hernandez"
                type="text"
              />
            </div>
          </div>
          <div className="cta">
            <div
              className="primary-button1"
              onClick={onPrimaryButtonContainerClick}
            >
              <div className="pay-438194-now-container">
                <b>Pay $4381.94 now</b>
              </div>
            </div>
            <div className="security-meta">
              <img
                className="security-icon"
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
              <div className="pay-438194-now-container">
                Your transaction is secured with SSL encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GuestsInfo.propTypes = {
  className: PropTypes.string,
};

export default GuestsInfo;
