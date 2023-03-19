import React from "react";

export const Todo = (props) => {
  const { id, name, completed, completeTodo, deleteTodo } = props;
  return (
    <div>
      <div style={{cursor: "pointer"}} onClick={() => completeTodo(id)}>
      <h1>{name}</h1>
        {completed ? "✅" : "⏹️"}
      </div>
      <div style={{cursor: "pointer", backgroundColor: "black", width: "30px", height: "30px"}} onClick={() => deleteTodo(id)}><p>❌</p></div>
    </div>
  );
};
