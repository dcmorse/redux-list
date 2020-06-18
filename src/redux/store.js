import { createStore } from "redux";
import reducer from "./reducer";

export const configureStore = (initialState) => 
    createStore(reducer, initialState)

export default configureStore