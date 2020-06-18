import { UPDATE_ELEMENT } from "./actions"

export const reducer = (state, action) => { 
    const list = state.list
    switch(action.type) {
        case UPDATE_ELEMENT:
            const newList = [...list]
            newList[action.id || list.length] = action.value
            return { list: newList }
        default:
            return state
    }
}

export default reducer