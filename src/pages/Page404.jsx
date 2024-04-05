import { Link } from "../components/Link.jsx";

export default function Page404() {
  return (
    <>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
      <Link to="/">Volver al Inicio</Link>
    </>
  );
}
