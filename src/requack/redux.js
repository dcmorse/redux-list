import { createContext } from "react"
import Requack from "./requack"

export const createStore = (reducer, initialState) => {
    if (Requack.context || Requack.reducer || Requack.initialState)
        throw new Error("multiple calls to createStore, but I was only expecting one")
    else {
        Requack.context = createContext()
        Requack.reducer = reducer
        Requack.initialState = initialState
    }
}