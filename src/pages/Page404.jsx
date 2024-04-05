import "../styles/Page404.css"

import { Link } from "../components/Link.jsx";

export default function Page404() {
  return (
    <article>
      <div className="error-message">
        <h1>404</h1>
        <p>Pagina no encontrada :(</p>
      </div>
      <Link to="/" className="error-link">Volver al Inicio</Link>
    </article>
  );
}
