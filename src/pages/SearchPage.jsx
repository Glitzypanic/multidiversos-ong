import { useEffect } from "react";

export default function SearchPage({ routeParams }) {
    useEffect(() => {
        document.title = `Has Buscado ${routeParams.query}`;
        
        fetch(`https://api.ajdsskadkasd.com/search/${routeParams.query}`)
    });

  return (
    <div>
      <h1>Has Buscado {routeParams.query}</h1>
    </div>
  );
}