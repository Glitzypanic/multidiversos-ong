import Header from "../components/Header";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import PdfIcon from "../components/svg/PdfIcon";

function Diversidad() {
  return (
    <main>
      <Header />
      <NavMenu />
      <article>
        <h1>Acerca de la diversidad funcional</h1>

        <p>
          El cambio de lenguaje se basa en el modelo de la diversidad postulado
          por Javier Romañach y Agustina Palacios el año 2006, el cual propone
          tres cambios fundamentales. Uno de esos cambios es propugnar un cambio
          de terminología de discapacidad, persona con discapacidad o situación
          de discapacidad a diversidad funcional y persona con diversidad
          funcional. Este término se ajusta a una realidad en la que la persona
          funciona de manera diferente o diversa de la mayoría de la sociedad.
          Considera la diferencia de la persona y la falta de respeto de las
          mayorías, que en sus procesos constructivos no tienen en cuenta esa
          diversidad funcional (Romañach, J). Por ejemplo, una persona sorda se
          comunica con la lengua de señas y otra que no lo es, se comunica a
          través del habla. En ambos casos la función es la misma pero se
          realiza de manera diferente.
        </p>

        <img src="picture/img/personas/javier.webp" alt="Foto de Javier Romañach" />
        <img src="picture/img/personas/agustina.webp" alt="Foto de Agustina Palacios" />
        <button><PdfIcon /> Modelo de la Diversidad</button>
      </article>
      <Footer />
    </main>
  );
}

export default Diversidad;
