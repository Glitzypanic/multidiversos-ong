import Logo from "../assets/logo.webp"
import MenuIcon from "./svg/MenuIcon.jsx"
import "../styles/Header.css"

function Header() {
    return  (
        <header>
            <div className='logo'>
                <img src={Logo} alt="Logo Multidiversos" />
                <h3>ONG MULTIDIVERSOS</h3>
            </div>
            <ul>
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
            </ul>
            <img className="menu-icon" src={MenuIcon} alt="icono del menu" />
        </header>
    )
}

export default Header