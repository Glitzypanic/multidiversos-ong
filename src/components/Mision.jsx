import "../styles/components_style/Mision.css";

/**
 * Renders a mission card component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The source URL for the image.
 * @param {string} props.title - The title of the mission.
 * @param {string} props.description - The description of the mission.
 * @param {string} props.id - The unique identifier for the mission card.
 * @returns {JSX.Element} The rendered mission card component.
 */
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
