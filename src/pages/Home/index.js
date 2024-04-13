import React from "react";
import NftMarketplaceHome from "../../Component/marketPlaceHome/NftMarketplaceHome";
import EconomySection from "../../Component/EconomySection";
import BagsCard from "../../Component/cardBags/BagCard";
import JewelleryCard from "../../Component/cardJewellery/index";
import StationaryCard from "../../Component/cardStationary/index";

const Home = () => {
  return (
    <>
      <NftMarketplaceHome />
      <BagsCard />
      <JewelleryCard />
      <StationaryCard />
      <EconomySection />
    </>
  );
};

export default Home;
