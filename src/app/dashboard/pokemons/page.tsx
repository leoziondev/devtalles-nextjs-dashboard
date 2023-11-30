
import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";


export const metadata = {
 title: 'List All Pokemons',
 description: 'Page All Pokemons Loved',
};

const getPokemons = async ( limit = 151, offset = 0 ): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await 
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => res.json());

    const pokemons = data.results.map((pokemon) => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    }))

    // throw new Error("Error")

    return pokemons;
}
 
export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col p-4">
      <span className="text-2xl font-semibold">Pokemons List</span>
      <span className="text-sm text-blue-500 mb-4">Static Generation</span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
