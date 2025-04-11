const PokemonOverviewCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div
      className="w-full rounded-lg shadow-sm p-4 bg-[#FFCB05] pokemon-card"
      style={{
        backgroundImage: `linear-gradient(to bottom, #FFE1C6, #FFCB05)`,
      }}
    >
      <img src={pokemon.imageUrl} alt={pokemon.name} className="" />
      <div className="flex justify-between w-full mt-4 pokemon-info">
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
      </div>
    </div>
  );
};

export default PokemonOverviewCard;
