export const UPDATE_ELEMENT = "UPDATE_ELEMENT"

export const updateElement = ({id=null, value}) => 
    ({ type: UPDATE_ELEMENT, id, value })

export const actions = { updateElement }