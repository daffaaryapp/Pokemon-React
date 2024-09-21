import pokemonJSON from "../../data/pokemon.json";
import { useState, useEffect } from 'react';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  //test
  useEffect(() => {
    setPokemons(pokemonJSON);
  }, []);

//   console.log(pokemons);

  return (
    <div>
      <div className="list-pokemon">
        {pokemons.map((item) => (
            
          <h1>{item.id} {item.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;