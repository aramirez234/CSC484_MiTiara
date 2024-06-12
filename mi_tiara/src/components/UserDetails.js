import InputFieldWithLabel1 from "./InputFieldWithLabel1";
import PropTypes from "prop-types";
import "./UserDetails.css";

const UserDetails = ({ className = "" }) => {
  return (
    <div className={`user-details ${className}`}>
      <h1 className="heading-21">Enter Details</h1>
      <div className="input-field-with-label2">
        <h3 className="guests">
          <span>{`Guests `}</span>
          <span className="span1">*</span>
        </h3>
        <div className="field3">
          <div className="label6">150</div>
        </div>
      </div>
      <InputFieldWithLabel1 typeOfEvent="Type Of Event " label="Wedding" />
      <div className="input-field-with-label2">
        <h3 className="guests">
          <span>{`No. of Tables `}</span>
          <span className="span1">*</span>
        </h3>
        <div className="field4">
          <input className="label7" placeholder="17" type="text" />
        </div>
      </div>
      <InputFieldWithLabel1
        typeOfEvent="Onsite Kitchen Access "
        label="Yes"
        propWidth="367px"
        propAlignSelf="unset"
        propWidth1="208px"
      />
      <InputFieldWithLabel1
        typeOfEvent="Alcohol Served "
        label="Yes"
        propWidth="295px"
        propAlignSelf="unset"
        propWidth1="208px"
      />
      <div className="multi-line-paragraph-input">
        <b className="important-notes">Important Notes</b>
        <textarea
          className="field5"
          placeholder="We will be bringing some decorations that we want to hang around the venue"
          rows={7}
          cols={31}
        />
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  className: PropTypes.string,
};

export default UserDetails;
