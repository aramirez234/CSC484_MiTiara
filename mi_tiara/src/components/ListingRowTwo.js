import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListingCard from "./ListingCard";
import PropTypes from "prop-types";
import "./ListingRowTwo.css";

const ListingRowTwo = ({ className = "" }) => {
  const navigate = useNavigate();

  const onListingCardContainerClick = useCallback(() => {
    navigate("/listing-details-screen");
  }, [navigate]);

  return (
    <section className={`listing-row-two ${className}`}>
      <div className="listing-row">
        <div className="listing-card1" onClick={onListingCardContainerClick}>
          <div className="image1">
            <div className="icon-top-right-swappable-for1">
              <img
                className="path-icon1"
                loading="lazy"
                alt=""
                src="/path.svg"
              />
            </div>
          </div>
          <div className="content-adjust-spacing-around1">
            <div className="heading1">
              <div className="header1">Flying Caballos Ranch</div>
              <div className="rating1">
                <img
                  className="star-fill-icon1"
                  loading="lazy"
                  alt=""
                  src="/star-fill.svg"
                />
                <b className="rating11">4.9</b>
              </div>
            </div>
            <b className="price2">$4,000 all day</b>
            <div className="price3">San Luis Obispo, CA</div>
          </div>
        </div>
        <ListingCard
          header={`The Grace Maralyn Estate & Garden`}
          rating2="4.8"
          price="$3,000 all day"
          price1="Atascadero, CA"
        />
        <div className="listing-card2">
          <div className="image2">
            <div className="icon-top-right-swappable-for2">
              <img className="path-icon1" alt="" src="/path.svg" />
            </div>
            <div className="aspect-ratio-horizontal-16">
              <img
                className="px-auto-layout"
                alt=""
                src="/0px-auto-layout@2x.png"
              />
            </div>
          </div>
          <div className="content-adjust-spacing-around1">
            <div className="heading2">
              <div className="header2">Tar Creek Ranch</div>
              <div className="rating1">
                <img className="star-fill-icon1" alt="" src="/star-fill.svg" />
                <b className="rating11">4.4</b>
              </div>
            </div>
            <b className="price4">$4,500 all day</b>
            <div className="price5">Arroyo Grande, CA</div>
          </div>
        </div>
        <div className="listing-card3">
          <div className="image3">
            <div className="icon-top-right-swappable-for2">
              <img className="path-icon1" alt="" src="/path.svg" />
            </div>
            <div className="aspect-ratio-horizontal-16">
              <img
                className="px-auto-layout"
                alt=""
                src="/0px-auto-layout@2x.png"
              />
            </div>
          </div>
          <div className="content-adjust-spacing-around1">
            <div className="heading3">
              <div className="header3">{`CaliPaso Winery & Villa`}</div>
              <div className="rating1">
                <img className="star-fill-icon1" alt="" src="/star-fill.svg" />
                <b className="rating11">4.4</b>
              </div>
            </div>
            <b className="price4">$1,500 all day</b>
            <div className="price5">Paso Robles, CA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

ListingRowTwo.propTypes = {
  className: PropTypes.string,
};

export default ListingRowTwo;
