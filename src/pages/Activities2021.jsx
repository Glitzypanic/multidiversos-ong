import WatchIcon from "../components/svg/WatchIcon";
import "@justinribeiro/lite-youtube";
import "../styles/pages_style/Activities.css";
export default function ActivitiesPage() {
  return (
    <>
      <div className="banner"></div>

      <section className="activities-container">
        <h5 className="activities-tag">ACTIVIDADES</h5>
        <h1 className="activities-title">Actividades 2021</h1>

        <div className="activities-content">
          <div className="activities-card">
            <h2 className="activities-card-title">
              Seminario de Seguridad Social y Pandemia:
            </h2>
            <h3 className="activities-card-subTitle">
              Una mirada desde el contexto nacional sobre los beneficios en
              personas con diversidad funcional.
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 16 de Abril 2021
            </span>
            <p className="activities-card-info">
              El día 16 de abril del 2021 se lleva a cabo el primer Seminario de
              Seguridad Social y Pandemia: Una mirada desde el contexto nacional
              sobre los beneficios en personas con diversidad funcional, en el
              cual expuso la Trabajadora Social y académica Marlene Araya Cuello
              con el apoyo jurídico de la Trabajadora Social y académica Cecilia
              Porto Fuentes.
            </p>
            <p className="activities-card-info">
              Agradecemos contar con la colaboración de Francisco Villarroel,
              intérprete de lengua de señas, a quien pueden visualizar en
              primera instancia en el segundo cuadrito de la primera línea
              mirando de derecha a izquierda y en segunda instancia en la
              esquina inferior derecha.
            </p>

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="XIDs-edAKc0"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Conversatorio Departamento de Turismo:
            </h2>
            <h3 className="activities-card-subTitle">
              La inclusión la haces tú
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 10 de Junio 2021
            </span>
            <p className="activities-card-info">
              El día 10 de junio del 2021 se llevó a cabo el Conversatorio de
              Turismo: La inclusión la haces tú organizado por el departamento
              de Turismo, Cultura y Patrimonio de Multidiversos, el cual tenía
              la finalidad de informar y reflexionar sobre el turismo inclusivo.
            </p>
            <p className="activities-card-info">
              La memoria de la instancia puedes encontrarla aquí. Agradecemos la
              participación y el apoyo.
            </p>

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="sfgeLItA_zY"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Entrevista:</h2>
            <h3 className="activities-card-subTitle">
              Todo sobre violencia de género
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 25 de Julio 2021
            </span>
            <p className="activities-card-info">
              El día 25 de julio del 2021 se llevó a cabo una entrevista hacia
              la psicóloga Camila Muñoz Castillo respecto a la violencia de
              género realizada por la Organización Multidiversos.
            </p>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="ET1MVy9qNQg"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Coversatorio:</h2>
            <h3 className="activities-card-subTitle">
              Hablemos de Karate inclusivo
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 13 de Agosto 2021
            </span>
            <p className="activities-card-info">
              El día 13 de Agosto del 2021 se llevó a cabo un conversatorio
              respecto al Karate Inclusivo organizado por el departamento de
              Deporte de la Organización de Multidiversos.
            </p>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="9TZIWG9luog"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Taller:</h2>
            <h3 className="activities-card-subTitle">
              Uso del Lenguaje personas con Diversidad Funcional
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 2 de Septiembre 2021
            </span>
            <p className="activities-card-info">
              El día 2 de Septiembre se llevó a cabo un Taller sobre uso del
              lenguaje hacia las personas con diversidad funcional implementado
              por Khyara Montoya Montoya, presidenta y fundadora de la ONG
              Multidiversos.
            </p>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="DGy8g819q_w"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">Conversatorio:</h2>
            <h3 className="activities-card-subTitle">
              Hablemos de la importancia del juego en la niñes. Un abordaje
              multidisciplinario.
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 15 de Octubre 2021
            </span>
            <p className="activities-card-info">
              El día 15 de octubre de 2021 se llevó a cabo el Conversatorio
              Hablemos de la Importancia del juego en la niñez, organizado por
              el departamento de Infancia de Multidiversos.
            </p>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="R10DtyLGle0"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Conversatorio de Salud Mental:
            </h2>
            <h3 className="activities-card-subTitle">
              Cómo cuidarnos desde la diversidad final
            </h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 1 de Diciembre 2021
            </span>
            <p className="activities-card-info">
              El día 1 de Diciembre de 2021 se llevó a cabo el Conversatorio de
              Salud Mental Cómo cuidarnos desde la Diversidad Funcional
              impartido por la Trabajadora Social y académica Ketty Cazorla,
              organizado por el departamento de Salud de la organización
              Multidiversos.
            </p>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="JG3xGhQDOWU"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
          </div>

          <div className="activities-card">
            <h2 className="activities-card-title">
              Actividades 3 de Diciembre:
            </h2>
            <h3 className="activities-card-subTitle">Día de la Inclusión</h3>
            <span className="activities-card-time">
              <WatchIcon stroke="red" /> 3 de Diciembre 2021
            </span>
            <p className="activities-card-info">
              El día 3 de diciembre del 2021 se conmemora el día de la
              inclusión, día en el cual se realizaron diversas actividades en un
              lugar emblemático de la comuna de Valparaíso, el cual tiene por
              nombre <q>Plaza Victoria</q>.
            </p>
            <p className="activities-card-info">
              A continuación encuentra el registro audiovisual del evento.
            </p>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="k70U8KUGPlw"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%",
                margin: "10px" /* 16:9 Aspect Ratio */,
              }}
            >
              <lite-youtube
                videoid="pC56ISnhfMc"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></lite-youtube>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
