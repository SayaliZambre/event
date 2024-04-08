import { Container, Row, Col } from "react-bootstrap";
// import  MailchimpForm  from "./MailchimpForm";
import logo from "./Images/logo.svg";
import navIcon1 from "./Images/nav-icon1.svg";
import navIcon2 from "./Images/nav-icon2.svg";
import navIcon3 from "./Images/nav-icon3.svg";
import './Footer.css';
// import MailchimpForm from './MailchimpForm';
// import '~@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';



export const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        {/* Company name and description */}
        <div className="footer-items">
          <h1>ELITE</h1>
          <p>Description of any product or motto of the company.</p>
        </div>

        {/* Quick links */}
        <div className="footer-items">
          <h3>Quick Links</h3>
          <div className="border1"></div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        {/* Recipes */}
        <div className="footer-items">
          <h3>Recipes</h3>
          <div className="border1"></div>
          <ul>
            <li><a href="#">Indian</a></li>
            <li><a href="#">Chinese</a></li>
            <li><a href="#">Mexican</a></li>
            <li><a href="#">Italian</a></li>
          </ul>
        </div>

        {/* Contact information */}
        <div className="footer-items">
          <h3>Contact us</h3>
          <div className="border1"></div>
          <ul>
            {/* <FontAwesomeIcon icon={fa-phone}/> */}
            <li><i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
            <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
            <li><i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
          </ul>
          
          {/* Social links */}
          <div className="social-media">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-google-plus-square"></i></a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      {/* <div className="footer-bottom">
        Copyright &copy; Food and Burps 2020.
      </div> */}
    </div>
  );
};