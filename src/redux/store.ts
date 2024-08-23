import {configureStore} from "@reduxjs/toolkit";
import {pokemonsSlice} from "./slices/PokemonsSlice";

export const store = configureStore({
    reducer: {
        pokemons: pokemonsSlice.reducer
    }
});