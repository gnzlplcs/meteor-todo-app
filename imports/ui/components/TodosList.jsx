import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const TodosList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todoName: "sample",
      isCompleted: false,
    },
  ]);

  const addTodo = (todo) => {
    if (todo.todoName.trim()) {
      todo.todoName = todo.todoName.trim();
      const updatedTodos = [todo, ...todos];
      console.log(updatedTodos);
      setTodos(updatedTodos);
    }
  };

  const completeTodoHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter((todo) => id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.todoName}
          completed={todo.isCompleted}
          completeTodo={completeTodoHandler}
          deleteTodo={deleteTodoHandler}
        />
      ))}
    </div>
  );
};
