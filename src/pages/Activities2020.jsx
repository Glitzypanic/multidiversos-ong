import BannerImg from "../assets/banner.webp";
import CarouselData from "../data/carouselData.json";
import Carousel from "../components/Carousel";
import WatchIcon from "../components/svg/WatchIcon";

import "../styles/pages_style/Activities.css";
export default function ActivitiesPage() {
  return (
    <>
      <div className="banner">
        <img src={BannerImg} alt="Banner de Multidiversos" />
      </div>

      <section className="activities-container">
        <h5 className="activities-tag">ACTIVIDADES</h5>
        <h1 className="activities-title">Actividades 2020</h1>

        <div className="activities-content">
          <div className="activities-card">
            <h2 className="activities-card-title">Primer conversatorio:</h2>
            <h3 className="activities-card-subTitle">
              Hablemos de Diversidad Funcional.
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 4 de Septiembre 2020
            </span>
            <p className="activities-card-info">
              El día 4 de Septiembre del 2020, realizamos nuestro primer
              conversatorio denominado Hablemos de Diversidad Funcional.
            </p>
            <p className="activities-card-info">
              La instancia fue realizada vía Zoom y tuvo como expositoras a
              integrantes de Multidiversos, quienes se encargaron de exponer el
              nacimiento de la organización, la historia de los modelos que han
              contemplado la diversidad funcional y el modelo que postula la
              nueva terminología. Además, se llevo a cabo una instancia de
              preguntas en las cuales participaron muchas personas que
              asistieron.
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel2020} />
              <span data={CarouselData.carousel2020.description}></span>
            </div>
            <iframe
              className="activities-card-video"
              src="https://www.youtube-nocookie.com/embed/VIDEO_ID?autoplay=1&enablejsapi=1&origin=Cnvtc8aRAQA?si=TBh31yXIqhuDbl33"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="no-referrer "
              allowFullScreen
            ></iframe>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Segundo Conversatorio:</h2>
            <h3 className="activities-card-subTitle">
              Por un proceso constituyente más inclusivo.
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 27 de Noviembre 2020
            </span>
            <p className="activities-card-info">
              El día 27 de Noviembre del 2020, realizamos nuestro segundo
              conversatorio denominado Por un proceso constituyente más
              inclusivo.
            </p>
            <p className="activities-card-info">
              La instancia fue realizada vía Zoom y tuvo como expositoras a
              integrantes de Multidiversos, quienes se encargaron de exponer
              sobre la organización, la constitución, el proceso constituyente,
              sus fechas relevantes y sus requisitos. Además, se llevo a cabo
              una instancia de micrófono abierto en las cuales participaron
              muchas personas que asistieron.
            </p>

            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel2020_1} />
              <span data={CarouselData.carousel2020_1.description}></span>
            </div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/VIDEO_ID?autoplay=1&enablejsapi=1&origin=embed/L0zNxFcwpIM?si=E4E6wNycoQpumHTq"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
