import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";
function showList() {
  return (
    <div>
      <div className="App">
        <h1 className="App-header">Add todo:</h1>
      </div>
      <div>
        <Todolist />
      </div>
    </div>
  );
}
export default showList;
