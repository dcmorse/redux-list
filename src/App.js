import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ElementEditor from "./ElementEditor"

function App() {
  const [elements, getElements] = useState(["Benny", "Emmet", "Lucy", "Unikitty"])
  return (
    <BrowserRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
          <ol>
           {elements.map((element, id) => <li><Link to={`/element/${id}`}>{element}</Link></li>)}
          </ol>
        </Route>
        <Route path="/element/:id">
          <ElementEditor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
