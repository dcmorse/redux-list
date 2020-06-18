// implement Provider and connect
import React, { useState, useContext } from "react"
import Requack from "./requack"

export const Provider = ({store, children}) => {
    const [state, setState] = useState(Requack.initialState)
    return (<Requack.context.Provider value={state}>{children}</Requack.context.Provider>)
}

export const connect = (mapStateToProps, mapDispatchToProps) =>
    (Component) =>
        (props) => {
            const state = useContext(Requack.context)
            return <Component {...mapStateToProps(state)}>{props.children}</Component>
        }