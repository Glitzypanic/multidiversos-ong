import CardDocument from "../components/CardDocument";

import "../styles/pages_style/DocumentsPage.css";

export default function DocumentsPage() {
  return (
    <>
      <div className="banner"></div>
      <div className="document-container">
        <h5 className="document-container-tag">DOCUMENTOS</h5>
        <h1 className="document-container-title">Documentos</h1>
        <p className="document-container-description">
          Aquí puedes encontrar material para ver y descargar.
        </p>
        <div className="document-card-container">
          <CardDocument />
          <CardDocument />
          <CardDocument />
          <CardDocument />
          <CardDocument />
          <CardDocument />
        </div>
      </div>
    </>
  );
}
