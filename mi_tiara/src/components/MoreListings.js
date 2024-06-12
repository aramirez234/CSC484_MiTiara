import ListingCard from "./ListingCard";
import PropTypes from "prop-types";
import "./MoreListings.css";

const MoreListings = ({ className = "" }) => {
  return (
    <section className={`more-listings ${className}`}>
      <div className="listing-row-one">
        <div className="listing-row1">
          <ListingCard
            header="The Penny"
            rating2="4.7"
            price="$5,500 all day"
            price1="San Luis Obispo, CA"
            propPadding="0px 0px var(--padding-5xl)"
            propBackgroundImage="url('/image4@3x.png')"
            propMinWidth="82px"
            propLetterSpacing="unset"
          />
          <ListingCard
            header="Cypress Ridge Pavilion"
            rating2="4.7"
            price="$7,200 all day"
            price1="Arroyo Grande, CA"
            propPadding="unset"
            propBackgroundImage="url('/image5@3x.png')"
            propMinWidth="108px"
            propLetterSpacing="unset"
          />
          <ListingCard
            header="Park Ballroom"
            rating2="4.2"
            price="$4,000 all day"
            price1="Paso Robles, CA"
            propPadding="0px 0px var(--padding-5xl)"
            propBackgroundImage="url('/image6@3x.png')"
            propMinWidth="110px"
            propLetterSpacing="unset"
          />
          <ListingCard
            header="Pavilion on the Lake"
            rating2="4.5"
            price="$3,500 all day"
            price1="Atascadero, CA"
            propPadding="unset"
            propBackgroundImage="url('/image7@3x.png')"
            propMinWidth="115px"
            propLetterSpacing="-0.11px"
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="divider-row">
            <div className="divider" />
          </div>
          <div className="footer-information">
            <div className="footer-divider">
              <div className="company-info">
                <div className="information-columns">
                  <div className="wwwmitiaracom">www.MiTiara.com</div>
                </div>
                <div className="social-icons">
                  <img
                    className="buttons-icon"
                    loading="lazy"
                    alt=""
                    src="/buttons--icon@2x.png"
                  />
                  <img
                    className="buttons-icon"
                    alt=""
                    src="/buttons--icon-1@2x.png"
                  />
                  <img
                    className="buttons-icon"
                    alt=""
                    src="/buttons--icon-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="legal-info">
              <div className="legal-links">
                <div className="customer-serivce">Venue</div>
                <div className="terms-of-use">{`Entertainment `}</div>
                <div className="terms-of-use">Catering</div>
              </div>
              <div className="legal-links">
                <div className="customer-serivce">Customer Serivce</div>
                <div className="terms-of-use">Terms of use</div>
                <div className="terms-of-use">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="are-you-a-vendor-parent">
          <div className="customer-serivce">Are you a Vendor?</div>
          <div className="terms-of-use">{`Accessibility `}</div>
          <div className="terms-of-use">About Us</div>
        </div>
      </footer>
    </section>
  );
};

MoreListings.propTypes = {
  className: PropTypes.string,
};

export default MoreListings;
