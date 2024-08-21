import {IPokemonModel} from "./IPokemonModel";

export interface IPaginationModel{
    count: number,
    next: string,
    previous: string,
    results: IPokemonModel[]
}