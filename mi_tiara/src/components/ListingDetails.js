import ReviewItems from "./ReviewItems";
import PropTypes from "prop-types";
import "./ListingDetails.css";

const ListingDetails = ({ className = "" }) => {
  return (
    <div className={`listing-details ${className}`}>
      <div className="intro-container">
        <div className="listing-intro1">
          <h1 className="flying-caballos-ranch1">Flying Caballos Ranch</h1>
          <h1 className="offered-by-rodriguez">
            Offered by Rodriguez Vineyard
          </h1>
          <div className="intro-stats1">
            <div className="rating7">
              <img
                className="star-fill-icon5"
                loading="lazy"
                alt=""
                src="/star-fill1.svg"
              />
              <b className="label15">4.9</b>
            </div>
            <div className="rating8">
              <img
                className="subtract-icon"
                loading="lazy"
                alt=""
                src="/subtract.svg"
              />
              <div className="label16">25 Reviews</div>
            </div>
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="details">
          <b className="description">Description</b>
          <h2 className="the-flying-caballos">
            The Flying Caballos Ranch is a country wedding venue located in the
            rolling hills of Edna Valley, a picturesque property just minutes
            from downtown San Luis Obispo, California. From the charm of the
            historic 1905 Farmhouse to the rustic industrial-style Barn, this
            locale presents you and your guests with an unforgettable
            experience.
          </h2>
        </div>
      </div>
      <div className="details-container">
        <div className="details">
          <h1 className="facilities-and-capacity">Facilities and Capacity</h1>
          <h2 className="with-multiple-locations-container">
            <span>
              <p className="with-multiple-locations">
                With multiple locations to host your wedding ceremony, cocktail
                hour, and reception, The Flying Caballos Ranch is great for both
                intimate gatherings and large celebrations. The ranch offers a
                unique wedding weekend getaway that hosts up to 200 guests and
                includes overnight accommodations for 20 guests in four historic
                homes.
              </p>
              <p className="with-multiple-locations">&nbsp;</p>
              <p className="with-multiple-locations">{`This expansive space is perfect for the wedding ceremony of your dreams. A gorgeous 3,800 sq. ft. barn with reclaimed redwood walls, corrugated metal ceilings, & beautiful glass sliding doors. Features include ambient lighting, polished concrete floors, restrooms, and a catering area. The Barn Patio is the ultimate space to mix and mingle with your guests for cocktail hour`}</p>
            </span>
          </h2>
        </div>
      </div>
      <div className="details-container2">
        <div className="details2">
          <b className="description">Important Details</b>
          <div className="list">
            <div className="menu-item">
              <img
                className="stackframe-fill-icon"
                loading="lazy"
                alt=""
                src="/stackframe-fill.svg"
              />
              <h2 className="offering-of-alcoholic">
                Offering of alcoholic beverages requires security on site
              </h2>
            </div>
            <div className="menu-item1">
              <img
                className="stackframe-fill-icon"
                alt=""
                src="/stackframe-fill.svg"
              />
              <h2 className="venue-features-an">
                Venue features an inventory of rental items that includes
                tables, chairs, and lighting.
              </h2>
            </div>
            <div className="menu-item2">
              <img
                className="stackframe-fill-icon"
                alt=""
                src="/stackframe-fill.svg"
              />
              <h2 className="parking-spaces-and">
                Parking spaces and wheelchair-accessible entrances are available
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="vendor-details-container">
        <div className="vendor-details">
          <h1 className="facilities-and-capacity">
            Offered by Rodriguez Vineyard
          </h1>
          <div className="vendor-descr">
            <img
              className="logo-icon"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
            <h2 className="rodriguez-vineyard-is">{`Rodriguez Vineyard is a picturesque, family-owned  winery nestled in the heart of California's celebrated wine country.  Established in 1985, Rodriguez Vineyard blends traditional viticulture  techniques with modern innovation to produce award-winning wines.  `}</h2>
          </div>
        </div>
      </div>
      <div className="reviews-container">
        <div className="reviews">
          <b className="description">Customer Reviews</b>
          <div className="review-grid">
            <div className="review-row">
              <ReviewItems
                userAvatars="/ellipse-10@2x.png"
                mayraGonzales="Mayra Gonzales"
                june2024="June 2024"
                starFilled4="/24--star-filled-4.svg"
                iHadAFantasticExperienceW="I had a fantastic experience with this venue. The landscape was beautiful, the on-site staff were so accommodating, and the parking was very much appreciated"
              />
              <ReviewItems
                userAvatars="/ellipse-10-1@2x.png"
                mayraGonzales="Claudia Hernandez"
                june2024="May 2024"
                starFilled4="/24--star-filled.svg"
                iHadAFantasticExperienceW="This was my first time booking a venue for a wedding and it could not have gone better. The staff was always ready to help when the need arose for me and my guests"
                propBorderRadius="50%"
                propHeight="27px"
                propDisplay="inline-block"
                propHeight1="unset"
                propDisplay1="unset"
                propHeight2="180px"
              />
            </div>
            <div className="review-row">
              <ReviewItems
                userAvatars="/ellipse-10-2@2x.png"
                mayraGonzales="Juan Garcia"
                june2024="March 2024"
                starFilled4="/24--star-filled-4.svg"
                iHadAFantasticExperienceW="Stunning landscape and very spacious facilities. Had no problem in terms of space for all of my guests. My buddy recommended with place and I really enjoyed it. Mom and dad had a fun, beautiful anniversary"
                propBorderRadius="unset"
                propHeight="27px"
                propDisplay="inline-block"
                propHeight1="25px"
                propDisplay1="inline-block"
                propHeight2="240px"
              />
              <div className="ellipse-parent">
                <img
                  className="frame-child"
                  alt=""
                  src="/ellipse-10-3@2x.png"
                />
                <div className="frame-container">
                  <div className="monica-uriel-parent">
                    <div className="monica-uriel">Monica Uriel</div>
                    <div className="february-2024">February 2024</div>
                  </div>
                  <div className="rating-star-row1">
                    <img
                      className="star-filled-icon5"
                      alt=""
                      src="/24--star-filled.svg"
                    />
                    <img
                      className="star-filled-icon5"
                      alt=""
                      src="/24--star-filled.svg"
                    />
                    <img
                      className="star-filled-icon5"
                      alt=""
                      src="/24--star-filled.svg"
                    />
                    <img
                      className="star-filled-icon5"
                      alt=""
                      src="/24--star-filled.svg"
                    />
                    <img
                      className="star-filled-icon5"
                      alt=""
                      src="/24--star-filled.svg"
                    />
                  </div>
                  <p className="me-gusto-mucho-container">
                    <span className="me-gusto-mucho-it-was-a-very">
                      <span>
                        <span>
                          Me gusto mucho! It was a very good place to host my
                          daughter’s wedding. I was scared about the amount of
                          space for my big family. But it was more than enough
                          and everything looked so nice
                        </span>
                      </span>
                    </span>
                    <span className="read-full-review1">
                      <span>
                        <span>Read full review...</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="review-ratings">
              <button className="button14">
                <img
                  className="arrowright-icon6"
                  alt=""
                  src="/18--arrowright1.svg"
                />
                <div className="see-all-reviews">See All Reviews</div>
                <img
                  className="arrowright-icon7"
                  alt=""
                  src="/18--arrowright1.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ListingDetails.propTypes = {
  className: PropTypes.string,
};

export default ListingDetails;
