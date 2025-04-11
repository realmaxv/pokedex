import { useEffect, useState } from "react";
import Header from "../components/Header";

import PokeCard from "../components/PokeCard";
import { Link } from "react-router";

type SinglePokemon = {
  name: string;
  url: string;
};

export default function HomePage() {
  const [pokeData, setPokeData] = useState<SinglePokemon[]>([]);
  const [filteredPokemon, setFilteredPokeon] = useState<SinglePokemon[]>([]);
  const handleChange: React.ChangeEventHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPokeData(data.results);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 rounded">
      {" "}
      <Header changeValue={""} changeHandle={handleChange} />
      <div className="flex items-start justify-center h-160 overflow-x-hidden overflow-y-scroll  w-full  ">
        <div className=" grid  grid-cols-2 gap-6 ">
          {pokeData.map((pokemon, index) => (
            <Link to={`/singlepokemon/${index + 1}`}>
              <PokeCard id={index} key={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
