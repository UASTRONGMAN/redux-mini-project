import axios from 'axios'
import {baseUrl} from "../constants/urls";
import {IPaginationModel} from "../models/IPaginationModel";

const axiosInstance = axios.create({
    baseURL: baseUrl
});

let url;

const services = {
    getAllPokemons: async ():Promise<IPaginationModel> => {
        let response = await axiosInstance.get<IPaginationModel>('/');
        let url = response.data.results.map(res => res.url);
        console.log(url)
        return response.data
    }
}

export {
    services
}