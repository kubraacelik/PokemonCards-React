import React from "react";
import "./style.css";
function DataTable({ data }) {
  return (
    <div className="grid-container">
      {data.map((pokemon) => (
        <div key={pokemon.id} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt="Pokemon" style={{ width: "160px", height: "160px" }}
              />
            </div>
            <div className="flip-card-back">
              <h1>{pokemon.name}</h1>
              <p>Experience: {pokemon.experience}</p>
              <p>Type: {pokemon.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataTable;
