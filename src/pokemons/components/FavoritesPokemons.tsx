'use client'

import { useState } from "react"
import { useAppSelector } from "@/store"

import { PokemonGrid } from "./PokemonGrid"
import { NoFavoritePokemons } from "./NoFavoritePokemons"


export const FavoritesPokemons = () => {
    const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons))
    const [pokemons, setPokemons] = useState(favoritesPokemons)

    return (
        <>
            {pokemons.length
                ? (<PokemonGrid pokemons={pokemons} />)
                : (<NoFavoritePokemons />)
            }            
        </>
    )
}
