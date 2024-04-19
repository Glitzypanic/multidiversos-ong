import { useState, useRef, useEffect } from "react";

import PlusIcon from "./svg/PlusIcon";
import MinusIcon from "./svg/MinusIcon";
import AccessibleIcon from "./svg/AccessibleIcon";
import ContrastIcon from "./svg/Contrast";

import "../styles/components_style/Tools.css";

function Tools() {
  // Funcion para el contraste
  const [isGrayscale, setIsGrayscale] = useState(false);

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
    if (!isGrayscale) {
      document.querySelector(".main-content").classList.add("grayscale");
    } else {
      document.querySelector(".main-content").classList.remove("grayscale");
    }
  };

  // Funcion para la accesibilidad
  const [isAccessibility, setIsAccessibility] = useState(false);
  const containerRef = useRef(null);

  const handleCloseAccessibility = () => {
    setIsAccessibility(true);
  };

  // Funcion para cerrar el menu de accesibilidad haciendo click fuera del contenedor
  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsAccessibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Estado para rastrear cuánto se ha incrementado o disminuido el tamaño de la fuente
  const [fontChange, setFontChange] = useState(0);

  // Funcion para aumentar el tamaño de la fuente
  const handleIncreaseFont = () => {
    if (fontChange < 5) {
      const html = document.querySelector("html");
      const computedStyle = window.getComputedStyle(html);
      const fontSize = parseFloat(computedStyle.fontSize);
      html.style.fontSize = `${fontSize + 1}px`;
      setFontChange(fontChange + 1);
    }
  };

  const handleDecreaseFont = () => {
    if (fontChange > 0) {
      const html = document.querySelector("html");
      const computedStyle = window.getComputedStyle(html);
      const fontSize = parseFloat(computedStyle.fontSize);
      html.style.fontSize = `${fontSize - 1}px`;
      setFontChange(fontChange - 1);
    }
  };

  return (
    <>
      <div ref={containerRef}>
        <div className="tools-container" aria-label="boton para controles de accesibilidad">
          <button
            className="tools-menu-open"
            onClick={handleCloseAccessibility}
            style={{ display: isAccessibility ? "none" : "flex" }}
          >
            <AccessibleIcon size="45" stroke="var(--clr-accent-500)" />
          </button>
          <div
            className="tools-fonts-buttons"
            style={{ display: isAccessibility ? "flex" : "none" }}
          >
            <button className="tools-contrast-button" onClick={toggleGrayscale}>
              <ContrastIcon size="35" stroke="var(--clr-neutral-100)" />
            </button>
            <button className="tools-plus-button" onClick={handleIncreaseFont}>
              A <PlusIcon />
            </button>
            <button className="tools-minus-button" onClick={handleDecreaseFont}>
              A <MinusIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
