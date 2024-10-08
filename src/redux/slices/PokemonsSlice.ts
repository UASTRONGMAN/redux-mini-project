import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPokemonModel} from "../../models/IPokemonModel";
import {services} from "../../services/api.services";
import {AxiosError} from "axios";

type PokenomInitType = {
    pokemons: IPokemonModel[]
}

const initialState: PokenomInitType = {
    pokemons: []
}

let url;

const loadPokemons = createAsyncThunk(
    'pokemonsSlice/loadPokemons',
    async (_, thunkAPI) => {
        try{
            const responce = await services.getAllPokemons();
            let url = thunkAPI.fulfillWithValue(responce.results.map(res => res.url));
            return thunkAPI.fulfillWithValue(responce.results)

        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error)
        }
    }
)

console.log(url)

export const  pokemonsSlice = createSlice({
    name: 'pokemonsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
        })
});

export const PokemonsActions = {
    ...pokemonsSlice.actions,
    loadPokemons
}