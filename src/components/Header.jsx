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
            <MenuIcon stroke="#3e404c" className="menu-icon"/>
            <NavMenu/>
        </header>
    )
}

export default Header