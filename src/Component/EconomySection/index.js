import React from 'react'
import './index.css';
import one from "../../Asset/MarketplaceHome/one.jpg"

function Card() {
    return (
        <div>
            <div className='containerEconomy'>
            <div className='img_cont'>
                <img src={one} alt=" here"/>
            </div>
            <div className='inner_one'>
            <div className='inner'>
                <h1>this is the <br/> new creative <br/>economy</h1>
            <p>we're bringing digital creators, crypto <br/> natives, and collectors together to <br/>
            move culture forward.</p>
            <button>Become a creator</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Card
