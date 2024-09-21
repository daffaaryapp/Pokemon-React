import pokemonJSON from "../../data/pokemon.json";
import { useState, useEffect } from 'react';
import "./PokemonList.css";
import PokemonItem from '../PokemonItem/PokemonItem';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemons, setFilterPokemons] = useState([]);
  const handleSearch = (e) => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });
    setFilterPokemons(search);
  };


  useEffect(() => {
    setPokemons(pokemonJSON);
  }, []);

  return (
    <div>
      <h1>Daftar Pokémon</h1>
      <input
        type="text"
        placeholder="cari pokemon..."
        className="search"
        onChange={handleSearch}
      />
      <div className="list-pokemon">
        {filterPokemons.length === 0 ? (
        <div>data tidak ditemukan</div>
        ) : (
          filterPokemons.map((item) => (
          <PokemonItem 
            key={item.id} 
            pokemon={item} 
          />
        ))
      )}
      </div>
    </div>
  );
}



export default PokemonList;