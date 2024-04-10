import React from "react";
import NftMarketplaceHome from "../../Component/marketPlaceHome/NftMarketplaceHome";
import EconomySection from "../../Component/EconomySection";
import BagsSection from "../../Component/bagsSection";
import JewellerySection from "../../Component/jewellerySection";
import StationarySection from "../../Component/stationarySection";



const Home = () => {
  return (
    <>
      <NftMarketplaceHome />
      <BagsSection/>
      <JewellerySection/>
     <StationarySection/>
       <EconomySection />
     
     

    </>
  );
};

export default Home;
