// eslint-disable-next-line no-unused-vars
import react from "react";
import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
export default function Todolist() {
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", priority: "" });
  };

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0)
      setTodos(
        todos.filter(
          (todo, index) =>
            index !== gridRef.current.getSelectedNodes()[0].childIndex
        )
      );
    else alert("Select row first");
  };

  const columns = [
    {
      headername: "Description",
      field: "description",
      sortable: true,
      filter: true,
      floatingFilter: true,
      animateRows: true,
    },
    {
      headername: "Date",
      field: "date",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headername: "Priority",
      field: "priority",
      sortable: true,
      filter: true,
      floatingFilter: true,

      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
  ];

  return (
    <div style={{ width: "50%", height: "700px", margin: "auto" }}>
      <div>
        <TextField
          style={{ marginRight: 10 }}
          type="text"
          onChange={inputChanged}
          label="Description"
          name="description"
          value={todo.description}
        />
        <TextField
          style={{ marginRight: 10 }}
          type="Date"
          onChange={inputChanged}
          label=" "
          name="date"
          value={todo.date}
        />
        <TextField
          style={{ marginRight: 10 }}
          type="text"
          onChange={inputChanged}
          label="Priority"
          name="priority"
          value={todo.priority}
        />
        <Button
          style={{ marginRight: 10 }}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
        <Button
          style={{ marginRight: 10 }}
          onClick={deleteTodo}
          variant="contained"
          color="Secondary"
        >
          Delete
        </Button>
      </div>
      <div
        className="ag-theme-material"
        style={{ width: "80%", height: "700px", margin: "auto" }}
      >
        <AgGridReact
          ref={gridRef}
          onGridReady={(params) => (gridRef.current = params.api)}
          rowSelection="single"
          columnDefs={columns}
          rowData={todos}
          animateRows="true"
        />
      </div>
    </div>
  );
}
