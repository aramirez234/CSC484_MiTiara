import { useCallback } from "react";
import NavHeader from "../components/NavHeader";
import PhotosSection from "../components/PhotosSection";
import ListingDetails from "../components/ListingDetails";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./ListingDetailsScreen.css";

const ListingDetailsScreen = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/booking-details-page");
  }, [navigate]);

  return (
    <div className="listing-details-screen">
      <NavHeader />
      <PhotosSection />
      <main className="listing-info">
        <section className="listing-details-upper-containe">
          <ListingDetails />
          <div className="sticky-frame-helper">
            <div className="book-box-container">
              <div className="book-box">
                <div className="all-day">$4000 all day</div>
                <h2 className="san-luis-obispo-container">
                  <span>
                    <p className="san-luis-obispo1">San Luis Obispo,</p>
                    <p className="ca">CA</p>
                  </span>
                </h2>
                <div className="button1" onClick={onButtonContainerClick}>
                  <h2 className="book">Book</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ListingDetailsScreen;
