import React, { useState } from 'react';
import Pokemon from './Pokemon';
import { pokemons } from '../datas/pokeList';
import Bulbizarre from '../img/Bulbizarre.png';
import Roucool from '../img/Roucool.png';
import Salamèche from '../img/Salamèche.png';
import Carapuce from '../img/Carapuce.png';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState(pokemons);
  const images = {
    Bulbizarre, Roucool, Salamèche, Carapuce
  }

  const addOneHit = (name, hitIndex) => {
    console.log('hitIndex', hitIndex);
    setPokemonList((prevList) =>
      prevList.map((attacker, index) => {
        console.log('attaker', attacker);
        console.log('index', index);
        // Pokémon attaquant
        if (attacker.name === name) {
          return {
            ...attacker,
            hits: attacker.hits + 1
          };
        }

        // Pokémon attaqué (adversaire)
        const damage = attacker.attaques[hitIndex].damage;
        return {
          ...attacker,
          life: Math.max(0, attacker.life - damage)
        };
      }
      )
    );
  };

  return (
    <div className="d-flex justify-content-around">
      {pokemonList.map((pokemon) => (
        <Pokemon
          key={pokemon.name}
          name={pokemon.name}
          image={images[pokemon.name]}
          life={pokemon.life}
          hits={pokemon.hits}
          attaques={pokemon.attaques}
          addOneHit={addOneHit}
        />
      ))}
    </div>
  );
};

export default PokemonList;