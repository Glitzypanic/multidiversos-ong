import { useState, useEffect } from "react";
import PlusIcon from "./svg/PlusIcon";
import MinusIcon from "./svg/MinusIcon";
import ContrastIcon from "./svg/Contrast";

import "../styles/components_style/ToolsNav.css";

function Tools() {
  const [isGrayscale, setIsGrayscale] = useState(false);

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
    if (isGrayscale) {
      document.querySelector(".main-content").classList.add("grayscale");
    } else {
      document.querySelector(".main-content").classList.remove("grayscale");
    }
  };

  const [fontSize, setFontSize] = useState(
    parseInt(getComputedStyle(document.querySelector("body")).fontSize)
  );
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5");
    elements.forEach((elements) => {
      elements.style.fontSize = `${fontSize}px`;
    });
  }, [fontSize]);

  const increaseFontSize = () => {
    if (clicks < 4) {
      setFontSize((prevFontSize) => prevFontSize + 1);
      setClicks((prevClicks) => prevClicks + 1);
    }
  };

  const decreaseFontSize = () => {
    if (clicks > -4) {
      setFontSize((prevFontSize) => (prevFontSize > 1 ? prevFontSize - 1 : 1));
      setClicks((prevClicks) => prevClicks - 1);
    }
  };

  return (
    <>
      <div className="toolsNav-container" aria-hidden>
        <div className="toolsNav-fontsize">
          <button className="toolsNav-plus-button" onClick={increaseFontSize}>
            A <PlusIcon />
          </button>
          <button className="toolsNav-minus-button" onClick={decreaseFontSize}>
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
