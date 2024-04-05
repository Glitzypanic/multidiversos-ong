import { Link } from "../components/Link.jsx"

import Logo from "../assets/logo.webp"
import MenuIcon from "./svg/MenuIcon.jsx"
import NavMenu from "./NavMenu.jsx"
import "../styles/Header.css"

function Header() {
    return  (
        <header>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Logo Multidiversos" />
                <h3>ONG MULTIDIVERSOS</h3>
            </Link>
            <NavMenu hidden/>
            {/* <ul>
                <li>
                    <a href="/">Quienes somos</a>
                </li>
                <li>
                    <a href="/mision">Misión y Vision</a>
                </li>
                <li>
                    <a href="/acerca">Acerca de Diversidad Funcional</a>
                </li>
                <li>
                    <a href="/actividades">Actividades 2020 - 2023</a>
                </li>
                <li>
                    <a href="/organigrama">Organigrama</a>
                </li>
                <li>
                    <a href="/contacto">Contacto</a>
                </li>
                <li>
                    <a href="/documento">Documento ONG</a>
                </li>
            </ul> */}
            <MenuIcon stroke="#3e404c" className="menu-icon"/>
        </header>
    )
}

export default Header