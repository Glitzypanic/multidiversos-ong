import { useContext } from "react";
import { MenuContext } from "../utils/MenuContext.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import NavMenu from "./NavMenu.jsx";
import MenuIcon from "./svg/MenuIcon.jsx";
import "../styles/components_style/Header.css";

function Header() {

  const { setIsMenuOpen } = useContext(MenuContext);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  }
  
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="header-container">
      <header ref={headerRef}>
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Multidiversos" />
          <h3>ONG MULTIDIVERSOS</h3>
        </Link>
        <MenuIcon 
          stroke="var(--clr-neutral-900)" className="menu-open icon"
          onClick={handleMenuOpen}  
        />
      </header>
      <NavMenu />
    </div>
  );
}

export default Header;
