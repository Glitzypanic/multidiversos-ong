import "../styles/pages_style/Page404.css";
import ErrorImg from "../assets/404.svg";

import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <article>
      <div className="error-message">
        <img
          src={ErrorImg}
          alt="ilustracion de error de link"
          className="error-img"
        />
      </div>
      <Link to="/">
        <button> Volver al Inicio </button>
      </Link>
    </article>
  );
}
