import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { useLocation } from "react-router-dom";

const PokemonList = () => {
  const location = useLocation();
  console.log(location);
  const [pokemonList, setPokemonList] = useState([
    {
      name: "Bulbizarre",
      image:
        "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png",
      life: 100,
      hits: 0,
      attaques: [
        { name: "Charge", damage: 5, type: "Normal" },
        { name: "Fouet Lianes", damage: 10, type: "Plante" },
      ],
    },
    {
      name: "Salamèche",
      image:
        "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png",
      life: 100,
      hits: 0,
      attaques: [
        { name: "Griffe", damage: 5, type: "Normal" },
        { name: "Flammèche", damage: 10, type: "Feu" },
      ],
    },
  ]);

  useEffect(() => {
    // Utilisez useEffect pour mettre à jour pokemonList lorsque location.state.selectedPokemons change
    if (location.state && location.state.selectedPokemons) {
      setPokemonList(location.state.selectedPokemons);
    }
  }, [location.state]);

  /*const images = {
    Bulbizarre, Roucool, Salamèche, Carapuce
  }*/

  const addOneHit = (name, hitIndex) => {
    console.log("hitIndex", hitIndex);
    setPokemonList((prevList) =>
      prevList.map((attacker, index) => {
        console.log("attaker", attacker);
        console.log("index", index);
        // Pokémon attaquant
        if (attacker.name === name) {
          return {
            ...attacker,
            hits: attacker.hits + 1,
          };
        }

        // Pokémon attaqué (adversaire)
        const damage = attacker.attaques[hitIndex].damage;
        return {
          ...attacker,
          life: Math.max(0, attacker.life - damage),
        };
      })
    );
  };

  return (
    <div className="container text-center">
      <h1>{pokemonList[0].name} vs {pokemonList[1].name}</h1>
      <div className="d-flex justify-content-around">
        {pokemonList.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
            life={pokemon.life}
            hits={pokemon.hits}
            attaques={pokemon.attaques}
            addOneHit={addOneHit}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
