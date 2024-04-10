import React from 'react'
import { makeStyles } from "@material-ui/styles";
import JewelleryCard from '../cardJewellery';


function JewellerySection() {
    const classes = useStyle();
  return (<>
    <div className={classes.jewellery_section}>
        <h1 className={classes.jewellery_title}>Jewelleries</h1>
      </div>
      <div className={classes.jewellery_nftCards}>
       
          <JewelleryCard />
      
      </div>
      <div className={classes.jewellery_button_container}>
        <button className={classes.jewellery_button}>LODE MORE</button>
      </div>
      </>
  )
}

export default JewellerySection
export const useStyle = makeStyles((theme) => ({
    jewellery_section: {
    display: 'flex',
    justifyContent: 'center',
    margin: '90px 0 50px 0',
  },
  nft_card_img_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  jewellery_title: {
    fontFamily: 'Mulish',
    fontSize: 36,
    letterSpacing: '00.11em',
    display: 'inline',
    fontWeight: 400,
    lineHeight: 2,
    borderBottom: '2px solid rgb(129, 129, 129)',
  },
  jewellery_nftCards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  jewellery_button_container: {
    display: 'flex',
    justifyContent: 'center',
  },
  jewellery_button: {
    padding: '12px 18px',
    width: 123,
    height: 42,
    background: '#00ccff',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderadius: 50,
    outline: 'none',
    border: 'none',
    color: '#ffffff',
    margin: '25px 0 50px 0'
  }}))