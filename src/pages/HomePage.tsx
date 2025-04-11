import PokemonOverviewCard from "../components/PokemonOverviewCard";
// import { useParams } from "react-router";

//// muss die id noch fertig einbauen

export type Pokemon = {
  id: number; //// proforma
  name: string;
  url: string;
  imageUrl: string; //// das hab ich hier nur proforma drin
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[400px] mt-4 grid grid-cols-2 grid-template-columns: repeat(2, minmax(200px, 1fr)) gap-5 justify-content-center">
      {examplePokemons.map((pokemon) => (
        <PokemonOverviewCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

//// auch nur vorübergehend
const examplePokemons = [
  {
    id: 1,
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 3,
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: 4,
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 5,
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    id: 6,
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/6/",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: 7,
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/7/",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
];
