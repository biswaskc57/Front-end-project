// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import Todotablee from "./components/Todolist";

function App() {
  const [todo, setTodo] = React.useState({ desc: "", date: "" });
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]); // all values of todos array and objects of todo
  };

  const deleteRow = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 className="App-header">Add todo:</h1>
      <form onSubmit={addTodo} class="body">
        <fieldset>
          <legend>TodoList:</legend>
          Description:
          <input
            type="text"
            name="desc"
            value={todo.desc}
            onChange={inputChanged}
          />
          Date:
          <input
            type="date"
            name="date"
            value={todo.date}
            onChange={inputChanged}
          />
          <input type="submit" value="Add" />
        </fieldset>
      </form>
      <Todotablee alltodos={todos} delete={deleteRow} />
    </div>
  );
}

export default App;
