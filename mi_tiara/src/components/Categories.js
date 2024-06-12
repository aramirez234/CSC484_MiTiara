import CateringCategoryFrame from "./CateringCategoryFrame";
import PropTypes from "prop-types";
import "./Categories.css";

const Categories = ({ className = "" }) => {
  return (
    <section className={`categories ${className}`}>
      <div className="categorybar">
        <div className="venuecategoryframe1">
          <div className="venueframe">
            <div className="venueicon" />
          </div>
          <div className="category-labels">
            <div className="venuelabel-parent">
              <div className="venuelabel">Venue</div>
              <div className="category-labels1">
                <img className="venue-icon" alt="" src="/venue-icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="entertainmentcategoryframe2">
          <div className="entertainmentframe-wrapper">
            <div className="entertainmentframe">
              <div className="entertainmenticon" />
            </div>
          </div>
          <div className="venuelabel">Entertainment</div>
        </div>
        <CateringCategoryFrame
          cateringFrame="/cateringframe@2x.png"
          cateringLabel="Catering"
        />
        <CateringCategoryFrame
          cateringFrame="/decorationframe@2x.png"
          cateringLabel="Decoration"
          propPadding="0px var(--padding-smi) 0px var(--padding-xs)"
        />
        <CateringCategoryFrame
          cateringFrame="/pvframe@2x.png"
          cateringLabel={`Photo & Video`}
          propPadding="0px var(--padding-5xl)"
        />
      </div>
    </section>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
