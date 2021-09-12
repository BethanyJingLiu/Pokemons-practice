import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(
        "https://app.pokemon-api.xyz/pokemon/all"
      );
      setPokemons(response.data.slice(0, 15));
    } catch (e) {
      return (
        <>
          <h3>Pokemons disappeared!</h3>
        </>
      );
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log("show me the pokemons", pokemons);

  return (
    <div>
      <h1>Hellooo</h1>
      <div>
        {pokemons.map((pokemon, index) => (
          <div key={index} className="pokemon-thumbnail">
            <img src={pokemon.hires} alt={pokemon.thumbnail} />
            <h5>Species : {pokemon.species}</h5>
            <p>Name:{pokemon.name.english}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
