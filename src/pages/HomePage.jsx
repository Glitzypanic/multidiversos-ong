import { Carousel } from "../components/Carousel";
import BannerImg from "../assets/banner.webp";
import carouselData from "../data/carouselData.json";
import teamData from "../data/teamData.json";
import TeamCard from "../components/TeamCard";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div className="banner">
        <img src={BannerImg} alt="Banner de Multidiversos" />
      </div>

      <section className="about">
        <h1>¿Quiénes somos?</h1>

        <div className="carousel-container">
          <Carousel data={carouselData.carousel1} />
          <span data={carouselData.carousel1.description}></span>
        </div>

        <p>
          Somos una ONG llamada Multidiversos. Estamos conformados por
          estudiantes y profesionales de diversas áreas, tales como Trabajo
          Social, Psicología, Administración, Fonoaudiología, Gestión en Turismo
          y Cultura, Terapia Ocupacional, entre otras.
        </p>

        <div className="carousel-container">
          <Carousel data={carouselData.carousel2} />
        </div>

        <p>
          Desde mayo del año 2020 estamos realizando actividades con el fin de
          generar una conciencia colectiva, facilitar información, generar
          espacios para personas con diversidad funcional, dar orientaciones y
          difundir información relevante a la diversidad funcional y la
          inclusión social.
        </p>

        <div className="carousel-container">
          <Carousel data={carouselData.carousel3} />
          <span></span>
        </div>

        <p>
          Hemos realizado y participado en ferias en las comunas de Valparaíso y
          Viña del Mar
        </p>

        <div className="carousel-container">
          <Carousel data={carouselData.carousel4} />
        </div>

        <p>
          Hemos recibido estudiantes en práctica de trabajo social y psicología
          de diferentes universidades
        </p>

        <div className="carousel-container">
          <Carousel data={carouselData.carousel5} />
        </div>

        <p>
          Hemos recibido estudiantes en práctica de trabajo social y psicología
          de diferentes universidades
        </p>

        <div className="carousel-container">
          <Carousel data={carouselData.carousel6} />
        </div>

        <p>
          Hemos recibido estudiantes en práctica de trabajo social y psicología
          de diferentes universidades
        </p>

        <div className="carousel-container">
          <Carousel data={carouselData.carousel7} />
        </div>

        <p>
          Hemos recibido estudiantes en práctica de trabajo social y psicología
          de diferentes universidades
        </p>
      </section>
      <div className="form">
        <h2>Quieres ser parte de nuestro equipo?</h2>
        <p>Rellena este formulario!</p>
        <button>Presiona aqui!</button>
      </div>
      <section className="teamwork-container">
        <div className="title">
          <h2>Les presentamos parte del equipo...</h2>
          <h4>Junta Directiva:</h4>
        </div>
        <TeamCard data={teamData.team} />
      </section>
      <section className="teamwork-container">
        <div className="title">
          <h4>Comisión de ética:</h4>
        </div>
        <TeamCard data={teamData.teamEtica} />
      </section>
      <section className="teamwork-container">
        <div className="title">
          <h4>Comisión Revisora de Cuentas:</h4>
        </div>
        <TeamCard data={teamData.teamCuentas} />
      </section>
      <Footer />
    </>
  );
}
