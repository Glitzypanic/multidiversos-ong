import "../styles/components_style/Mision.css"

function Mision({ src, title, description  }) {
  return (
    <>
      <div className="focus-mision-card">
        <img className="focus-mision-img" src={src} alt="" />
        <h2 className="focus-mision-title">{title}</h2>
        <p className="focus-mision-description">
          {description}
        </p>
      </div>
    </>
  );
}

export default Mision;