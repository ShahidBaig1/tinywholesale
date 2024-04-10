import React from 'react'
import { makeStyles } from "@material-ui/styles";
import BagsCard from '../../Component/cardBags/BagCard';


function BagsSection() {
const classes = useStyle();
  return (<>
    <div className={classes.bags_section}>
        <h1 className={classes.bags_title}>BAGS</h1>
      </div>
      <div className={classes.bags_nftCards}>
       
          <BagsCard />
      
      </div>
      <div className={classes.bags_button_container}>
        <button className={classes.bags_button}>LODE MORE</button>
      </div>
      </>
  )
}

export default BagsSection
export const useStyle = makeStyles((theme) => ({
    bags_section: {
    display: 'flex',
    justifyContent: 'center',
    margin: '90px 0 50px 0',
  },
  nft_card_img_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bags_title: {
    fontFamily: 'Mulish',
    fontSize: 36,
    letterSpacing: '00.11em',
    display: 'inline',
    fontWeight: 400,
    lineHeight: 2,
    borderBottom: '2px solid rgb(129, 129, 129)',
  },
  bags_nftCards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bags_button_container: {
    display: 'flex',
    justifyContent: 'center',
  },
  bags_button: {
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