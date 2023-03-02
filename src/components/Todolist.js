import React from "react";

const Todolist = ({ todos, handleDelete,handleCheck }) => {
  return (
    <ul >
      {todos.map((t) => (
        <li >
          <span  key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
          <button onClick={() => handleCheck(t.id)}>Check</button>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;