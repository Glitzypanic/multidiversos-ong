import CarouselData from "../data/carouselData.json";
import Carousel from "../components/Carousel";
import WatchIcon from "../components/svg/WatchIcon";

import "../styles/pages_style/Activities.css";
export default function ActivitiesPage() {
  return (
    <>
      <div className="banner"></div>

      <section className="activities-container">
        <h5 className="activities-tag">ACTIVIDADES</h5>
        <h1 className="activities-title">Actividades 2022</h1>

        <div className="activities-content">
          <div className="activities-card">
            <h2 className="activities-card-title">
              Taller Uso del Lenguaje hacia personas con Diversidad Funcional:
            </h2>
            <h3 className="activities-card-subTitle">
              Universidad de Viña del Mar
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 27 de Abril 2022
            </span>
            <p className="activities-card-info">
              El día miércoles 27 de abril se llevó a cabo el taller de uso del
              lenguaje hacia personas con diversidad funcional en la Universidad
              de Viña del Mar (UVM), instancia impartida por integrantes de la
              ONG Multidiversos.
            </p>
            <p className="activities-card-info">
              Agradecemos la oportunidad y la participación de la comunidad
              estudiantil.
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel2} />
              <span data={CarouselData.carousel2.description}></span>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Taller Uso del Lenguaje hacia personas con Diversidad Funcional
            </h2>
            <h3 className="activities-card-subTitle">
              Escuela de Trabajo Social de la Universidad de Valparaiso
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 11 de Mayo 2022
            </span>
            <p className="activities-card-info">
              El día miércoles 11 de mayo se llevó a cabo el taller de uso del
              lenguaje hacia personas con diversidad funcional en la Escuela de
              Trabajo Social de la Universidad de Valparaíso, instancia
              impartida por integrantes de la ONG Multidiversos.
            </p>
            <p className="activities-card-info">
              Agradecemos la oportunidad y la participación de la comunidad
              estudiantil.
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel1} />
              <span data={CarouselData.carousel1.description}></span>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Presentacion ONG:</h2>
            <h3 className="activities-card-subTitle">
              Cátedra de autorregulación de primer año de la carrera Gestión en
              Turismo y Cultura de la Universidad de Valparaíso
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 19 de Mayo 2022
            </span>
            <p className="activities-card-info">
              El día jueves 19 de mayo se llevó a cabo la presentación de la ONG
              en una cátedra de Autorregulación de primer año de la carrera
              Gestión en Turismo y Cultura de la Universidad de Valparaíso,
              instancia impartida por integrantes de la ONG Multidiversos.
            </p>
            <p className="activities-card-info">
              Agradecemos la oportunidad y la participación de la comunidad
              estudiantil.
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel1} />
              <span data={CarouselData.carousel1.description}></span>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Activiades:</h2>
            <h3 className="activities-card-subTitle">
              Feria Social organizasa por estudiantes de Trabajo Social de la
              Universidad de Valparaiso
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 30 de Noviembre 2022
            </span>
            <p className="activities-card-info">
              El día miércoles 30 de noviembre estuvimos en una feria organizada
              por estudiantes de Trabajo Social de la Universidad de Valparaíso
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel1} />
              <span data={CarouselData.carousel1.description}></span>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Activiades dia 2 de Diciembre:
            </h2>
            <h3 className="activities-card-subTitle">
              Conmemoración del dia internacional de la Inclusion
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 2 de Diciembre 2022
            </span>
            <p className="activities-card-info">
              El día Viernes 2 de diciembre de 2022, se llevó a cabo la feria
              organizada por la ocadis de la municipalidad de Viña del Mar donde
              estuvimos presentes.
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel1} />
              <span data={CarouselData.carousel1.description}></span>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Activiades dia 16 de Diciembre:
            </h2>
            <h3 className="activities-card-subTitle">
              Programa Participacion e incidencia política
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 16 de Diciembre 2022
            </span>
            <p className="activities-card-info">
              El día 16 de Diciembre del 2022 se realizó la primera sesión del
              programa Participación e Incidencia Política donde estuvimos
              participando.
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel1} />
              <span data={CarouselData.carousel1.description}></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
