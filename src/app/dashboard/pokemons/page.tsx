import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import Image from "next/image";

const getPokemons = async ( limit = 151, offset = 0 ): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await 
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => res.json());

    const pokemons = data.results.map((pokemon) => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    }))

    return pokemons;
}
 
export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col p-4">
      <span className="text-2xl font-semibold">Pokemons List</span>
      <span className="text-sm mb-4">Static Generation</span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
