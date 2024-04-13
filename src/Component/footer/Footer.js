import ScrollToTopButton from "../scrollToTop";
import "./style.css";


const Footer = () => {
  return (
  <div className="footer">
  <div className="footer1">
      <div className="icons">
      <a href="https://docs.fontawesome.com/web/use-with/react/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
      
      <i class="fab fa-linkedin-in"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-youtube"></i>
      <i class="fab fa-instagram"></i>
      
      </div>
      <div className="navbar">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      </div>
</div>
<div className="footer-end">
        <h2><i class="far fa-copyright"></i>Tiny Whole Sale 2024</h2>
      </div>
      <ScrollToTopButton/>
  </div>

 )

};

export default Footer;
