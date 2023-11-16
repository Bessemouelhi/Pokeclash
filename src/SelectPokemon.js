import React, { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { pokemons } from "./datas/pokeList";

const SelectPokemon = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addPokemon = (item) => {
    console.log(cart);
    console.log(item);
    if (cart.length < 2) {
      setCart((prev) => {
        return [...prev, item];
      });
    }
  };

  const removePokemon = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  const handleValidation = () => {
    // Envoyer le tableau 'cart' au composant PokemonList
    // utiliser une route pour naviguer vers la page PokemonList avec les données
    // ou utiliser un état local pour conditionner l'affichage du composant PokemonList
    console.log("Tableau 'cart' validé :", cart);
    navigate("/fight", { state: { selectedPokemons: cart } });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Liste des Pokémon</h1>
      <ul>
        {Object.entries(cart).map(([key, value], index) => (
          <><li key={key}>{value.name}  <button className="btn btn-danger btn-sm" onClick={() => removePokemon(index)}>Supprimer</button></li></>
        ))}
      </ul>
      <button className="btn btn-success" onClick={handleValidation} disabled={cart.length < 2}>Valider la selection</button>
      <hr />
      <div className="row">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="col-4">
            <div className="card">
              <img
                src={pokemon.image}
                className="card-img-top"
                alt={pokemon.name}
              />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">
                  <strong>Type:</strong> {pokemon.type}
                </p>
                <p className="card-text">
                  <strong>Vie:</strong> {pokemon.life}%
                </p>
                <p className="card-text">
                  <strong>Attaques:</strong>
                </p>
                <ul className="list-group">
                  {pokemon.attaques.map((attack, attackIndex) => (
                    <li key={attackIndex} className="list-group-item">
                      {attack.name} - Dégâts: {attack.damage} - Type:{" "}
                      {attack.type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button onClick={() => addPokemon(pokemon)}>Ajouter</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectPokemon;
