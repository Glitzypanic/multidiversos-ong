import "../styles/NavMenu.css";
import CloseMenu from "./svg/CloseMenu";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import WhatsApp from "./svg/Whatsapp";

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
            <a href="#about">Misión y Vision</a>
          </li>
          <li>
            <a href="#about">Acerca de Diversidad Funcional</a>
          </li>
          <li>
            <a href="#activities">Actividades 2020 - 2023</a>
          </li>
          <li>
            <a href="#organigrama">Organigrama</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#documents">Documentos ONG</a>
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
