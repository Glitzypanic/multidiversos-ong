import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Diversidad from "./pages/Diversidad.jsx";
import BannerImg from "./assets/banner.webp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import { Carousel } from "./components/Carousel";
import { carousel1 } from "./data/carouselData.json";
import { carousel2 } from "./data/carouselData.json";
import { carousel3 } from "./data/carouselData.json";
import { carousel4 } from "./data/carouselData.json";
import { carousel5 } from "./data/carouselData.json";
import { carousel6 } from "./data/carouselData.json";
import { carousel7 } from "./data/carouselData.json";
import { team } from "./data/teamData.json";
import { teamEtica } from "./data/teamData.json";
import { teamCuentas } from "./data/teamData.json";
import TeamCard from "./components/TeamCard.jsx";

function App() {
  return (
      <main>
        <Header />
        <NavMenu />
      <Routes>
        <Route path="/Diversidad" element={<Diversidad />} />
      </Routes>
      <div className="banner">
        <img src={BannerImg} alt="Banner de Multidiversos" />
      </div>

      <section className="about">
        <h1>¿Quiénes somos?</h1>

        <div className="carousel-container">
          <Carousel data={carousel1} />
          <span data={carousel1.description}></span>
        </div>

        <p>
          Somos una ONG llamada Multidiversos. Estamos conformados por
          estudiantes y profesionales de diversas áreas, tales como Trabajo
          Social, Psicología, Administración, Fonoaudiología, Gestión en Turismo
          y Cultura, Terapia Ocupacional, entre otras.
        </p>

        <div className="carousel-container">
          <Carousel data={carousel2} />
        </div>

        <p>
          Desde mayo del año 2020 estamos realizando actividades con el fin de
          generar una conciencia colectiva, facilitar información, generar
          espacios para personas con diversidad funcional, dar orientaciones y
          difundir información relevante a la diversidad funcional y la
          inclusión social.
        </p>

        <div className="carousel-container">
          <Carousel data={carousel3} />
          <span></span>
        </div>

        <p>
          Hemos realizado y participado en ferias en las comunas de Valparaíso y
          Viña del Mar
        </p>

        <div className="carousel-container">
          <Carousel data={carousel4} />
        </div>

        <p>
          Hemos recibido estudiantes en práctica de trabajo social y psicología
          de diferentes universidades
        </p>

        <div className="carousel-container">
          <Carousel data={carousel5} />
        </div>

        <p>
          Hemos recibido estudiantes en práctica de trabajo social y psicología
          de diferentes universidades
        </p>

        <div className="carousel-container">
          <Carousel data={carousel6} />
        </div>

        <p>
          Hemos recibido estudiantes en práctica de trabajo social y psicología
          de diferentes universidades
        </p>

        <div className="carousel-container">
          <Carousel data={carousel7} />
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
        <TeamCard data={team} />
      </section>
      <section className="teamwork-container">
        <div className="title">
          <h4>Comisión de ética:</h4>
        </div>
        <TeamCard data={teamEtica} />
      </section>
      <section className="teamwork-container">
        <div className="title">
          <h4>Comisión Revisora de Cuentas:</h4>
        </div>
        <TeamCard data={teamCuentas} />
      </section>
      <Footer />
      </main>
  );
}

export default App;
