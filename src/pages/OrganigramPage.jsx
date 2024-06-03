import OrganigramImg from "../assets/Organigrama.webp";
import ComunityImg from "../assets/Community.svg";
import SocialMediaImg from "../assets/social-media.svg";
import ProjectsImg from "../assets/project.svg";
import "../styles/pages_style/Organigrama.css";

export default function OrganigramPage() {
  return (
    <>
      <div className="banner-principal"></div>
      <section className="organigrama-container">
        <h5 className="organigrama-tag">TRABAJO</h5>
        <h1 className="organigrama-title">Organigrama</h1>
        <img
          className="organigrama-img"
          src={OrganigramImg}
          alt="Imagen de un esquema"
        />
        <h2 className="organigrama-subTitle">Áreas de Trabajo</h2>
        <article className="organigrama-areas">
          <div className="grid grid-1">
            <h4 className="grid-title">Integración con la comunidad </h4>
            <img src={ComunityImg} alt="" />
            <p>
              Esta área se encarga de realizar actividades presenciales,
              hibridas y online que logren vincularnos con la comunidad con la
              finalidad de entregar información, generar una conciencia en
              relación a la inclusión y facilitar espacios para personas con
              diversidad funcional.{" "}
            </p>
          </div>
          <div className="grid grid-2">
            <h4 className="grid-title">Redes Sociales</h4>
            <img src={SocialMediaImg} alt="" />
            <p>
              Esta área se encarga de realizar contenido audiovisual con la
              finalidad de entregar información, generar una conciencia en
              relación a la inclusión y facilitar espacios para personas con
              diversidad funcional. Además de encargarse de las redes sociales.
            </p>
          </div>
          <div className="grid grid-3">
            <h4 className="grid-title">Proyectos</h4>
            <img src={ProjectsImg} alt="" />
            <p>Esta área se encarga de realizar los futuros proyectos.</p>
          </div>
        </article>
      </section>
    </>
  );
}
