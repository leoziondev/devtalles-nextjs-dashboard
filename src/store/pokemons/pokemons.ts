import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit'

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
  reducers: {}
});

export const {} = pokemonsSlice.actions

export default pokemonsSlice.reducer