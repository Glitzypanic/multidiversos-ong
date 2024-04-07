import Footer from "../components/Footer";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import DiversidadImg from "../assets/diversidad.webp";
import "../styles/ContactPage.css";
import InstagramIcon from "../components/svg/Instagram";
import FacebookIcon from "../components/svg/Facebook";
import XIcon from "../components/svg/XIcon";
import YoutubeIcon from "../components/svg/Youtube";
import EmailIcon from "../components/svg/Email";
import WhatsappIcon from "../components/svg/Whatsapp";

export default function ContactPage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div className="banner">
        <img src={DiversidadImg} alt="Banner de muchos colores" />
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          reiciendis, animi atque, recusandae cum aliquam temporibus voluptas
          tempora esse itaque dignissimos assumenda soluta. Optio sapiente
          architecto modi! Labore, maxime architecto.
        </p>

        <h2>Redes Sociales</h2>

        <section className="social-grid">
          <div>
            <InstagramIcon stroke="var(--SecondaryColor)" width="40" height="40"/>
          </div>
          <div>
            <FacebookIcon stroke="var(--SecondaryColor)" width="40" height="40"/>
          </div>
          <div>
            <XIcon stroke="var(--SecondaryColor)" width="40" height="40"/>
          </div>
          <div>
            <YoutubeIcon stroke="var(--SecondaryColor)" width="40" height="40"/>
          </div>
          <div>
            <WhatsappIcon stroke="var(--SecondaryColor)" width="40" height="40"/>
          </div>
          <div>
            <EmailIcon stroke="var(--SecondaryColor)" width="40" height="40"/>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
