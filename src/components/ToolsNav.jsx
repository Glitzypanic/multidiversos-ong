import { useState } from "react";
import PlusIcon from "./svg/PlusIcon";
import MinusIcon from "./svg/MinusIcon";
import ContrastIcon from "./svg/Contrast";

import "../styles/components_style/ToolsNav.css";

function Tools() {
  // Estado para rastrear si el modo de alto contraste está activado o no
  const [isGrayscale, setIsGrayscale] = useState(false);

  // Función para activar o desactivar el modo de alto contraste
  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
    if (!isGrayscale) {
      document.querySelector(".main-content").classList.add("grayscale");
    } else {
      document.querySelector(".main-content").classList.remove("grayscale");
    }
  };

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

  // Funcion para disminuir el tamaño de la fuente
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
      <div className="toolsNav-container" aria-hidden>
        <div className="toolsNav-fontsize">
          <button className="toolsNav-plus-button" onClick={handleIncreaseFont}>
            A <PlusIcon />
          </button>
          <button
            className="toolsNav-minus-button"
            onClick={handleDecreaseFont}
          >
            A <MinusIcon />
          </button>
        </div>
        <button className="toolsNav-contrast-button" onClick={toggleGrayscale}>
          <ContrastIcon size="35" stroke="var(--clr-neutral-100)" />
        </button>
      </div>
    </>
  );
}

export default Tools;
