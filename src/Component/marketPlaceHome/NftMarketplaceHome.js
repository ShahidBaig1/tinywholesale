import Primaryimg from "../../Asset/MarketplaceHome/ethereum-coin-Je1DD2C-600 1.png";

import Secondaryimg from "../../Asset/MarketplaceHome/ethereum-coin-Je1DD2C-600 2.png";
import PrimaryBtn from "../../units/primaryBtn/primaryBtn";
import SecondaryBtn from "../../units/secondaryBtn/secondaryBtn";
import "./nftMarketplace.css";
const MarketplaceHome = () => {
  return (
    <section className="marketplace_home">
      <div className="marketplace_mainDiv_container">
        <div className="marketplace_details_container">
          <div className="marketplace_details">
            <h1 className="marketplace_mainTitle">the largest</h1>
            <h3 className="marketplace_subTitle">nft</h3>
            <h2 className="marketplace_title">Marketplace</h2>
            <p className="marketplace_paragraph">
              The world’s largest digital marketplace for crypto collectibles
              and non-fungible tokens (NFTs), including ERC721 and ERC1155
              assets. Buy, sell, and discover exclusive digital assets like
              Axies, ENS names, CryptoKitties, Decentraland, and more.
            </p>
          </div>
          <div className="marketplace_button_container">
            <PrimaryBtn content="Explore" />
            <SecondaryBtn content="CREATE" />
          </div>
        </div>
        <div className="marketplace_subDiv_container">
          <div className="marketplace_shadowBox">
            <div className="marketplace_image_container">
              <img className="marketplace_primaryImg" src={Primaryimg} />
              <img className="marketplace_secondaryImg" src={Secondaryimg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarketplaceHome;
