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
              <Carousel data={CarouselData.carousel3} />
              <span data={CarouselData.carousel3.description}></span>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Taller Uso del Lenguaje hacia personas con Diversidad Funcional
            </h2>
            <h3 className="activities-card-subTitle">
              Escuela de Trabajo Social de la Universidad de Valparaíso
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
              <Carousel data={CarouselData.carousel4} />
              <span data={CarouselData.carousel4.description}></span>
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
              <Carousel data={CarouselData.carousel5} />
              <span data={CarouselData.carousel5.description}></span>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Actividades:</h2>
            <h3 className="activities-card-subTitle">
              Participación en Feria de Organizaciones realizada por la Escuela
              de Trabajo Social de la Universidad de Valparaíso
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 10 de Noviembre 2022
            </span>
            <p className="activities-card-info">
              El día 10 de noviembre del 2022 se llevó a cabo una feria de
              organizaciones en la Escuela de Trabajo Social de la Universidad
              de Valparaíso.
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel6} />
              <span data={CarouselData.carousel6.description}></span>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Actividades:</h2>
            <h3 className="activities-card-subTitle">
              Feria Social organizada por estudiantes de Trabajo Social de la
              Universidad de Valparaíso
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 30 de Noviembre 2022
            </span>
            <p className="activities-card-info">
              El día miércoles 30 de noviembre estuvimos en una feria organizada
              por estudiantes de Trabajo Social de la Universidad de Valparaíso
            </p>

            <div className="activities-card-carousel">
              <img
                style={{
                  height: "500px",
                  borderRadius: "10px",
                }}
                src="img/carousel/2022-5--1.webp"
                alt="Feria Social organizada por estudiantes de Trabajo Social de la Universidad de Valparaíso"
              />
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Actividades dia 2 de Diciembre:
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
              <img
                style={{
                  height: "500px",
                  borderRadius: "10px",
                }}
                src="img/carousel/2022-6--1.webp"
                alt="Conmemoración del día Internacional de la Inclusión"
              />
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Actividades dia 16 de Diciembre:
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
              <img
                style={{
                  height: "500px",
                  borderRadius: "10px",
                }}
                src="img/carousel/2022-7--1.webp"
                alt="Programa Participación e incidencia política"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
