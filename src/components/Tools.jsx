import { useState, useRef, useEffect } from "react";

import PlusIcon from "./svg/PlusIcon";
import MinusIcon from "./svg/MinusIcon";
import AccessibleIcon from "./svg/AccessibleIcon";
import ContrastIcon from "./svg/Contrast";

import "../styles/components_style/Tools.css";

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
  
  const [isAccessibility, setIsAccessibility] = useState(false);
  const containerRef = useRef(null);

  const handleCloseAccessibility = () => {
    setIsAccessibility(true);
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsAccessibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div ref={containerRef}>
        <div className="tools-container" aria-hidden>
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
            <button className="tools-plus-button" onClick={increaseFontSize}>
              A <PlusIcon />
            </button>
            <button className="tools-minus-button" onClick={decreaseFontSize}>
              A <MinusIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
