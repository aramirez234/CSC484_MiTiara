import { useMemo } from "react";
import "./CateringCategoryFrame.css";
import PropTypes from "prop-types";

const CateringCategoryFrame = ({
  className = "",
  cateringFrame,
  cateringLabel,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`cateringcategoryframe3 ${className}`}>
      <div className="cateringframe-wrapper" style={frameDivStyle}>
        <img
          className="cateringframe-icon"
          loading="lazy"
          alt=""
          src={cateringFrame}
        />
      </div>
      <div className="cateringlabel">{cateringLabel}</div>
    </div>
  );
};

CateringCategoryFrame.propTypes = {
  className: PropTypes.string,
  cateringFrame: PropTypes.string,
  cateringLabel: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default CateringCategoryFrame;
