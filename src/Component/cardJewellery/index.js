import { Link } from "react-router-dom";
import Data from "./data";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const JewelleryCard = () => {
  const classes = useStyle();
  const [visibleItems, setVisibleItems] = useState(6); // State to track the number of visible items

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Increase the number of visible items by 9
  };
  const showLoadMoreButton = visibleItems < Data.length;
  return (
    <>
      <div className={classes.title_section}>
        <div className={classes.title}>Jewellery</div>
      </div>
      <div className={classes.bags_section}>
        {Data.slice(0, visibleItems).map((user) => (
          <Link to={`/jewelery/${user.id}`}>
            <div className={classes.card_container}>
              <div className={classes.img_container}>
                <img
                  className={classes.card_img}
                  src={user.img}
                  alt="pic here"
                />
              </div>
              <div className={classes.card_details_container}>
                <div className={classes.card_details_producer}>
                  <h3> {user.producerName}</h3>
                </div>
                <div className={classes.card_details_creator}>
                  <h3>{user.description}</h3>
                </div>
                <div className={classes.nft_card_price}>
                  <h3>Current Price</h3>
                  <h3>{user.price}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {showLoadMoreButton && (
        <div className={classes.button_container}>
          <button className={classes.button} onClick={handleLoadMore}>
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
export default JewelleryCard;

export const useStyle = makeStyles((theme) => ({
  title: {
    fontFamily: "Mulish",
    fontSize: 36,
    letterSpacing: "00.11em",
    display: "inline",
    fontWeight: 400,
    lineHeight: 2,
    borderBottom: "2px solid rgb(129, 129, 129)",
  },
  title_section: {
    display: "flex",
    justifyContent: "center",
    margin: "15px 0 0px 0",
  },

  bags_section: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 0 50px 0",
  },
  card_container: {
    display: "flex",
    flexDirection: "column",
    background: " #ffffff",
    width: 390,
    height: 532,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    padding: "10px 11px 8px 10px",
    margin: " 27px 15px",
  },
  "@media (max-width: 1200px)": {
    card_container: {
      width: "300px",
      padding: 0,
    },
  },
  img_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 368,
    height: 380,
    textAlign: "center",
  },
  "@media(max-width:1200px)": {
    img_container: {
      width: "100%",
    },
  },

  card_img: {
    height: 360,
    width: "100%",
    margin: "0 auto",
  },
  "@media (max-width:1200px)": {
    card_img: {
      width: "100%",
    },
  },

  card_details_container: {
    display: "inherit",
    flexDirection: "column",
  },
  card_details_producer: {
    marginTop: 14,
  },
  card_details_creator: {
    marginTop: 18,
  },
  nft_card_price: {
    marginTop: 10,
    display: "inherit",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button_container: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    cursor: "pointer",
    padding: "12px 18px",
    width: 123,
    height: 42,
    background: "#00ccff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderadius: 50,
    outline: "none",
    border: "none",
    color: "#ffffff",
    margin: "25px 0 50px 0",
  },
}));
