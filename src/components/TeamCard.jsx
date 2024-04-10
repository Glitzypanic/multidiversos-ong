import "../styles/TeamCard.css";

function TeamCard({ data }) {
  return (
    <>
      <div className="card-container">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="card">
              <img className="card-img" src={item.picture} alt={item.alt} />
              <div className="card-info">
                <h4 className="card-name">{item.name}</h4>
                <h5 className="card-position">{item.position}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TeamCard;
