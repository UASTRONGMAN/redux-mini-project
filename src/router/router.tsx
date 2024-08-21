import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PokemonsPage from "../pages/PokemonsPage";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {index: true, element:<PokemonsPage/>}
        ]}
])