import React, { useState } from "react";
import { v4 } from "uuid";

export const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const sendHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: v4(),
      todoName: input,
      isCompleted: false,
    };

    props.onSubmit(newTodo);
    setInput("");
  };

  return (
    <form onSubmit={sendHandler}>
      <input
        type="text"
        placeholder="Add a to-do"
        name="todoName"
        value={input}
        onChange={changeHandler}
      />
      <button>Add to-do</button>
    </form>
  );
};
