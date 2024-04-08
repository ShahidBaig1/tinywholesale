import NftCard from "../NftCard/NftCard.js";
import NftCardData from "../NftCard/NftCradData";
import "./ArtWorkStyle.css";

const Artwork = () => {
  return (
    <>
      <div className="artwork_section">
        <h1 className="artwork_title">ARTWORK</h1>
      </div>
      <div className="artwork_nftCards">
        {NftCardData.map((item) => (
          <NftCard
            nft={item.img}
            currentBid={item.currentBid}
            endIn={item.endIn}
          />
        ))}
      </div>
      <div className="artwork_button_container">
        <button className="artwork_button">LODE MORE</button>
      </div>
    </>
  );
};
export default Artwork;
