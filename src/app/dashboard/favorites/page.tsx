import { FavoritesPokemons } from "@/pokemons";

export const metadata = {
 title: 'Favorites',
 description: 'Page All Pokemons Loved',
};
 
export default async function FavoritesPage() {  

  return (
    <div className="flex flex-col p-4">
      <span className="text-2xl font-semibold">Pokemons Favorites</span>
      <span className="text-sm text-blue-500 mb-4">Global State</span>
      <FavoritesPokemons />
    </div>
  )
}
