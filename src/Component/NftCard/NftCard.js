import NftCardImg from "../../Asset/NftCard/18d1ef4655494b9d7f859a2c18cf2e93 1.png";
import "./NftCardStyle.css";
const NftCard = (props) => {
  return (
    <>
      <div className="nft_card">
        <div className="nft_card_img_container">
          <img className="nft_card_img" src={props.nft} />
        </div>
        <div className="nft_card_details_container">
          <div className="nft_card_details_producer">
            <h3>Producer Name</h3>
            <h3>{props.producerName}</h3>
          </div>
          <div className="nft_card_details_creator">
            <h3>Creator Name</h3>
            <h3>{props.creatorName}</h3>
          </div>
          <div className="nft_card_details_bid">
            <h3>Current Bid</h3>
            <h3>{props.currentBid} ETH</h3>
          </div>
          <div className="nft_card_details_end">
            <h4>End in</h4>
            <h4>{props.endIn}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default NftCard;
