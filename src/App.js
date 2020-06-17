import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ElementEditor from "./ElementEditor"

function App() {
  const [list, setList] = useState(["Benny", "Emmet", "Lucy", "Unikitty"])
  return (
    <BrowserRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
          <ol>
           {list.map((element, id) => <li key={id}><Link to={`/element/${id}`}>{element}</Link></li>)}
          </ol>
          <Link to={`/element/${list.length}`}>Add Element</Link>
        </Route>
        <Route path="/element/:id">
          <ElementEditor list={list} setList={setList} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
