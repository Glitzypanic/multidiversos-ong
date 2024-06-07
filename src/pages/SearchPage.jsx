import { useEffect } from "react";

// Componente de la página de búsqueda
export default function SearchPage({ routeParams }) {
  // Efecto para cambiar el título de la página
  useEffect(() => {
    document.title = `Has Buscado ${routeParams.query}`;

    fetch(`https://api.ajdsskadkasd.com/search/${routeParams.query}`);
  });

  return (
    <div>
      <h1>Has Buscado {routeParams.query}</h1>
    </div>
  );
}
