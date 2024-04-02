import "../styles/TeamCard.css"

function TeamCard({ data }) {
  return (
    <>
        <div className="card-container">
            {data.map((item, idx) => {
                return (
                    <div key={idx} className="card">
                        <img src={item.picture} alt={item.alt} />
                        <h4>{item.name}</h4>
                        <h5>{item.position}</h5>
                    </div>
                )
            })}
        </div>
    </> )}

export default TeamCard;