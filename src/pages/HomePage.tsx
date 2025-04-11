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
  const [nightDay, setNightDay] = useState(true);

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

  const nightToggle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setNightDay((nightDay) => !nightDay);
  };
  return (
    <div
      className={`flex  flex-col items-center justify-center gap-2 h-screen md:h-fit p-2 md:rounded-2xl ${
        nightDay ? "bg-[#60d5ef]" : "bg-stone-800"
      }`}
    >
      {" "}
      <Header
        changeValue={searchInput}
        changeHandle={handleChange}
        nightToggle={nightToggle}
      />
      <div
        className="flex items-start justify-center h-160 rounded-2xl
      p-1 overflow-x-hidden overflow-y-scroll  w-full  "
      >
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
