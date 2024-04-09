import { Carousel } from "../components/Carousel";
import BannerImg from "../assets/banner.webp";
import carouselData from "../data/carouselData.json";
import teamData from "../data/teamData.json";
import TeamCard from "../components/TeamCard";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import MisionIcon from "../assets/mision.svg";
import VisionIcon from "../assets/vision.svg";
import ObjetivoIcon from "../assets/objetivogeneral.svg";
import Mision from "../components/Mision";

export default function HomePage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div className="banner">
        <img src={BannerImg} alt="Banner de Multidiversos" />
      </div>

      <section className="home-container">
        <section className="focus-container">
          <h5 className="focus-tag">INICIO</h5>
          <section className="about">
          <h1 className="about-title">Multidiversos: Forjando un Mundo Más Inclusivo desde 2020</h1>
          <p className="about-description">
            Somos una ONG llamada Multidiversos, conformada por estudiantes y
            profesionales de diversas áreas, tales como Trabajo Social,
            Psicología, Administración, Fonoaudiología, Gestión en Turismo y
            Cultura, Terapia Ocupacional, entre otras.
          </p>
          <p className="about-description">
            Desde mayo del año 2020, hemos estado llevando a cabo diversas
            actividades con el objetivo de promover una conciencia colectiva y
            facilitar información sobre la diversidad funcional, así como crear
            espacios inclusivos para personas con diversidad funcional en las
            comunas de Valparaíso y Viña del Mar. Estas actividades incluyen la
            realización de ferias, charlas y talleres dirigidos a equipos de
            salud y educación.
          </p>
          <p className="about-description">
            Además, hemos colaborado con estudiantes en prácticas de trabajo
            social y psicología de varias universidades, así como participado en
            conversatorios y talleres relacionados con la inclusión social.
            También hemos brindado apoyo a estudiantes con proyectos de
            capacitación interna.
          </p>
          <div className="carousel-container">
            <Carousel data={carouselData.carousel3} />
            <span data={carouselData.carousel3.description}></span>
          </div>
        </section>
          <h1 className="focus-title">Mision y vision</h1>
          <Mision
            className="focus-mision"
            src={MisionIcon}
            title="Mision"
            description="Nuestra misión es generar cambios en la sociedad a través de un trabajo interdisciplinario, promoviendo un cambio de lenguaje, fomentando una sociedad inclusiva basada en los Derechos Humanos, disminuyendo barreras, visibilizando situaciones que viven a diario las personas con diversidad funcional, a través de la educación y concientización de la sociedad. "
          />
          <Mision
            className="focus-mision"
            src={VisionIcon}
            title="Vision"
            description="Nuestra visión es lograr una transformación social respecto a la mirada que se posee sobre la diversidad funcional, que permita una sociedad inclusiva, no discriminatoria y que acepte la diversidad.  Esperamos que a través de nuestro trabajo se hagan valer los derechos de todas las personas con diversidad funcional. "
          />
          <Mision
            className="focus-mision"
            src={ObjetivoIcon}
            title="Objetivo General"
            description="Nuestro objetivo principal es fomentar una sociedad inclusiva basada en los derechos humanos de las personas, disminuyendo las barreras, cambiando el lenguaje y visibilizando situaciones en torno a la diversidad funcional."
          />
        </section>

        
        
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
        <div className="form">
          <h2>Quieres ser parte de nuestro equipo?</h2>
          <p>Rellena este formulario!</p>
          <button>Presiona aqui!</button>
        </div>
      </section>
      <Footer />
    </>
  );
}
