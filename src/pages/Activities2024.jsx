import WatchIcon from "../components/svg/WatchIcon";

import "../styles/pages_style/Activities.css";
export default function ActivitiesPage() {
  return (
    <>
      <div className="banner"></div>

      <section className="activities-container">
        <h5 className="activities-tag">ACTIVIDADES</h5>
        <h1 className="activities-title">Actividades 2024</h1>

        <div className="activities-content">
          <div className="activities-card">
            <h2 className="activities-card-title">
              Taller de uso del lenguaje hacia personas con diversidad funcional
              con estudiantes y profesores/as del Colegio Ruben Castro de
              Valparaíso
            </h2>
            <h3 className="activities-card-subTitle">
              Colegio Ruben Castro de Valparaíso
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 9 de Agosto 2024
            </span>
            <p className="activities-card-info">
              El día 09 de agosto del 2024 se lleva a cabo un taller online
              sobre el uso del lenguaje hacia personas con diversidad funcional.
              La instancia consta con la participación de estudiantes,
              profesores y la directora del colegio Ruben Castro de Valparaíso,
              Karina Santibañez. Agradecemos el interés y la participación.
            </p>
            <div className="activities-card-carousel">
              <img
                style={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "10px",
                }}
                src="img/carousel/2024-1--1.jpeg"
                alt="Reunión online con estudiantes y profesores/as del Colegio Ruben Castro de Valparaíso"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
