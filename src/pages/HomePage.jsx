import teamData from "../data/teamData.json";
import carouselData from "../data/carouselData.json";

import EmailIcon from "../assets/email.svg";
import JoinUsIcon from "../assets/joinus.svg";
import MisionIcon from "../assets/mision.svg";
import VisionIcon from "../assets/vision.svg";
import ObjetivoIcon from "../assets/objetivogeneral.svg";

import Mision from "../components/Mision";
import Carousel from "../components/Carousel";
import TeamCard from "../components/TeamCard";
import WhatsappIcon from "../components/svg/Whatsapp";
import ExternalLInkIcon from "../components/svg/ExternalLink";

export default function HomePage() {
  return (
    <>
      <div className="banner"></div>

      <section className="home-container">
        <section className="focus-container">
          <h4 className="focus-tag">INICIO</h4>
          <section className="about">
            <h1 className="about-title">
              Multidiversos: Forjando un Mundo Más Inclusivo desde 2020
            </h1>
            <p className="about-description">
              Somos una ONG llamada Multidiversos, conformada por estudiantes y
              profesionales de diversas áreas, tales como Trabajo Social,
              Psicología, Administración, Fonoaudiología, Gestión en Turismo y
              Cultura, Terapia Ocupacional, entre otras.
            </p>
            <p className="about-description">
              Desde mayo del año 2020, hemos estado llevando a cabo diversas
              actividades con el objetivo de promover una conciencia colectiva y
              facilitar información sobre la diversidad funcional, así como
              crear espacios inclusivos para personas con diversidad funcional
              en las comunas de Valparaíso y Viña del Mar. Estas actividades
              incluyen la realización de ferias, charlas y talleres dirigidos a
              equipos de salud y educación.
            </p>
            <p className="about-description">
              Además, hemos colaborado con estudiantes en prácticas de trabajo
              social y psicología de varias universidades, así como participado
              en conversatorios y talleres relacionados con la inclusión social.
              También hemos brindado apoyo a estudiantes con proyectos de
              capacitación interna.
            </p>
            <div className="carousel-container">
              <Carousel data={carouselData.carousel} />
              <span data={carouselData.carousel.description}></span>
            </div>
          </section>
          <h2 className="focus-title">Misión y visión</h2>
          <Mision
            src={MisionIcon}
            title="Misión"
            description="Nuestra misión es generar cambios en la sociedad a través de un trabajo interdisciplinario, promoviendo un cambio de lenguaje, fomentando una sociedad inclusiva basada en los Derechos Humanos, disminuyendo barreras, visibilizando situaciones que viven a diario las personas con diversidad funcional, a través de la educación y concientización de la sociedad. "
          />
          <Mision
            id="vision"
            src={VisionIcon}
            title="Visión"
            description="Nuestra visión es lograr una transformación social respecto a la mirada que se posee sobre la diversidad funcional, que permita una sociedad inclusiva, no discriminatoria y que acepte la diversidad.  Esperamos que a través de nuestro trabajo se hagan valer los derechos de todas las personas con diversidad funcional"
          />
          <Mision
            src={ObjetivoIcon}
            title="Objetivo General"
            description="Nuestro objetivo principal es fomentar una sociedad inclusiva basada en los derechos humanos de las personas, disminuyendo las barreras, cambiando el lenguaje y visibilizando situaciones en torno a la diversidad funcional."
          />
        </section>

        <section className="teamwork">
          <div className="teamwork-container">
            <h2 className="teamwork-title">Equipo de Trabajo</h2>
            <h3 className="teamwork-subTitle">Junta Directiva:</h3>
          </div>
          <TeamCard data={teamData.team} />
        </section>

        <section className="teamwork">
          <div className="teamwork-container">
            <h4 className="teamwork-subTitle">Comisión de Ética:</h4>
          </div>
          <TeamCard data={teamData.teamEtica} />
        </section>

        <section className="teamwork">
          <div className="teamwork-container">
            <h4 className="teamwork-subTitle">Comisión Revisora de Cuentas:</h4>
          </div>
          <TeamCard data={teamData.teamCuentas} />
        </section>

        <div className="joinUs-container">
          <div className="joinUs-card">
            <img src={JoinUsIcon} alt="ilustracion" />
            <div className="column-right">
              <h2 className="joinUs-title">Únete a nuestro equipo</h2>
              <p className="joinUs-description">
                ¡Únete a Multidiversos! Somos una ONG compuesta por estudiantes
                y profesionales de diversas áreas, comprometidos con la
                promoción de la conciencia colectiva y la inclusión de personas
                con diversidad funcional en Valparaíso y Viña del Mar.
              </p>
              <button
                className="contact-button"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSf1rxnHyrXPMY34KTdDkqZ7wJRnA3r3-v56oDhNDDZef-gIuA/viewform?usp=sf_link",
                    "_blank"
                  )
                }
              >
                Unirse <ExternalLInkIcon />
              </button>
            </div>
          </div>
          <div className="contact-card">
            <img src={EmailIcon} alt="ilustracion" />
            <div className="contact-column-right">
              <h2 className="contact-title">¿Tienes alguna pregunta?</h2>
              <p className="contact-description">
                ¿Quieres hablar con nosotros? ¡Genial! Estamos aquí para
                responder tus preguntas, recibir tus comentarios y ayudarte en
                lo que necesites. ¡No dudes en contactarnos!
              </p>
              {/* <Form /> */}
              <button
                className="contact-button"
                onClick={() =>
                  window.open("https://wa.me/+56930598765", "_blank")
                }
              >
                <WhatsappIcon stroke="white" />
                Chat en WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
