import "./PhotosSection.css";
import PropTypes from "prop-types";

const PhotosSection = ({ className = "" }) => {
  return (
    <div className={`photos-section ${className}`}>
      <div className="image-container">
        <div className="image4">
          <div className="aspect-ratio-horizontal-162">
            <img
              className="px-auto-layout2"
              loading="lazy"
              alt=""
              src="/0px-auto-layout@2x.png"
            />
          </div>
        </div>
        <div className="image-grid">
          <div className="image-row">
            <div className="image5">
              <div className="aspect-ratio-horizontal-163">
                <img
                  className="px-auto-layout3"
                  alt=""
                  src="/0px-auto-layout-1@2x.png"
                />
              </div>
            </div>
            <div className="image6">
              <div className="aspect-ratio-horizontal-163">
                <img
                  className="px-auto-layout3"
                  alt=""
                  src="/0px-auto-layout-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="image-row">
            <div className="image7">
              <div className="aspect-ratio-horizontal-163">
                <img
                  className="px-auto-layout3"
                  alt=""
                  src="/0px-auto-layout-1@2x.png"
                />
              </div>
            </div>
            <div className="image8">
              <div className="button12">
                <div className="button13">
                  <img
                    className="content-add"
                    loading="lazy"
                    alt=""
                    src="/content--add.svg"
                  />
                </div>
              </div>
              <div className="aspect-ratio-horizontal-166">
                <img
                  className="px-auto-layout6"
                  alt=""
                  src="/0px-auto-layout-4@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PhotosSection.propTypes = {
  className: PropTypes.string,
};

export default PhotosSection;
