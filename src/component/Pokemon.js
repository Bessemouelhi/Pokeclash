import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist, faSkull } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

const Pokemon = ({ name, image, life, hits, addOneHit, attaques }) => {
  return (
    <div className="d-flex flex-column">
      <img src={image} alt={name} style={{ height: "200px" }} />
      <div className="d-flex justify-content-around">
        {attaques.map((attaque, index) => (
          <button
            key={index}
            className="btn btn-success mr-2"
            disabled={life < 1}
            onClick={() => addOneHit(name, index)}
          >
            {attaque.name}
          </button>
        ))}
      </div>
      <div className="mt-2 d-flex justify-content-around">
        <span className="badge text-bg-warning">
          <FontAwesomeIcon icon={faHandFist} /> {hits}
        </span>
        {life > 0 ? (
          <span className="badge text-bg-success">
            <FontAwesomeIcon icon={faGratipay} /> {life}%
          </span>
        ) : (
          <span className="badge text-bg-danger">
            <FontAwesomeIcon icon={faSkull} /> KO
          </span>
        )}
      </div>
    </div>
  );
};

export default Pokemon;