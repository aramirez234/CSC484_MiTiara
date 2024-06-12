import NavHeader1 from "../components/NavHeader1";
import Listings from "../components/Listings";
import Categories from "../components/Categories";
import ListingRowTwo from "../components/ListingRowTwo";
import MoreListings from "../components/MoreListings";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <NavHeader1 />
      <Listings />
      <Categories />
      <div className="content-layout">
        <b className="outdoors">Outdoors</b>
      </div>
      <ListingRowTwo />
      <div className="layout">
        <b className="outdoors">Banquet Halls</b>
      </div>
      <MoreListings />
    </div>
  );
};

export default MainScreen;
