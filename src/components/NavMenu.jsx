import "../styles/NavMenu.css";
import CloseMenu from "./svg/CloseMenu.jsx";

function NavMenu() {
  return (
    <nav id="navbar" hidden>
      <div className="back"></div>
      <div className="front">
        <div className="front-close-menu">
            <img src={CloseMenu} alt="" />
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
              <a href="#"><img src="src/assets/brand-facebook.svg" alt="Logo de Facebook" /></a>
            </li>
            <li>
              <a href="#"><img src="src/assets/brand-instagram.svg" alt="Logo de Instagram" /></a>
            </li>
            <li>
              <a href="#"><img src="src/assets/brand-whatsapp.svg" alt="Logo de Whatsapp" /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
