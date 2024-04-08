import Footer from "../components/Footer";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import Banner from "../assets/banner.webp";

import "../styles/DocumentsPage.css"

export default function DocumentsPage() {
  return (
    <>
        <Header />
        <NavMenu />
        <div className="banner">
          <img src={Banner} alt="" />
        </div>
        <div className="container">
            <h1>Documentos</h1>
            <p>Aqui puedes encontrar material para ver y descargar.</p>
            <div className="document">
                <h2>Documento 1</h2>
                <p>Descripción del documento 1</p>
                <a href="#">Descargar</a>
            </div>
        </div>
        <Footer />
    </>
  );
}