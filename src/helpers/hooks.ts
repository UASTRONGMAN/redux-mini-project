import {useDispatch, useSelector} from "react-redux";
import {store} from "../redux/store";

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

export {
    useAppSelector,
    useAppDispatch
}