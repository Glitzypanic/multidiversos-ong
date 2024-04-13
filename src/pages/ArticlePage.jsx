import Header from "../components/Header";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import DownloadIcon from "../components/svg/Download";
import javierImg from "../../public/img/personas/javier.webp";
import agustinaImg from "../../public/img/personas/agustina.webp";
import DiversidadImg from "../assets/diversidad.webp";

import "../styles/pages_style/ArticlePage.css";

function Diversidad() {
  return (
    <>
      <Header />
      <NavMenu />
      <div className="banner-article">
        <img src={DiversidadImg} alt="Banner" />
      </div>
      <article className="diversidad-container">
        <h5 className="diversidad-subTitle">ARTICULO</h5>
        <h1 className="diversidad-title">Diversidad funcional</h1>

        <div className="diversidad-info">
          <p>
            El cambio de lenguaje se basa en el modelo de la diversidad
            postulado por Javier Romañach y Agustina Palacios el año 2006, el
            cual propone tres cambios fundamentales.
          </p>

          <p>
            Uno de esos cambios es propugnar un cambio de terminología de
            discapacidad, persona con discapacidad o situación de discapacidad a
            diversidad funcional y persona con diversidad funcional.
          </p>

          <p>
            Este término se ajusta a una realidad en la que la persona funciona
            de manera diferente o diversa de la mayoría de la sociedad.
            Considera la diferencia de la persona y la falta de respeto de las
            mayorías, que en sus procesos constructivos no tienen en cuenta esa
            diversidad funcional (Romañach, J).
          </p>

          <p>
            Por ejemplo, una persona sorda se comunica con la lengua de señas y
            otra que no lo es, se comunica a través del habla. En ambos casos la
            función es la misma pero se realiza de manera diferente
          </p>
        </div>

        <button className="diversidad-info-button">
          Modelo de la Diversidad <DownloadIcon />
        </button>

        <div className="diversidad-info-personas">
          <img src={javierImg} alt="Foto de Javier Romañach" />
          <img src={agustinaImg} alt="Foto de Agustina Palacios" />
        </div>

      </article>
      <Footer />
    </>
  );
}

export default Diversidad;
