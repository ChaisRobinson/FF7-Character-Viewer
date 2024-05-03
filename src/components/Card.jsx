import React from "react";

function Card({ data }) {
  if (!data) return null; // Render nothing if no data is provided

  return (
    <div className="card">
      <img src={data.photo} alt={data.name} /> 
      <h2>{data.name}</h2> {/* Display character name */}
      <p>{data.alliance}</p> {/* Display character alliance */}
    </div>
  );
}

export default Card;
