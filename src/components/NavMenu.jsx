import { useContext } from "react";
import { MenuContext } from "../utils/MenuContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components_style/NavMenu.css";
import CloseMenu from "./svg/CloseMenu";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import WhatsApp from "./svg/Whatsapp";
import ChevronIcon from "./svg/ChevronUp";
import ToolsNav from "./ToolsNav";

// Componente de navegación del menú
function NavMenu() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const [isChevronRotated, setIsChevronRotated] = useState(false);
  const [isActivitiesVisible, setIsActivitiesVisible] = useState(false);

  // Función para cerrar el menú
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Función para rotar la flecha y mostrar las actividades
  const handleChevronClick = () => {
    setIsChevronRotated(!isChevronRotated);
    setIsActivitiesVisible(!isActivitiesVisible);
  };

  // Función para cerrar el menú
  const handleBackClick = () => {
    setIsMenuOpen(false);
  };

  // Efecto para cerrar el menú de actividades haciendo click fuera del contenedor
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navContainer = document.querySelector(".nav-link-container");
      if (
        isActivitiesVisible &&
        navContainer &&
        !navContainer.contains(event.target)
      ) {
        setIsActivitiesVisible(false);
      }
    };

    // Agregar el evento de escucha cuando el componente se monta
    window.addEventListener("mousedown", handleClickOutside);

    // Limpiar el evento de escucha cuando el componente se desmonta
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActivitiesVisible]); // Dependencia para el efecto

  // ...

  return (
    <>
      <nav
        className="nav-menu"
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div className="nav-back" onClick={handleBackClick}></div>
        <div className="nav-front">
          <div className="nav-closeIcon">
            <CloseMenu stroke="#3e404c" onClick={handleMenuClose} />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/article">Artículos</Link>
            </li>
            <ul className="nav-links activities">
              <a role="button" onClick={handleChevronClick}>
                Actividades{" "}
                <ChevronIcon
                  stroke="black"
                  onClick={handleChevronClick}
                  style={{
                    transform: isChevronRotated ? "rotate(180deg)" : "none",
                  }}
                />
              </a>
              <div
                className="nav-link-container"
                style={{ display: isActivitiesVisible ? "block" : "none" }}
              >
                <li
                  className="nav-links-years"
                  style={{ display: isActivitiesVisible ? "block" : "none" }}
                >
                  <Link to="/activities2020">2020</Link>
                  <span className="nav-link-line"></span>
                </li>
                <li
                  className="nav-links-years"
                  style={{ display: isActivitiesVisible ? "block" : "none" }}
                >
                  <Link to="/activities2021">2021</Link>
                  <span className="nav-link-line"></span>
                </li>
                <li
                  className="nav-links-years"
                  style={{ display: isActivitiesVisible ? "block" : "none" }}
                >
                  <Link to="/activities2022">2022</Link>
                  <span className="nav-link-line"></span>
                </li>
                <li
                  className="nav-links-years"
                  style={{ display: isActivitiesVisible ? "block" : "none" }}
                >
                  <Link to="/activities2023">2023</Link>
                  <span className="nav-link-line"></span>
                </li>
                <li
                  className="nav-links-years"
                  style={{ display: isActivitiesVisible ? "block" : "none" }}
                >
                  <Link to="/activities2024">2024</Link>
                </li>
              </div>
            </ul>
            <li>
              <Link to="/organigram">Organigrama</Link>
            </li>
            <li>
              <Link to="/documents">Documentos ONG</Link>
            </li>
          </ul>

          <ToolsNav />

          <div className="nav-contact">
            <ul className="nav-socialMedia">
              <li>
                <a
                  href="https://web.facebook.com/multi.diversos.92?_rdc=1&_rdr"
                  target="_blank"
                >
                  <Facebook fill="#3e404c" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/organizacionmultidiversos/"
                  target="_blank"
                >
                  <Instagram stroke="#3e404c" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+56930598765" target="_blank">
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
