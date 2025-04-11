import { useEffect, useState } from "react";
export type Sprites = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  animated?: Sprites;
};
export type PokeCard = {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Species[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

export type Ability = {
  ability: Species | null;
  is_hidden: boolean;
  slot: number;
};

export type Species = {
  name: string;
  url: string;
};
export type Cries = {
  latest: string;
  legacy: string;
};

type PokeCardProps = {
  id: number;
};

function PokeCard({ id }: PokeCardProps) {
  const [single, setSingle] = useState<PokeCard | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingle(data);
      })
      .catch((error) => {
        console.log("Fetching single: " + error);
      });
  }, [id]);

  return (
    <div className=" relative p-[1px] min-h-40 bg-gradient-to-tr from-[#FFE1C6] to-[#FFCB05] rounded-4xl justify-center gap-2   ">
      {single ? (
        <div className=" flex items-center  flex-col gap-6">
          <div>
            {" "}
            <img
              className="absolute left-0 bottom-5 w-full"
              src={single.sprites.front_shiny}
              alt={single.name}
            />
          </div>
          <div className="w-40 relative top-25 rounded-4xl overflow-y-clip bg-white ">
            <div className="text-center">
              <p className="bg-white">
                {single.id <= 9
                  ? "#00" + single.id
                  : single.id < 100
                  ? "#0" + single.id
                  : "#" + single.id}
              </p>
              <p>{single.name.toUpperCase()}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Lädt...</p>
      )}
    </div>
  );
}

export default PokeCard;
