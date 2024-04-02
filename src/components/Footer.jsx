import "../styles/Footer.css";
import Logo from "../assets/logo.webp";
import Facebook from "./svg/Facebook.jsx";
import Instagram from "./svg/Instagram.jsx";
import Mail from "./svg/Mail.jsx";
import WhatsApp from "./svg/Whatsapp.jsx";

function Footer() {
  return (
    <footer>
        <div className="footer-logo">
          <img src={Logo} alt="" />
          <span>ONG MULTIDIVERSOS</span>
        </div>
        <div className="footer-social">
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <Facebook fill="red"/>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
