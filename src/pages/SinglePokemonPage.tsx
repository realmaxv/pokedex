import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { PokeCard } from "../components/PokeCard";

import HeaderSingle from "../components/HeaderSingle";

export default function SinglePokemonPage() {
  const { id } = useParams();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [pokemon, setPokemon] = useState<PokeCard | null>(null);
  const [isShiny, setIsShiny] = useState(false);
  const [nightDay, setNightDay] = useState(true);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((e) => console.error("Autoplay blockiert:", e));
    }
    setIsShiny(!isShiny);
  };

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const currentSprite = isShiny
    ? pokemon.sprites.front_shiny
    : pokemon.sprites.front_default;

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
      <HeaderSingle nightToggle={nightToggle} />
      <div className="flex items-center justify-center flex-col rounded-xl  md:max-w-2xl p-6">
        <div className="flex justify-center mb-6">
          <img
            src={currentSprite}
            alt={pokemon.name}
            onClick={handleImageClick}
            className="w-74 h-74 object-contain transition-transform duration-300"
          />
        </div>

        <audio ref={audioRef} src={pokemon.cries.legacy} />

        <div className="text-center mb-6">
          <h2
            className={`text-3xl font-bold mb-1 ${
              nightDay ? "text-stone-900" : "text-stone-50"
            }`}
          >
            {pokemon.name.toUpperCase()}
          </h2>
          <p
            className={`text-lg font-medium ${
              nightDay ? "text-gray-500" : "text-stone-50"
            }`}
          >
            #{pokemon.id.toString().padStart(3, "0")}
          </p>
        </div>
        <div className="flex justify-center  gap-3 mb-6">
          {pokemon.types.map((singleType, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full font-bold text-white ${
                singleType.type.name === "grass"
                  ? "bg-green-500"
                  : singleType.type.name === "bug"
                  ? "bg-green-700"
                  : singleType.type.name === "fire"
                  ? "bg-red-500"
                  : singleType.type.name === "water"
                  ? "bg-blue-500"
                  : singleType.type.name === "ice"
                  ? "bg-cyan-200"
                  : singleType.type.name === "flying"
                  ? "bg-blue-300"
                  : singleType.type.name === "normal"
                  ? "bg-gray-300"
                  : singleType.type.name === "poison"
                  ? "bg-purple-500"
                  : singleType.type.name === "fairy"
                  ? "bg-pink-300"
                  : singleType.type.name === "psychic"
                  ? "bg-purple-800"
                  : singleType.type.name === "ghost"
                  ? "bg-gray-800"
                  : singleType.type.name === "dragon"
                  ? "bg-blue-900"
                  : singleType.type.name === "steel"
                  ? "bg-gray-300"
                  : singleType.type.name === "ground"
                  ? "bg-amber-600"
                  : singleType.type.name === "rock"
                  ? "bg-gray-500"
                  : singleType.type.name === "fighting"
                  ? "bg-amber-800"
                  : singleType.type.name === "electric"
                  ? "bg-yellow-400"
                  : "bg-gray-500"
              }`}
            >
              {singleType.type.name.toUpperCase()}
            </button>
          ))}
        </div>
        {pokemon.weight && (
          <p
            className={`text-center ${
              nightDay ? "text-gray-600" : "text-stone-50"
            }`}
          >
            Weight: {(pokemon.weight / 10).toFixed(1)} kg
          </p>
        )}
      </div>
    </div>
  );
}
