import React from "react";
import { useParams } from "react-router-dom";

export const ElementEditor = ({ list, setList }) => {
    const { id } = useParams(); // might be undefined for append...I'm a bad man
    const setElement = (value) => {
        const newList = [...list];
        newList[id] = value;
        return setList(newList);
    }
    return <ElementEditorHelper element={list[id] || ""} setElement={setElement} />
}

const ElementEditorHelper = ({ element, setElement }) => 
    <input type="text" value={element} onChange={e => setElement(e.target.value)} />

export default ElementEditor;