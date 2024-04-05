import { Link } from "../components/Link";
import "../styles/NavMenu.css";
import CloseMenu from "./svg/CloseMenu";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import WhatsApp from "./svg/Whatsapp";
import ChevronIcon from "./svg/ChevronUp";

function NavMenu() {
  return (
    <nav id="navbar" hidden>
      <div className="back"></div>
      <div className="front">
        <div className="front-close-menu">
          <CloseMenu stroke="#3e404c" />
        </div>
        <ul className="links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/article">Acerca de Diversidad Funcional</Link>
          </li>
          <li className="links-subTitle">
            <li><a className="activities" href="/activities">Actividades <ChevronIcon className="chevron" stroke="black"/></a></li>
            <ul>
              <li><a href="#">2020</a></li>
              <li><a href="#">2023</a></li>
              <li><a href="#">2024</a></li>
            </ul>
          </li>
          <li>
            <Link to="/organigram">Organigrama</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/documents">Documentos ONG</Link>
          </li>
        </ul>
        <div className="front-contact">
          <ul className="contact-social">
          <li>
              <a href="#"><Facebook fill="#3e404c"/></a>
            </li>
            <li>
              <a href="#"><Instagram stroke="#3e404c"/></a>
            </li>
            <li>
              <a href="#"><WhatsApp stroke="#3e404c"/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
