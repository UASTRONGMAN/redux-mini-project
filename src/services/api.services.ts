import axios from 'axios'
import {baseUrl} from "../constants/urls";
import {IPaginationModel} from "../models/IPaginationModel";

const axiosInstance = axios.create({
    baseURL: baseUrl
});

const services = {
    getAllPokemons: async ():Promise<IPaginationModel> => {
        let response = await axiosInstance.get<IPaginationModel>('/');
        return response.data
    }
}

export {
    services
}