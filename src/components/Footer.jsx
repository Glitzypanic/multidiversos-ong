import "../styles/components_style/Footer.css";
import { Link } from "react-router-dom";
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
      <div className="footer-links">
        <h3>Enlaces</h3>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/article">Articulos</Link>
          </li>
          <li>
            <Link to="/organigram">Organigrama</Link>
          </li>
          <li>
            <Link to="/documents">Documentos</Link>
          </li>
        </ul>
      </div>

      <div className="footer-contacto">
        <h3>Contacto</h3>
        <ul>
          <li>
            <a
              onClick={() =>
                window.open("https://wa.me/+56942596966", "_blank")
              }
            >
              <WhatsApp stroke="var(--clr-neutral-100)" height="18" />
              +569 42596977
            </a>
          </li>
          <li>
            <a 
              onClick={() =>
                window.open("https://wa.me/+56942596966", "_blank")
              }
            >
              <Mail stroke="var(--clr-neutral-100)" height="18" />
              multidiversos.org@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <span className="footer-social-vertical-line"> </span>

      <div className="footer-social">
        <h3>Redes Sociales</h3>
        <ul>
          <li>
            <Facebook fill="#fdfdfd" />
          </li>
          <li>
            <Instagram stroke="#fdfdfd" />
          </li>
          <li>
            <XIcon stroke="#fdfdfd" />
          </li>
          <li>
            <Youtube stroke="#fdfdfd" />
          </li>
        </ul>
      </div>
      <span className="footer-social-line"> </span>
    </footer>
  );
}

export default Footer;
