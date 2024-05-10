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
        <img src={Logo} alt="Logo MULTIDIVERSOS" width="100" height="100" />
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
            <Link to="/article">Artículos</Link>
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
            <a href="https://wa.me/+56930598765" target="_blank">
              <WhatsApp stroke="var(--clr-neutral-100)" height="18" />
              +569 30598765
            </a>
          </li>
          <li>
            <a role="button" target="_blank" className="mail">
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
            <a
              aria-label="Link para ir al perfil de Facebook"
              href="https://web.facebook.com/multi.diversos.92?_rdc=1&_rdr"
              target="_blank"
            >
              <Facebook fill="#fdfdfd" />
            </a>
          </li>
          <li>
            <a
              aria-label="Link para ir al perfil de Instagram"
              href="https://www.instagram.com/organizacionmultidiversos/"
              target="_blank"
            >
              <Instagram stroke="#fdfdfd" />
            </a>
          </li>
          <li>
            <a
              aria-label="Link para ir al perfil de Twitter"
              href="https://twitter.com/multidiversos_"
              target="_blank"
            >
              <XIcon stroke="#fdfdfd" />
            </a>
          </li>
          <li>
            <a
              aria-label="Link para ir al perfil de Youtube"
              href="https://www.youtube.com/channel/UCPB2-B5RVvvHSQ7vIbUHXlQ"
              target="_blank"
            >
              <Youtube stroke="#fdfdfd" />
            </a>
          </li>
        </ul>
      </div>
      <span className="footer-social-line"> </span>
    </footer>
  );
}

export default Footer;
