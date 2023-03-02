import React, { useState } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List </h1>
        <Addtodo
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
        />

        <Todolist
          todos={todos}
          handleDelete={handleDelete}

        />
      </div>
    </div>
  );
};

export default App;