
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SinglePokemonPage() {
  const { id } = useParams();
  console.log(id);

  const [pokemon, setPokemon] = useState<null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <img
        src={pokemonFirstGeneration.sprites.front_default}
        alt={pokemonFirstGeneration.name}
      />
      <img
        src={pokemonFirstGeneration.sprites.front_shiny}
        alt={pokemonFirstGeneration.name}
      />
      <h2>{pokemonFirstGeneration.name.toUpperCase()}</h2>
      <p>#{pokemonFirstGeneration.id}</p>
      <p>
        {pokemonFirstGeneration.types.map((singleType, index) => (
          <button key={index}>{singleType.type.name.toUpperCase()}</button>
        ))}
      </p>
      <audio src={pokemonFirstGeneration.cries.legacy} controls autoPlay />
      <audio src={pokemonFirstGeneration.cries.latest} controls autoPlay />
    </>
  );
}