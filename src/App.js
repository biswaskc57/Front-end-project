import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import home from "./home";
import Todolist from "./components/Todolist";

function showList() {
  return (
    <div className="App">
      <div className="App">
        <h1 className="App-header">This is react-router:</h1>
      </div>
      <BrowserRouter>
        <div style={{ marginRight: 10 }}>
          <Link to="/" style={{ marginRight: 10 }}>
            Home
          </Link>
          <Link to="/Todolist" style={{ marginRight: 10 }}>
            To-do list
          </Link>

          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/Todolist" component={Todolist} />

            <Route render={() => <h1> Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>

    /*<div>
      <div className="App">
        <h1 className="App-header">Add todo:</h1>
      </div>
      <div>
        <Todolist />
      </div>
      
    </div>*/
  );
}
export default showList;
