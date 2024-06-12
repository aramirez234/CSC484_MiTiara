import { useCallback } from "react";
import UserDetails from "../components/UserDetails";
import { useNavigate } from "react-router-dom";
import InputFieldWithLabel from "../components/InputFieldWithLabel";
import "./BookingDetailsPage.css";

const BookingDetailsPage = () => {
  const navigate = useNavigate();

  const onPrimaryButtonClick = useCallback(() => {
    navigate("/payment-screen");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="booking-details-page">
      <UserDetails />
      <div className="calendar-container">
        <h1 className="heading-2">{`Select a Date & Times`}</h1>
        <div className="calendar-container1">
          <div className="calendar-navigation">
            <div className="month-navigation">
              <div className="previous-month-button-containe">
                <div className="previous-month-buttons">
                  <div className="month-label-container">
                    <div className="button-go-to-previous-month-parent">
                      <img
                        className="button-go-to-previous-month"
                        alt=""
                        src="/button--go-to-previous-month.svg"
                      />
                      <div className="month-name-container">
                        <div className="august-2024">August 2024</div>
                      </div>
                      <img
                        className="button-go-to-previous-month1"
                        alt=""
                        src="/button--go-to-previous-month-1.svg"
                      />
                    </div>
                  </div>
                  <div className="calendar-grid">
                    <div className="table-select-a-day">
                      <div className="cell-sun">Sun</div>
                      <div className="cell-mon">Mon</div>
                      <div className="cell-tue">Tue</div>
                      <div className="cell-wed">Wed</div>
                      <div className="cell-thu">Thu</div>
                      <div className="cell-fri">Fri</div>
                      <div className="cell-sat">Sat</div>
                      <div className="gridcell-button-monday-ju" />
                      <div className="calendar-weeks">
                        <div className="week-one">
                          <div className="gridcell-button-wednesday">
                            <div className="div">1</div>
                          </div>
                          <div className="gridcell-button-wednesday">
                            <div className="div">2</div>
                          </div>
                          <div className="gridcell-button-wednesday2">
                            <div className="wrapper">
                              <b className="b">3</b>
                            </div>
                          </div>
                          <div className="gridcell-button-wednesday2">
                            <div className="wrapper">
                              <b className="b">4</b>
                            </div>
                          </div>
                          <div className="gridcell-button-wednesday4">
                            <div className="frame">
                              <b className="b">5</b>
                            </div>
                          </div>
                          <div className="gridcell-button-wednesday2">
                            <div className="frame-div">
                              <b className="b">6</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="week-two">
                        <div className="day-buttons-week-two">
                          <b className="b">7</b>
                        </div>
                        <div className="day-buttons-week-two1">
                          <b className="b">8</b>
                        </div>
                        <div className="day-buttons-week-two1">
                          <b className="b">9</b>
                        </div>
                        <div className="day-buttons-week-two3">
                          <b className="b">10</b>
                        </div>
                        <div className="day-buttons-week-two4">
                          <b className="b">11</b>
                        </div>
                        <div className="day-buttons-week-two5">
                          <b className="b">12</b>
                        </div>
                        <div className="gridcell-button-wednesday6">
                          <div className="wrapper1">
                            <b className="b">13</b>
                          </div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">14</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">15</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">16</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">17</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">18</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">19</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">20</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">21</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">22</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">23</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">24</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">25</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">26</div>
                        </div>
                        <div className="gridcell-button-wednesday7">
                          <div className="div">27</div>
                        </div>
                      </div>
                      <div className="week-three">
                        <div className="gridcell-button-wednesday21">
                          <div className="div">28</div>
                        </div>
                        <div className="gridcell-button-wednesday21">
                          <div className="div">29</div>
                        </div>
                        <div className="gridcell-button-wednesday21">
                          <div className="div">30</div>
                        </div>
                        <div className="gridcell-button-wednesday21">
                          <div className="div">31</div>
                        </div>
                      </div>
                      <div className="gridcell-button-wednesday25" />
                      <div className="gridcell-button-wednesday26" />
                      <div className="gridcell-button-wednesday27" />
                    </div>
                  </div>
                  <div className="time-zone-container-wrapper">
                    <div className="time-zone-container">
                      <b className="time-zone">Time zone</b>
                      <div className="container1">
                        <div className="time-zone-dropdown-icon">
                          <div className="container2">
                            <img
                              className="vector-icon"
                              loading="lazy"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <img
                            className="icon"
                            loading="lazy"
                            alt=""
                            src="/icon.svg"
                          />
                        </div>
                        <div className="pacific-time-">{`Pacific Time - US & Canada`}</div>
                        <div className="icon1" />
                      </div>
                    </div>
                  </div>
                  <div className="button-container">
                    <button
                      className="primary-button"
                      onClick={onPrimaryButtonClick}
                    >
                      <div className="continue">Continue</div>
                    </button>
                  </div>
                </div>
                <div className="month-label-container">
                  <button className="button" onClick={onButtonClick}>
                    <img
                      className="arrowright-icon"
                      alt=""
                      src="/18--arrowright.svg"
                    />
                    <div className="cancel-booking">Cancel Booking</div>
                    <img
                      className="arrowright-icon1"
                      alt=""
                      src="/18--arrowright1.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="heading-3-saturday-june-15-parent">
              <h3 className="heading-3">Friday, August 12</h3>
              <div className="container3">
                <div className="input-field-with-label">
                  <div className="venue-open-to">Venue Open To Customer</div>
                  <div className="field">
                    <input
                      className="label"
                      placeholder="11:00 am"
                      type="text"
                    />
                  </div>
                </div>
                <InputFieldWithLabel
                  eventStartTime="Event Start Time "
                  prop="* "
                  label="2:00 pm"
                />
                <InputFieldWithLabel
                  eventStartTime="Event End Time "
                  prop="*"
                  label="11:30 pm"
                  propColor="#fb0e0e"
                />
                <div className="start-and-end-container">
                  <span>*</span>
                  <span className="start-and-end">
                    Start and End times must not exceed 10 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPage;
