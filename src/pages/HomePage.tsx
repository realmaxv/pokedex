import { useEffect, useState } from "react";
import Header from "../components/Header";

import PokeCard from "../components/PokeCard";
import { Link } from "react-router";

type SinglePokemon = {
  name: string;
  url: string;
  id: number;
};

export default function HomePage() {
  const [pokeData, setPokeData] = useState<SinglePokemon[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        const filteredPokemon = data.results.map((pokemon: SinglePokemon) => {
          const id = Number(pokemon.url.split("/").filter(Boolean).pop());
          return { ...pokemon, id };
        });
        setPokeData(filteredPokemon);
      });
  }, []);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 rounded">
      {" "}
      <Header changeValue={searchInput} changeHandle={handleChange} />
      <div className="flex items-start justify-center h-160 overflow-x-hidden overflow-y-scroll  w-full  ">
        <div className=" grid  grid-cols-2 gap-6 ">
          {pokeData
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((pokemon: SinglePokemon) => (
              <Link key={pokemon.id} to={`/singlepokemon/${pokemon.id}`}>
                <PokeCard id={pokemon.id} name={pokemon.name} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
