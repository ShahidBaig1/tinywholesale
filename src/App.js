import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WalletModal from "./Component/Modal/index";
import Footer from "./Component/footer/Footer";
import Footer1 from "./Component/footer1/App";
import Header from "./Component/Header";
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import Browse from "./pages/Browse";
import Shop from "./pages/Shop";
import "./App.css";

const App = () => {
  return (
    <div className="mainn">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connectwallet" element={<WalletModal />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer1/>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
