import Footer from "../components/Footer";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import BannerImg from "../assets/banner.webp";
import CarouselData from "../data/carouselData.json";
import Carousel from "../components/Carousel";
import WatchIcon from "../components/svg/WatchIcon";

import "../styles/pages_style/Activities.css";
export default function ActivitiesPage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div className="banner">
        <img src={BannerImg} alt="Banner de Multidiversos" />
      </div>

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
              Mar, muchas gracias por su coperación.
            </p>
            <div className="activities-card-carousel">
              <Carousel data={CarouselData.carousel2020} />
              <span data={CarouselData.carousel2020.description}></span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
