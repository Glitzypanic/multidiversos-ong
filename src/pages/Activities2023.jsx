import WatchIcon from "../components/svg/WatchIcon";

import "../styles/pages_style/Activities.css";
export default function ActivitiesPage() {
  return (
    <>
      <div className="banner"></div>

      <section className="activities-container">
        <h5 className="activities-tag">ACTIVIDADES</h5>
        <h1 className="activities-title">Actividades 2023</h1>

        <div className="activities-content">
          <div className="activities-card">
            <h2 className="activities-card-title">Actividad dia 5 de Enero</h2>
            <h3 className="activities-card-subTitle">
              Entrega de regalos recolectados para familias afectadas por el
              incendio en Viña del Mar
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 5 de Enero 2023
            </span>
            <p className="activities-card-info">
              El día 5 de Enero del 2023 entregamos todas las donaciones
              recibidas para las familias afectadas por el incendio de Viña del
              Mar, muchas gracias por su cooperación.
            </p>
            <div className="activities-card-carousel">
              <img
                style={{
                  height: "500px",
                  borderRadius: "10px",
                }}
                src="img/carousel/2023-1--1.webp"
                alt="Entrega de regalos recolectados para las familias afectadas por incendio en Viña del Mar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
