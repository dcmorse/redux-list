import React from "react";
import { useParams } from "react-router-dom";

export const ElementEditor = ({ list, updateElement }) => {
    const { id } = useParams(); // might be undefined for append...naughty!
    const onChange = e => updateElement({value: e.target.value, id})
    return <input type="text" value={list[id] || ""} onChange={onChange} />
}

export default ElementEditor;