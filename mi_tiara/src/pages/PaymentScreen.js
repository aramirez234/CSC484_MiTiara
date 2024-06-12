import GuestsInfo from "../components/GuestsInfo";
import Container from "../components/Container";
import "./PaymentScreen.css";

const PaymentScreen = () => {
  return (
    <div className="payment-screen">
      <div className="section-heading-2-your-tri-parent">
        <h3 className="section-heading">Booking Summary</h3>
        <div className="heading-3-dates-parent">
          <b className="heading-31">Service/Business</b>
          <div className="rodriguez-vineyard">Rodriguez Vineyard</div>
        </div>
      </div>
      <b className="heading-32">Location:</b>
      <div className="san-luis-obispo">San Luis Obispo, CA</div>
      <main className="frame-parent">
        <div className="guests-info-wrapper">
          <GuestsInfo />
        </div>
        <Container />
      </main>
    </div>
  );
};

export default PaymentScreen;
