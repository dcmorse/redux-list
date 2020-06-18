import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ElementEditor from "./ElementEditor"
import createStore from "./redux/store"
import { Provider, connect } from "react-redux"
import Menu from "./menu"
import { actions } from "./redux/actions"

const store = createStore({list: ["Benny", "Emmet", "Lucy", "Unikitty"]})

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouteApp />
    </Provider>
  );
}

const RouteApp = ({list, updateElement}) => {
    return (<BrowserRouter>
              <Menu />
              <Switch>
                <Route exact path="/">
                  <h1>Home</h1>
                  <ol>
                  {list.map((element, id) => <li key={id}><Link to={`/element/${id}`}>{element}</Link></li>)}
                  </ol>
                  <Link to={`/element/${list.length}`}>Add Element</Link>
                </Route>
                <Route path="/element/:id">
                  <ElementEditor list={list} updateElement={updateElement} />
                </Route>
              </Switch>
            </BrowserRouter>)
}

const mapDispatchToProps = actions // {updateElement} at time of writing
const ConnectedRouteApp = connect(({list}) => ({list}), mapDispatchToProps)(RouteApp)
export default App;
