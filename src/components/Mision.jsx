import "../styles/components_style/Mision.css";

function Mision({ src, title, description, id }) {
  return (
    <>
      <div className="focus-mision-card" id={id}>
        <img className="focus-mision-img" src={src} aria-label="hidden" />
        <div className="focus-info">
          <h2 className="focus-mision-title">{title}</h2>
          <p className="focus-mision-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Mision;
