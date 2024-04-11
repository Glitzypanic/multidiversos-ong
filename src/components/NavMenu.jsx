import { useState } from "react";
import { Link } from "../components/Link";
import "../styles/NavMenu.css";
import CloseMenu from "./svg/CloseMenu";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import WhatsApp from "./svg/Whatsapp";
import ChevronIcon from "./svg/ChevronUp";

function NavMenu() {
  const [displayStyle, setDisplayStyle] = useState("block");
  const [isChevronRotated, setIsChevronRotated] = useState(false);
  const [isActivitiesVisible, setIsActivitiesVisible] = useState(false);

  const handleMenuClose = () => {
    setDisplayStyle("none");
  };

  const handleChevronClick = () => {
    setIsChevronRotated(!isChevronRotated);
    setIsActivitiesVisible(!isActivitiesVisible);
  }

  return (
    <>
      <nav className="nav-menu" style={{ display: displayStyle }}>
        <div className="nav-back"></div>
        <div className="nav-front">
          <div className="nav-closeIcon">
            <CloseMenu stroke="#3e404c" onClick={handleMenuClose} />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/article">Acerca de Diversidad Funcional</Link>
            </li>
            <ul className="nav-links activities">
              <a onClick={handleChevronClick}>
                Actividades <ChevronIcon stroke="black" onClick={handleChevronClick} style={{ transform: isChevronRotated ? 'rotate(180deg)' : 'none' }}/>
              </a>
              <li className="nav-links-years" style={{ display: isActivitiesVisible ? 'block' : 'none'}}>
                <a href="#">2020</a>
              </li>
              <li className="nav-links-years" style={{ display: isActivitiesVisible ? 'block' : 'none'}}>
                <a href="#">2023</a>
              </li>
              <li className="nav-links-years" style={{ display: isActivitiesVisible ? 'block' : 'none'}}>
                <a href="#">2024</a>
              </li>
            </ul>
            <li>
              <Link to="/organigram">Organigrama</Link>
            </li>
            <li>
              <Link to="/documents">Documentos ONG</Link>
            </li>
          </ul>
          <div className="nav-contact">
            <ul className="nav-socialMedia">
              <li>
                <a href="#">
                  <Facebook fill="#3e404c" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Instagram stroke="#3e404c" />
                </a>
              </li>
              <li>
                <a href="#">
                  <WhatsApp stroke="#3e404c" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
