import DownloadIcon from "./svg/Download";
import ExternalLink from "./svg/ExternalLink";
import DocumentImg from "../../public/img/documentsImg/pdf-multidiversos.png";
import "../styles/components_style/CardDocument.css";

function CardDocument() {
  return (
    <>
        <div className="card-document">
          <img
            className="card-document-img"
            src={DocumentImg}
            alt="Portadad del pdf llamado La inclusion la haces tú"
          />
          <div className="card-document-info">
            <h5 className="card-document-tag">PDF</h5>
            <h2 className="card-document-title">Memoria Conversatorio Departamento de Turismo: La inclusión la haces tú </h2>
            <p className="card-document-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              officiis eveniet, asperiores deserunt harum magni nobis, fugit
              reiciendis libero ipsam autem blanditiis perspiciatis. Iusto optio
              porro tempore inventore! Porro, dolore.
            </p>
            <div className="card-document-buttons">
              <button className="card-document-button" aria-label="Descargar">
                <a href="#" className="card-document-link">
                  Descargar <DownloadIcon />
                </a>
              </button>
              <button className="card-document-button" aria-label="ver en linea">
                <a href="#" className="card-document-link">
                  Ver <ExternalLink />
                </a>
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default CardDocument;
