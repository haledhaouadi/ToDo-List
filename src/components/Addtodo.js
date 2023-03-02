import React from "react";

const Addtodo= ({ handleSubmit, todo, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> Add To Do</button>
    </form>
  );
};

export default Addtodo;