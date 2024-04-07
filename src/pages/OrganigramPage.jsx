import Footer from "../components/Footer";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import OrganigramImg from "../assets/organigrama.png";
// import Organigrama1 from "../assets/organigrama/2.png"
// import Organigrama2 from "../assets/organigrama/3.png"
// import Organigrama3 from "../assets/organigrama/4.png"
import DiversidadImg from "../assets/diversidad.webp";
import ComunityImg from "../assets/Community.svg";
import SocialMediaImg from "../assets/social-media.svg";
import ProjectsImg from "../assets/project.svg";
import "../styles/Organigrama.css";

export default function OrganigramPage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div className="banner-principal">
        <img src={DiversidadImg} alt="Banner Multidiversos" />
      </div>
      <section className="organigrama-container">
        <h1 className="organigrama-title">Organigrama</h1>
        <img
          className="organigrama-img"
          src={OrganigramImg}
          alt="Imagen de un esquema"
        />
        {/* <img
          className="organigrama-img"
          src={Organigrama2}
          alt="Imagen de un esquema"
        />
        <img
          className="organigrama-img"
          src={Organigrama3}
          alt="Imagen de un esquema"
        /> */}
        <h2 className="organigrama-subTitle">Áreas de Trabajo</h2>
        <article className="organigrama-areas">
          <div className="grid grid-1">
            <h4 className="grid-title">Integracion con la comunidad </h4>
            <img src={ComunityImg} alt="" />
            <p>
              Esta área se encarga de realizar actividades presenciales,
              hibridas y online que logren vincularnos con la comunidad con la
              finalidad de entregar informaciones, generar una conciencia en
              relación a la inclusión y facilitar espacios para personas con
              diversidad funcional.{" "}
            </p>
          </div>
          <div className="grid grid-2">
            <h4 className="grid-title">Redes Sociales</h4>
            <img src={SocialMediaImg} alt="" />
            <p>
              Esta área se encarga de realizar contenido audiovisual con la
              finalidad de entregar informaciones, generar una conciencia en
              relación a la inclusión y facilitar espacios para personas con
              diversidad funcional. Además de encargarse de las redes sociales.
            </p>
          </div>
          <div className="grid grid-3">
            <h4 className="grid-title">Proyectos</h4>
            <img src={ProjectsImg} alt="" />
            <p>Esta área se encarga de realizar proyectos.</p>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
