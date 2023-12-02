import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    [key: string]: SimplePokemon
}

const initialState = {
    '1': { id: 1, name: 'bulbasur' },
    '3': { id: 3, name: 'sassa' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload
        const {id } = pokemon

        if (!!state[id]) {
            delete state[id]

            return
        }

        state[id] = pokemon
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer