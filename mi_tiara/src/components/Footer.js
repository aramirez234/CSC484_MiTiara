import "./Footer.css";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="footer-links">
        <div className="divider-wrapper">
          <div className="divider1" />
        </div>
        <div className="footer-info">
          <div className="footer-info-inner">
            <div className="website-info-parent">
              <div className="website-info">
                <h3 className="wwwmitiaracom1">www.MiTiara.com</h3>
              </div>
              <div className="social-buttons">
                <img
                  className="buttons-icon3"
                  loading="lazy"
                  alt=""
                  src="/buttons--icon1@2x.png"
                />
                <img
                  className="buttons-icon3"
                  alt=""
                  src="/buttons--icon-11@2x.png"
                />
                <img
                  className="buttons-icon3"
                  alt=""
                  src="/buttons--icon-21@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="info-links-parent">
            <div className="info-links">
              <div className="venuelabel2">Venue</div>
              <div className="photovideo">{`Entertainment `}</div>
              <div className="photovideo">{`Photo & Video`}</div>
            </div>
            <div className="info-links">
              <div className="venuelabel2">Customer Serivce</div>
              <div className="photovideo">Terms of use</div>
              <div className="photovideo">Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className="are-you-a-vendor-group">
        <div className="venuelabel2">Are you a Vendor?</div>
        <div className="photovideo">{`Accessibility `}</div>
        <div className="photovideo">About Us</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
