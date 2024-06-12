import { useMemo } from "react";
import "./ListingCard.css";
import PropTypes from "prop-types";

const ListingCard = ({
  className = "",
  header,
  rating2,
  price,
  price1,
  propPadding,
  propBackgroundImage,
  propMinWidth,
  propLetterSpacing,
}) => {
  const listingCardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const imageStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const headerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      letterSpacing: propLetterSpacing,
    };
  }, [propMinWidth, propLetterSpacing]);

  return (
    <div className={`listing-card ${className}`} style={listingCardStyle}>
      <div className="image" style={imageStyle}>
        <div className="icon-top-right-swappable-for">
          <img className="path-icon" alt="" src="/path.svg" />
        </div>
      </div>
      <div className="content-adjust-spacing-around">
        <div className="heading">
          <div className="header" style={headerStyle}>
            {header}
          </div>
          <div className="rating">
            <img className="star-fill-icon" alt="" src="/star-fill.svg" />
            <b className="rating2">{rating2}</b>
          </div>
        </div>
        <b className="price">{price}</b>
        <div className="price1">{price1}</div>
      </div>
    </div>
  );
};

ListingCard.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  rating2: PropTypes.string,
  price: PropTypes.string,
  price1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propMinWidth: PropTypes.any,
  propLetterSpacing: PropTypes.any,
};

export default ListingCard;
