import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { PokeCard } from "../components/PokeCard";
import Header from "../components/Header";

export default function SinglePokemonPage() {
  const { id } = useParams();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [pokemon, setPokemon] = useState<PokeCard | null>(null);
  const [isShiny, setIsShiny] = useState(false);

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

  return (

    <div className="max-w-md mx-auto content-center bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      {/* Pokémon Bild mit Animation */}
      <div className="flex justify-center mb-6">
        <img
          src={currentSprite}
          alt={pokemon.name}
          onClick={handleImageClick}
          className="w-74 h-74 object-contain transition-transform duration-300"
        />
      </div>

      {/* Unsichtbarer Audio-Player */}
      <audio ref={audioRef} src={pokemon.cries.legacy} />

      {/* Pokémon Name und ID */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">
          {pokemon.name.toUpperCase()}
        </h2>
        <p className="text-lg text-gray-500 font-medium">
          #{pokemon.id.toString().padStart(3, "0")}
        </p>
      </div>

      {/* Pokémon Typen */}
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

      {/* Optional: Gewicht */}
      {pokemon.weight && (
        <p className="text-center text-gray-600">
          Weight: {(pokemon.weight / 10).toFixed(1)} kg
        </p>
      )}
    </div>
  );
}
