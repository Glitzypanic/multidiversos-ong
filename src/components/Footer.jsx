import "../styles/Footer.css";
import Logo from "../assets/logo.webp";
import Facebook from "./svg/Facebook.jsx";
import Instagram from "./svg/Instagram.jsx";
import Mail from "./svg/Email.jsx";
import WhatsApp from "./svg/Whatsapp.jsx";
import XIcon from "./svg/XIcon.jsx";
import Youtube from "./svg/Youtube.jsx";

function Footer() {
  return (
    <footer>
        <div className="footer-logo">
          <img src={Logo} alt="Logo MULTIDIVERSOS" />
          <span>ONG MULTIDIVERSOS</span>
        </div>
          <span className="footer-social-line"> </span>
        <div className="footer-social">
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <Facebook fill="#fdfdfd"/>
            </li>
            <li>
              <Instagram stroke="#fdfdfd"/>
            </li>
            <li>
              <WhatsApp stroke="#fdfdfd"/>
            </li>
            <li>
              <Mail stroke="#fdfdfd"/>
            </li>
            <li>
              <XIcon stroke="#fdfdfd"/>
            </li>
            <li>
              <Youtube stroke="#fdfdfd"/>
            </li>
          </ul>
        </div>
          <span className="footer-social-line"> </span>
    </footer>
  );
}

export default Footer;
