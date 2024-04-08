import React,{useState} from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Header = () => {

    const  [Click,setClick] = useState(false);

    const handleClick = ()=> { setClick(!Click);}

    return (
        <div className="container">
            <div className="logo">
                <h3 className="logoText">NFT SITE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#3C64B1"/></svg> <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#3C64B1"/></svg></h3>
            </div>

            <div className={`navBar ${Click?'':'block'}` }>
                <ul className="navItems">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/artwork">Artworks</Link></li>
                    <li><Link to="/browse">Browse</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/">Search<i className="fas fa-search btnSearch"></i></Link></li>
                </ul>
            </div>

            <div className="btnDiv">
                <button className="btn">Connect Wallet</button>
            </div>

            <div className="bars" onClick={handleClick}>
               {!Click?<i class="fas fa-bars fa-2x"></i>:<i class="fas fa-times fa-2x"></i>}
            </div>
        </div>
      
    )
}

export default Header;

