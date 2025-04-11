import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PokeCard } from "../components/PokeCard";

export default function SinglePokemonPage() {
  const { id } = useParams();
  console.log(id);

  const [pokemon, setPokemon] = useState<PokeCard | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
      <h2>{pokemon.name.toUpperCase()}</h2>
      <p>{pokemon.id}</p>
      <p>
        {pokemon.types.map((singleType, index) => (
          <button key={index}>{singleType.type.name.toUpperCase()}</button>
        ))}
      </p>
      <audio src={pokemon.cries.legacy} controls autoPlay />
      <audio src={pokemon.cries.latest} controls autoPlay />
    </div>
  );
}
