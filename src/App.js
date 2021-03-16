import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

function Todolist() {
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = () => {
    setTodos(
      todos.filter(
        (todo, index) =>
          index !== gridRef.current.getSelectedNodes()[0].childIndex
      )
    );
  };

  const columns = [
    {
      headername: "Description",
      field: "description",
      sortable: "true",
      filter: "true",
    },
    { headername: "Date", field: "date", sortable: "true", filter: "true" },
    {
      headername: "Priority",
      field: "priority",
      sortable: "true",
      filter: "true",
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
  ];

  return (
    <div>
      <input
        type="text"
        onChange={inputChanged}
        placeholder="Description"
        name="description"
        value={todo.description}
      />
      <input
        type="date"
        onChange={inputChanged}
        placeholder="Date"
        name="date"
        value={todo.date}
      />
      <input
        type="text"
        onChange={inputChanged}
        placeholder="Priority"
        name="priority"
        value={todo.priority}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>
      <div
        className="ag-theme-material"
        style={{ width: "50%", height: "700px", margin: "auto" }}
      >
        <AgGridReact
          ref={gridRef}
          onGridReady={(params) => (gridRef.current = params.api)}
          rowSelection="single"
          columnDefs={columns}
          rowData={todos}
        />
      </div>
    </div>
  );
}

export default Todolist;
