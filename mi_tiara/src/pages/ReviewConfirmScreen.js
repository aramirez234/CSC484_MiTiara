import Success from "../components/Success";
import Container1 from "../components/Container1";
import "./ReviewConfirmScreen.css";

const ReviewConfirmScreen = () => {
  return (
    <div className="review-confirm-screen">
      <div className="review-confirm">
        <Success />
      </div>
      <Container1 />
    </div>
  );
};

export default ReviewConfirmScreen;
