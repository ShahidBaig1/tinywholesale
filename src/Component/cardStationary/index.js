import { Link } from "react-router-dom";

import "./style.css";
import Data from "./data";

const StationaryCard = ({user}) => {
  
  return (
    <>
    
      {/* {Data.map(user =>( */}
        <Link to='/stationary'>
        <div className="nft_card">
        <div className="nft_card_img_container">
          <img className="nft_card_img" src={user.img} alt="pic here"/>
        </div>
        <div className="nft_card_details_container">
          <div className="nft_card_details_producer">
            <h3> {user.producerName}</h3>
            
          </div>
          <div className="nft_card_details_creator">
            
            <h3>{user.description}</h3>
          </div>
          <div className="nft_card_details_bid">
            <h3>Current Price</h3>
            <h3>{user.price}</h3>
          </div>
          {/* <div className="nft_card_details_end">
            <h4>End in</h4>
            <h4>{user.endIn}</h4>
          </div> */}
        </div>
      </div> 
           
      </Link>
     
      {/* ))} */}


    </>
  );
};
export default StationaryCard;
