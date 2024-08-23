import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../helpers/hooks";
import {PokemonsActions} from "../redux/slices/PokemonsSlice";

const PokemonsPage = () => {

    const pokemons = useAppSelector(state => state.pokemons.pokemons);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(PokemonsActions.loadPokemons())
    }, []);


    return (
        <div>
            {pokemons.map(pokemon => <div>{pokemon.name}</div>)}
        </div>
    );
};

export default PokemonsPage;