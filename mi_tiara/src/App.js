import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainScreen from "./pages/MainScreen";
import BookingDetailsPage from "./pages/BookingDetailsPage";
import ReviewConfirmScreen from "./pages/ReviewConfirmScreen";
import PaymentScreen from "./pages/PaymentScreen";
import ListingDetailsScreen from "./pages/ListingDetailsScreen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/booking-details-page":
        title = "";
        metaDescription = "";
        break;
      case "/review-confirm-screen":
        title = "";
        metaDescription = "";
        break;
      case "/payment-screen":
        title = "";
        metaDescription = "";
        break;
      case "/listing-details-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/booking-details-page" element={<BookingDetailsPage />} />
      <Route path="/review-confirm-screen" element={<ReviewConfirmScreen />} />
      <Route path="/payment-screen" element={<PaymentScreen />} />
      <Route
        path="/listing-details-screen"
        element={<ListingDetailsScreen />}
      />
    </Routes>
  );
}
export default App;
