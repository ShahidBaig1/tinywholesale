import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Component/footer/Footer";
import Footer1 from "../Component/footer1/App";
import Home from "../pages/Home";
import Header from "../Component/Header";
import ContactUS from "../pages/contactUS";
import BagsPage from "../pages/bags";
import JewelleryPage from "../pages/jewellery";
import StationaryPage from "../pages/stationary";
import DetailBags from "../pages/detailBags";
import DetailJewellery from "../pages/detailJewellery";
import DetailStationary from "../pages/detailstationary";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<BagsPage />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/jewellery" element={<JewelleryPage />} />
        <Route path="/stationary" element={<StationaryPage />} />
        <Route path="/bags/:id" element={<DetailBags />} />
        <Route path="/jewelery/:id" element={<DetailJewellery />} />
        <Route path="/stationary/:id" element={<DetailStationary />} />
      </Routes>
      {/* <Footer1/>  */}
      <Footer />
    </Router>
  );
};

export default Routers;
