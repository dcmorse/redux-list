// implement Provider and connect
import React, { useState, useContext } from "react"
import Requack from "./requack"

export const Provider = ({store, children}) => {
    const stateAndSetState = useState(Requack.initialState)
    return (<Requack.context.Provider value={stateAndSetState}>{children}</Requack.context.Provider>)
}

export const connect = (mapStateToProps, mapDispatchToProps) =>
    (Component) =>
        (props) => {
            const [state, setState] = useContext(Requack.context)
            const dispatchProps = {}
            Object.entries(mapDispatchToProps).forEach(([actionName, actionConstructor]) => {
                dispatchProps[actionName] = (...actionConstructorArgs) => {
                    const action = actionConstructor(...actionConstructorArgs)
                    setState(Requack.reducer(state, action))
                }
            })
            return <Component {...mapStateToProps(state)} {...dispatchProps}>{props.children}</Component>
        }