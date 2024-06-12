import { useMemo } from "react";
import "./ReviewItems.css";
import PropTypes from "prop-types";

const ReviewItems = ({
  className = "",
  userAvatars,
  mayraGonzales,
  june2024,
  starFilled4,
  iHadAFantasticExperienceW,
  propBorderRadius,
  propHeight,
  propDisplay,
  propHeight1,
  propDisplay1,
  propHeight2,
}) => {
  const userAvatarsIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const mayraGonzalesStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const june2024Style = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay1,
    };
  }, [propHeight1, propDisplay1]);

  const iHadAContainerStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className={`review-items ${className}`}>
      <img
        className="user-avatars-icon"
        loading="lazy"
        alt=""
        src={userAvatars}
        style={userAvatarsIconStyle}
      />
      <div className="review-details">
        <div className="reviewer-info">
          <div className="mayra-gonzales" style={mayraGonzalesStyle}>
            {mayraGonzales}
          </div>
          <div className="june-2024" style={june2024Style}>
            {june2024}
          </div>
        </div>
        <div className="rating-star-row">
          <img
            className="star-filled-icon"
            loading="lazy"
            alt=""
            src="/24--star-filled.svg"
          />
          <img className="star-filled-icon" alt="" src="/24--star-filled.svg" />
          <img className="star-filled-icon" alt="" src="/24--star-filled.svg" />
          <img className="star-filled-icon" alt="" src="/24--star-filled.svg" />
          <img className="star-filled-icon" alt="" src={starFilled4} />
        </div>
        <p className="i-had-a-container" style={iHadAContainerStyle}>
          <span className="i-had-a-fantastic-experience-w">
            <span>
              <span>{iHadAFantasticExperienceW}</span>
            </span>
          </span>
          <span className="read-full-review">
            <span>
              <span className="span4">{` `}</span>
              <span>Read full review...</span>
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

ReviewItems.propTypes = {
  className: PropTypes.string,
  userAvatars: PropTypes.string,
  mayraGonzales: PropTypes.string,
  june2024: PropTypes.string,
  starFilled4: PropTypes.string,
  iHadAFantasticExperienceW: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay1: PropTypes.any,
  propHeight2: PropTypes.any,
};

export default ReviewItems;
