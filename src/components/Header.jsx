import { useEffect, useRef } from "react";
import { Link } from "../components/Link.jsx";
import Logo from "../assets/logo.webp";
import NavMenu from "./NavMenu.jsx";
import MenuIcon from "./svg/MenuIcon.jsx";
import "../styles/Header.css";

function Header() {

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
    <>
      <header ref={headerRef}>
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Multidiversos" />
          <h3>ONG MULTIDIVERSOS</h3>
        </Link>
        <MenuIcon stroke="#3e404c"/>
      </header>
      <NavMenu />
    </>
  );
}

export default Header;
