'use client'

import { useState } from "react"
import { useAppSelector } from "@/store"

import { PokemonGrid } from "./PokemonGrid"
import { NoFavoritePokemons } from "./NoFavoritePokemons"


export const FavoritesPokemons = () => {
    const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons.favorites))
    // const [pokemons, setPokemons] = useState(favoritesPokemons)

    return (
        <>
            {favoritesPokemons.length
                ? (<PokemonGrid pokemons={favoritesPokemons} />)
                : (<NoFavoritePokemons />)
            }            
        </>
    )
}
