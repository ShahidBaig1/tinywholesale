// import Primaryimg from "../../Asset/MarketplaceHome/bags.jpg";
import banner from "../../Asset/banners/banner2.jpg";
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
            <h3 className="marketplace_subTitle">Whole Sale</h3>
            <h2 className="marketplace_title">Market</h2>
            <p className="marketplace_paragraph">
            Explore the largest wholesale market offering a diverse range of bags, jewelry, and stationary items. Discover unbeatable deals and a wide variety of products to meet your wholesale needs..
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
              <img className="marketplace_primaryImg" src={banner} alt="pic" />
              {/* <img className="marketplace_secondaryImg" src={Secondaryimg}alt="pic"/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarketplaceHome;
